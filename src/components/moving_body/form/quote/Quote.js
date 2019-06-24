import React, { Component } from "react";
import "./Quote.css";
class Quote extends Component {

    state = {
        companiesO: [
            {
                name: 'Sovereign Trust Insurance Plc',
                value: this.props.companies.sovereignTrust(this.props.dState),
                link: 'http://www.stiplc.com/onlineQuotation.do?action=getQuote&selectedProduct=3rd%20PARTY'
            },
            {
                name: 'Cornerstone Insurance PLC',
                value: this.props.companies.cornerstone(this.props.dState),
                link: 'https://www.cornerstone.com.ng/products/detail/MQ=='
            },
            {
                name: 'AIICO Insurance',
                value: this.props.companies.aiico(this.props.dState),
                link: 'https://e-business.aiicoplc.com/Auto'
            },
            {
                name: 'Mutual Benefits Assurance Plc',
                value: this.props.companies.mutual(this.props.dState),
                link: 'http://www.mbaplc.com/mbaplc-1/quote.php?id=motor'
            },
            {
                name: 'Zenith General Insurance Company Ltd',
                value: this.props.companies.zenith(this.props.dState),
                link: 'https://selfservice.zenithinsurance.com.ng/Home/Categories'
            },
            {
                name: 'AXA Mansard Insurance',
                value: '--',
                link: 'https://www.axamansard.com/autoflex/autoflex.aspx/'
            },
            {
                name: 'Leadway Assurance Company Limited',
                value: '--',
                link: 'https://www.leadway.com/category_insurance/motor-insurance/'
            },
            {
                name: 'Custodian and Allied Insurance Plc',
                value: '--',
                link: 'https://www.custodianplc.com.ng/carinsurance'
            },
            {
                name: 'Standard Alliance Insurance Plc',
                value: '--',
                link: 'https://www.sainsuranceng.com/product/motor-insurance/'
            },
            {
                name: 'Sterling Assurance',
                value: '--',
                link: 'https://www.sterlingassure.com/products.php?id=33'
            },
            {
                name: 'Unitrust Insurance Company Limited',
                value: '--',
                link: 'http://www.sahamunitrust.com/products.php?id=32'
            }
            
            
        ],
        companies: [],
        hide: true
    }

    insuranceCompanies = () => {
        let companies = this.state.companiesO.map(company=>{ 
              
            // let value = ''+company.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
            let vehicleNumber = this.props.dState.field.vehicles.length

            return(
            <div /*hidden={company.value === '--' && this.state.hide}*/ id="insurance-company">
                <h3>{company.name}</h3><br/>
                <h3>{company.value} Naira /year</h3>
                <a id="insurance-link" target="_blank" href={company.link}>Contact this Company</a>
            </div>
            )
        })
        this.setState({companies})
    }
    
    viewMoreQuotes = () => {
        const hide = this.state.hide
        this.setState({
            hide: !hide
        })
    }

    componentDidMount(){
        this.insuranceCompanies();
        this.props.reachFinal();
        window.scrollTo(0, 0);
    }

    render(){        
        return(
            <div id="insurance-companies">
                {this.state.companies}
                <button className="save-and-continue" type='button' hidden={!this.state.hide} onClick={this.viewMoreQuotes}>View More Quotes</button>
            </div>
        );
    }
}
export default Quote;