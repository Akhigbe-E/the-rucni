import React, { Component } from 'react';

// import DatePicker from "react-datepicker";
// import subDays from "date-fns/subDays";

import './DriverInfo.css';
// import "react-datepicker/dist/react-datepicker.css";

export class DriverInfo extends Component {

  
    state = {
        name: 'driver',
        field: {
          id: this.props.driver.id,
          firstName: this.props.driver.firstName,
          lastName: this.props.driver.lastName,
          birthDate: this.props.driver.birthDate,
          emailAddress: this.props.driver.emailAddress,
          phoneNumber: this.props.driver.phoneNumber,
          gender: this.props.driver.gender,
          editClose: this.props.driver.editClose,
          notFilled: this.props.driver.notFilled,
          additionalInfodriver: {
            question1: {
                one: this.props.driver.additionalInfodriver.question1.one,
                two: this.props.driver.additionalInfodriver.question1.two,
                three: this.props.driver.additionalInfodriver.question1.three
            },
            question2: {
                one: this.props.driver.additionalInfodriver.question2.one,
                two: this.props.driver.additionalInfodriver.question2.two,
                three: this.props.driver.additionalInfodriver.question2.three,
                four: this.props.driver.additionalInfodriver.question2.four
            },
            question3: {
                question: {
                    one: this.props.driver.additionalInfodriver.question3.question.one,
                    two: this.props.driver.additionalInfodriver.question3.question.two
                },
                category: {
                    myFault: this.props.driver.additionalInfodriver.question3.category.myFault,
                    notMyFault: this.props.driver.additionalInfodriver.question3.category.notMyFault,
                    claims: this.props.driver.additionalInfodriver.question3.category.claims
                }  
            },
            notFilled: this.props.driver.additionalInfodriver.notFilled
          }
        },
        errors:{
          firstName:'',
          lastName: '',
          birthDate: '',
          emailAddress: '',
          phoneNumber: ''
        },
        errorsExist: true
    };

    onChange=e=>{
      const field = this.state.field;
      field[e.target.name] = e.target.value;
      this.setState({
        field
      });
      this.notFilled();
    };
    
    handleChange = date => {
      const field = this.state.field;
      field.birthDate = date;
      this.setState({
        field
      });
    };

    keyUpAction = (e) => {
      this.selectFieldToValidate(e);
    }

    selectFieldToValidate = (e) => {      
      if(e.target.name === 'emailAddress'){
        this.handleEmailValidation(e.target.name);
      }else if(e.target.name === 'birthDate'){
        this.handleBirthdateValidation(e.target.name)
      }else if(e.target.name === 'phoneNumber'){
        this.handlePhonenumberValidation(e.target.name)
      }else{
        this.handleTextValidation(e.target.name);
      } 
    }

    handleEditSubmit = () => {
      this.props.onEditSubmit(this.state)
    }

    handleRadioChange=(e)=>{
      const field = this.state.field;
      field.gender = e.target.value;
      this.setState({
        field
      });
      this.notFilled();
    }

    notFilled=()=>{
      console.log(this.state.field)
      let count = 0;
      const field = this.state.field;
      Object.values(this.state.field).forEach(element => {
        if(element === ''){
          count +=1
        }
      });
      if(count === 0){
        field.notFilled = false
        this.setState({
          field
        })
      }else{
        field.notFilled = true
        this.setState({
          field
        })
      }
    }

    displayButtons = () => {
      console.log(this.state.field.editClose);
      
      if (!this.state.field.editClose) {
        return(
          <button type="button" className="save-and-continue" id="navigationNext" hidden={this.state.field.notFilled} onClick={this.handleEditSubmit}>Submit Change</button>
        );
      } 
    }
    timeout = null;
    handleTextValidation = (name) => {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(()=> {
        let fields = this.state.field;
      const{ firstName, lastName,birthDate,emailAddress, phoneNumber } = this.state.errors
      let errors = {firstName, lastName,birthDate, emailAddress, phoneNumber};
      let formIsValid = true;

      //Name
      if(!fields[name]){
        formIsValid = false;
        errors[name] = "Kindly fill up this field";
        this.setState({errors, errorsExist: true})
        return
     }

     if(typeof fields[name] !== undefined){
      if(!fields[name].match(/^[a-zA-Z]+$/)){
         formIsValid = false;
         errors[name] = "Kindly enter a correct name. No special characters";
         this.setState({errors, errorsExist: true})
      }else if(fields[name].length < 2){
        formIsValid = false;
         errors[name] = "This name is too short. Minimum is 2 letters";
         this.setState({errors, errorsExist: true})
      }else if(fields[name].length >20){
        formIsValid = false;
         errors[name] = "Sorry this name is too long. Maximum is 20 letters";
         this.setState({errors, errorsExist: true})
      }
       else{
      errors[name] = '';
       this.setState({errors, errorsExist: false})
    } 
   } 
     return formIsValid;
      }, 500)
      
  }

    componentDidMount(){
      window.scrollTo(0, 0);
      if(this.state.field.gender.length > 1){
        this.setState({errorsExist: false})
      }
    }

    handleEmailValidation = (email) => {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(()=> {
      let fields = this.state.field;
      const{ firstName, lastName,birthDate,emailAddress, phoneNumber } = this.state.errors
      let errors = {firstName, lastName,birthDate, emailAddress, phoneNumber};
      let formIsValid = true;

      //Email
      if(!fields[email]){
         formIsValid = false;
         errors[email] = "Kindly fill up this field";
         this.setState({errors, errorsExist: true})
        return
      }

      if(typeof fields[email] !== undefined){
        //  let lastAtPos = fields[email].lastIndexOf('@');
        //  let lastDotPos = fields[email].lastIndexOf('.');

         if (!fields[email].match(/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/)){
            errors[email] = "This email is not valid";
            this.setState({errors, errorsExist: true})
          }else{
            errors[email] = '';
            this.setState({errors, errorsExist: false})
          }
     }  
     return formIsValid;},300)
    }

    handleBirthdateValidation = (date) => {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(()=> {
      let fields = this.state.field;
      const{ firstName, lastName,birthDate,emailAddress, phoneNumber } = this.state.errors
      let errors = {firstName, lastName,birthDate, emailAddress, phoneNumber};
      let formIsValid = true;

      if(!fields[date]){
        formIsValid = false;
        errors[date] = "Kindly fill up this field";
        this.setState({errors, errorsExist: true})
       return
     }
     if(typeof fields[date] !== undefined){
       console.log(date);
       
      if(!fields[date].match(/^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/)){
        formIsValid = false;
        errors[date] = "Invalid date, kindly check with the format above and try again";
        this.setState({errors, errorsExist: true})
      }else if((parseInt(fields[date].slice(0, 4))>2000) && !(parseInt(fields[date].slice(0, 4))===2001 && parseInt(fields[date].slice(5, 7),10)<3 )){
        formIsValid = false;
        errors[date] = "Too young";
        this.setState({errors, errorsExist: true})
      } else if(fields[date].length > 15){
        formIsValid = false;
         errors[date] = "Sorry, this name is too long";
         this.setState({errors, errorsExist: true})
      }
       else{
      errors[date] = '';
       this.setState({errors, errorsExist: false})
    } 
   } 
      return formIsValid;},100)
    }
    
    handlePhonenumberValidation = (phone) => {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(()=> {
      let fields = this.state.field;
      const{ firstName, lastName,birthDate,emailAddress, phoneNumber } = this.state.errors
      let errors = {firstName, lastName,birthDate, emailAddress, phoneNumber};
      let formIsValid = true;

      if(!fields[phone]){
        formIsValid = false;
        errors[phone] = "Kindly fill up this field";
        this.setState({errors, errorsExist: true})
       return
     }
     if(typeof fields[phone] !== undefined){
      if(!fields[phone].match(/0[7-9][0-1][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/)){
         formIsValid = false;
         errors[phone] = "Invalid phone number";
         this.setState({errors, errorsExist: true})
      }else if(fields[phone].length < 11){
        formIsValid = false;
         errors[phone] = "You're almost there";
         this.setState({errors, errorsExist: true})
      }else if(fields[phone].length > 11){
        formIsValid = false;
         errors[phone] = "Whoops, you missed it";
         this.setState({errors, errorsExist: true})
      }
       else{
      errors[phone] = '';
       this.setState({errors, errorsExist: false})
    } 
   } 
      return formIsValid;},100)
    }

    // errorsExist = () => {
    //   let count = 0
    //   let errorsExist = this.state.errorsExist
    //   Object.values(this.state.errors).forEach(element => {
    //     if(element !== ''){
    //       count +=1
    //     }
    //   });

    //   if(count === 0){
    //     errorsExist = false
    //     this.setState({
    //       errorsExist
    //     })
    //   }else{
    //     errorsExist = true
    //     this.setState({
    //       errorsExist
    //     })
    //   }
    // }

    onSubmitClick=e=>{
      e.preventDefault();
      this.props.handleSubmit(this.state);
      this.props.nextStep(); 
    }

  render() {
    console.log(this.state.errors);
    
    return (
      <div>
        <form onSubmit={ this.onSubmitClick } >
        <h2>Driver Info</h2>
          <div className='centered'>
            <div className="input-title">First Name</div>
            <input name='firstName' className="input" type='text' autocomplete="off" value={ this.state.field.firstName } id="input" placeholder='Enter your First name' onKeyUp={this.keyUpAction} onChange={ this.onChange }/>
            <div className="err-text">{this.state.errors.firstName}</div><div className="under-err-text"></div>

            <div className="input-title">Last Name</div>
            <input name='lastName' className="input" type='text' autocomplete="off" value={this.state.field.lastName} id="input" placeholder='Enter your First name' onKeyUp={this.keyUpAction} onChange={ this.onChange }/>
            <div className="err-text">{this.state.errors.lastName}</div><div className="under-err-text"></div>

            <div className="input-title">Birth Day( YYYY/MM/DD or YYYY-MM-DD)</div>
            <input name='birthDate' className="input" type='text' value={ this.state.field.birthDate } id="input" placeholder='Enter your birth date' onKeyUp={this.keyUpAction} onChange={ this.onChange }/>
            {/* <div className="input" id="input">
              <DatePicker
                selected={this.state.field.birthDate}
                onChange={this.handleChange}
                excludeDates={[new Date(), subDays(new Date(), 5)]}
                placeholderText="Select a date other than today or yesterday"
              />
            </div> */}
            <div className="err-text">{this.state.errors.birthDate}</div><div className="under-err-text"></div>

            <div className="input-title">Email Address</div>
            <input name='emailAddress' className="input" type='text' autocomplete="off" value={ this.state.field.emailAddress } id="input" placeholder='Enter your email address' onKeyUp={this.keyUpAction} onChange={ this.onChange }/>
            <div className="err-text">{this.state.errors.emailAddress}</div><div className="under-err-text"></div>

            <div className="input-title">Phone Number</div>
            <input name='phoneNumber' className="input" type='text' autocomplete="off" value={ this.state.field.phoneNumber } id="input" placeholder='Phone number without country code' onKeyUp={this.keyUpAction} onChange={ this.onChange }/>
            <div className="err-text">{this.state.errors.phoneNumber}</div><div className="under-err-text"></div>
            <div id="input-radio">
            <div className="input-title-radio">Gender</div>
              <input name='Gender' type='radio' value="Male" checked={this.state.field.gender === "Male"} className="radioButton" onChange={ this.handleRadioChange }/> Male
              <input name='Gender' type='radio' value="Female" checked={this.state.field.gender === "Female"} className="radioButton" onChange={ this.handleRadioChange }/> Female<br/>
            </div>
            
            <br/>
            <button id="navigationNext" className="save-and-continue" type='submit' hidden={this.state.field.notFilled || !this.state.field.editClose || this.state.errorsExist}>Save and Continue</button>
          </div>
          {this.displayButtons()}
        </form>
        <button id="navigationPrevious" type='button' onClick={this.props.noNewEntityStep} hidden={this.props.newEntity===false}>Go back to driver summary</button>
        <button id="navigationPrevious" type='button' onClick={this.props.finalStep} hidden={this.props.final === false}>Go back to get quote</button>
        <button id="navigationPrevious" onClick={this.props.previousStep} hidden={this.props.final===true || this.props.newEntity === true} >Previous</button>  
      </div>
    );
  }
}

export default DriverInfo

// (function() {
//   var DEFAULT_EMPLOYMENT_DATE = 2016;
//   var ed  = formelo().getVal('employment_date');
//   var yoe = ed ? parseInt(ed.substring(0,4)) : DEFAULT_EMPLOYMENT_DATE;
//   yoe = isNaN(yoe) ? DEFAULT_EMPLOYMENT_DATE : yoe;
//   var b04 = yoe <= 2004 ? 1 : 0;
//   var b07 = yoe <= 2007 ? 1 : 0;
//   var b10 = yoe <= 2010 ? 1 : 0;
//   var b13 = yoe <= 2013 ? 1 : 0;
//   var b16 = yoe <= 2016 ? 1 : 0;
// //alert("b04:"+ b04 + ", b07:" + b07 + ", b10:" + b10 + ", b13:" + b13 + ", b16:"+ b16);
//   var allKeys = [//                                                            pr  pu   st mp cb 
//       ["media.identity.passport_photo_source_url",                               1,  1,   1,  1, 1],
//       ["media.identity.signature_source_url",                                    1,  1,   1,  1, 1],
//       ["media.identity.signature_two_letter_source_url",                         1,  1,   1,  1, 1],
//       ["media.documentation.employment_letter_source_url",                       1,  1,   1,  1, 1],
//       ["media.documentation.birth_certificate_source_url",                       1,  1,   1,  1, 1],
//       ["media.documentation.welcome_letter_source_url",                          1,  1,   1,  1, 1],/* No(automated) in all columns */
//       //["media.documentation.employer_authorisation_letter_source_url",         1,  1,   1,  1, 1],/* No in all columns */
//       ["media.documentation.nin_enrolment_slip_source_url",                      2,  2,   2,  0, 0],/* No in all columns */
//       //["media.documentation.bvn_enrolment_slip_source_url",                    1,  1,   1,  0, 0],/* Yes in all columns */
//       ["media.documentation.proof_of_salary_gl_2004_source_url",                 0,  b04, b04 * 2,  0, 0], 
//       ["media.documentation.proof_of_salary_gl_2007_source_url",                 0,  b07, b07 * 2,  0, 0], 
//       ["media.documentation.proof_of_salary_gl_2010_source_url",                 0,  b10, b10 * 2,  0, 0],
//       ["media.documentation.proof_of_salary_gl_2013_source_url",                 0,  b13, b13 * 2,  0, 0],
//       ["media.documentation.proof_of_salary_gl_2016_source_url",                 0,  b16, b16 * 2,  0, 0],
//       ["media.documentation.proof_of_salary_current_source_url",                 0,  1,   2,  0, 0],/* Yes in the 2nd and 3rd columns */
//       ["media.documentation.transfer_of_service_source_url",                     0,  1,   2,  0, 0],/* No in all columns */
//       ["media.documentation.ippis_registration_source_url",                      0,  1,   2,  0, 0],/* Yes in the 3rd column */
//       ["media.documentation.record_of_service_source_url",                       0,  1,   1,  0, 0],
//       ["media.documentation.promotion_letter_gl_2004_source_url",                0,  b04, b04 * 2,  0, 0], 
//       ["media.documentation.promotion_letter_gl_2007_source_url",                0,  b07, b07 * 2,  0, 0],
//       ["media.documentation.promotion_letter_gl_2010_source_url",                0,  b10, b10 * 2,  0, 0],
//       ["media.documentation.promotion_letter_gl_2013_source_url",                0,  b13, b13 * 2,  0, 0],
//       ["media.documentation.promotion_letter_gl_2016_source_url",                0,  b16, b16 * 2,  0, 0],
//       ["media.documentation.promotion_letter_gl_current_source_url",             0,  1,   2,  0, 0],
//       ["financials.salary_structure_2004",                                       0,  b04, b04 * 2,  0, 0],
//       ["financials.salary_structure_2007",                                       0,  b07, b07 * 2,  0, 0],
//       ["financials.salary_structure_2010",                                       0,  b10, b10 * 2,  0, 0],
//       ["financials.salary_structure_2013",                                       0,  b13, b13 * 2,  0, 0],
//       ["financials.salary_structure_2016",                                       0,  b16, b16 * 2,  0, 0],
//       ["salary_structure",                                                       0,  1,   2,  0, 0],/* Yes in the 2nd and 3rd columns */
//       ["financials.gl_2004",                                                     0,  b04, b04 * 2,  0, 0],
//       ["financials.gl_2007",                                                     0,  b07, b07 * 2,  0, 0],
//       ["financials.gl_2010",                                                     0,  b10, b10 * 2,  0, 0],
//       ["financials.gl_2013",                                                     0,  b13, b13 * 2,  0, 0],
//       ["financials.gl_2016",                                                     0,  b16, b16 * 2,  0, 0],
//       ["grade_level",                                                            0,  1,   2,  0, 0],/* Yes in the 2nd and 3rd columns */
//       ["financials.step_2004",                                                   0,  b04, b04 * 2,  0, 0],
//       ["financials.step_2007",                                                   0,  b07, b07 * 2,  0, 0],
//       ["financials.step_2010",                                                   0,  b10, b10 * 2,  0, 0],
//       ["financials.step_2013",                                                   0,  b13, b13 * 2,  0, 0],
//       ["financials.step_2016",                                                   0,  b16, b16 * 2,  0, 0],
//       ["step",                                                                   0,  1,   2,  0, 0],/* Yes in the 2nd and 3rd columns */
//       ["employer.is_ippis_registered",                                           0,  1,   2,  0, 0],/* Yes in the 3rd column */
//       ["employee_id",                                                            1,  1,   1,  0, 1],
//       ["employee_service_id",                                                    0,  1,   1,  0, 0],/* No in all columns */
//       ["ippis_registration_date",                                                0,  1,   2,  0, 0],/* Yes in the 3rd column */
//       ["ippis_number",                                                           0,  1,   2,  0, 0],/* Yes in the 3rd column */
//       ["employer.business_type",                                                 0,  0,   0,  1, 1],
//       ["transfer_date",                                                          0,  1,   1,  0, 0]/* No in all columns */
//     ];
//   try {
//       var applicationTypeKey = "employer.sector_classification";

//       var applicationControl = formelo().getVal(applicationTypeKey);
//       if (!applicationControl) {
//           formelo().toast("Please choose a sector classification type");
//       }
//       applicationControl = applicationControl.key;
//       //alert(applicationControl);

//       var isPrivate = applicationControl === "PR";
//       var isPublic = applicationControl === "PU";
//       var isState = applicationControl === "ST";
//       var isMicropension = applicationControl === "MP";
//       var isCrossBorder = applicationControl === "CB";

//       for (var i = 0; i < allKeys.length; i++) {
//           var offset = -1;
//           if (isPrivate) {
//               offset = 1;
//           } else if (isPublic) {
//               offset = 2;
//           } else if (isState) {
//               offset = 3;
//           } else if (isMicropension) {
//               offset = 4;
//           } else if (isCrossBorder) {
//               offset = 5;
//           }
          
//           var isMedia = allKeys[i][0].match(/^media.*/gi) != null;
//           var isRequired = allKeys[i][offset] == 1 && !isMedia;
//           var isVisible = allKeys[i][offset] != 0;

//           formelo().updateMetaData(allKeys[i][0], { isVisible: isVisible });
//           formelo().updateMetaData(allKeys[i][0], { isRequired: isRequired });
//       }
//   } catch (e) {
//       formelo().toast(e.message);
//   }
// })();
