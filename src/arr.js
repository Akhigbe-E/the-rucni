(function(){


    var allKeys = [//                                                     pr  pu mp cb
      //["media.documentation.passport_photo_source_url",                       1,  1, 1, 1],
      //["media.documentation.signature_source_url",                       1,  1, 1, 1],
      //["media.documentation.signature_two_letter_source_url",                       1,  1, 1, 1],
      //["media.documentation.employment_letter_source_url",                       1,  1, 1, 1],
      //["media.documentation.birth_certificate_source_url",                       1,  1, 1, 1],
      //["media.documentation.welcome_letter_source_url",                          1,  1, 1, 1],
      ////["media.documentation.employer_authorisation_letter_source_url",           1,  1, 1, 1],
      //["media.documentation.nin_enrolment_slip_source_url",                      1,  1, 0, 0],
      ////["media.documentation.bvn_enrolment_slip_source_url",                      1,  1, 0, 0],
      //["media.documentation.proof_of_salary_gl_2004_source_url",                 0,  1, 0, 0], 
      //["media.documentation.proof_of_salary_gl_2007_source_url",                 0,  1, 0, 0], 
      //["media.documentation.proof_of_salary_gl_2010_source_url",                 0,  1, 0, 0],
      //["media.documentation.proof_of_salary_gl_2013_source_url",                 0,  1, 0, 0],
      //["media.documentation.proof_of_salary_gl_2016_source_url",                 0,  1, 0, 0],
      //["media.documentation.proof_of_salary_current_source_url",                 0,  1, 0, 0],
      //["media.documentation.ippis_registration_source_url",                      0,  1, 0, 0],
      //["media.documentation.record_of_service_source_url",                       0,  1, 0, 0],
      ["media.documentation.promotion_letter_current_source_url",         0,  1, 0, 0],
      ["media.documentation.promotion_letter_2004_source_url",            0,  1, 0, 0], 
      ["media.documentation.promotion_letter_2007_source_url",            0,  1, 0, 0],
      ["media.documentation.promotion_letter_2010_source_url",            0,  1, 0, 0],
      ["media.documentation.promotion_letter_2013_source_url",            0,  1, 0, 0],
      ["media.documentation.promotion_letter_2016_source_url",            0,  1, 0, 0],
      ["financials.salary_structure_2004",                                0,  1, 0, 0],
      ["financials.salary_structure_2007",                                0,  1, 0, 0],
      ["financials.salary_structure_2010",                                0,  1, 0, 0],
      ["financials.salary_structure_2013",                                0,  1, 0, 0],
      ["financials.salary_structure_2016",                                0,  1, 0, 0],
      ["salary_structure",                                                0,  1, 0, 0],
      ["financials.gl_2004",                                              0,  1, 0, 0],
      ["financials.gl_2007",                                              0,  1, 0, 0],
      ["financials.gl_2010",                                              0,  1, 0, 0],
      ["financials.gl_2013",                                              0,  1, 0, 0],
      ["financials.gl_2016",                                              0,  1, 0, 0],
      ["grade_level",                                                     0,  1, 0, 0],
      ["financials.step_2004",                                            0,  1, 0, 0],
      ["financials.step_2007",                                            0,  1, 0, 0],
      ["financials.step_2010",                                            0,  1, 0, 0],
      ["financials.step_2013",                                            0,  1, 0, 0],
      ["financials.step_2016",                                            0,  1, 0, 0],
      ["step",                                                            0,  1, 0, 0],
      ["employer.is_ippis_registered",                                    0,  1, 0, 0],
      //["media.documentation.transfer_acceptance_of_service_source_url",          0,  1, 0, 0],
      ["employee_id",                                                     1,  1, 0, 1],
      ["employee_service_id",                                             0,  1, 0, 0],
      ["ippis_registration_date",                                         0,  1, 0, 0],
      ["ippis_number",                                                    0,  1, 0, 0],
      ["employer.business_type",                                          0,  0, 1, 1],
      ["transfer_date",                                                   0,  1, 0, 0],
 
    ];
      
      try{
    
          var applicationTypeKey = "employer.sector_classification";
    
          var applicationControl = formelo().getVal(applicationTypeKey);
          if (!applicationControl){
              formelo().toast('Please choose a sector classification type');
          }
          applicationControl = applicationControl.key;
         // alert(applicationControl);
    
          var isPrivate = applicationControl === 'PR';
          var isPublic = applicationControl === 'PU';
          var isMicropension = applicationControl  === 'MP';
          var isCrossBoarder = applicationControl  === 'CB';
      
          for (var i = 0; i < allKeys.length; i++) {
            if(isPrivate){
                if (allKeys[i][1] == 1){
                    formelo().updateMetaData(allKeys[i][0], {isVisible : true});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : true});
                } else {
                    formelo().updateMetaData(allKeys[i][0], {isVisible : false});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : false});
                }
            }else if (isPublic){
                if (allKeys[i][2] == 1){
                    formelo().updateMetaData(allKeys[i][0], {isVisible : true});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : true});
                } else {
                    formelo().updateMetaData(allKeys[i][0], {isVisible : false});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : false});
                }
            }else if(isMicropension){
                if (allKeys[i][3] == 1){
                    formelo().updateMetaData(allKeys[i][0], {isVisible : true});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : true});
                } else {
                    formelo().updateMetaData(allKeys[i][0], {isVisible : false});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : false});
                }
            }else if(isCrossBoarder){
                if (allKeys[i][4] == 1){
                    formelo().updateMetaData(allKeys[i][0], {isVisible : true});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : true});
                } else {
                    formelo().updateMetaData(allKeys[i][0], {isVisible : false});
                    formelo().updateMetaData(allKeys[i][0], {isRequired : false});
                }
            }
          }
      } catch (e){
          formelo().toast(e.message);
      }
    })();