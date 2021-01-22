

let problems = [
    {
      "Diabetes": [
        {
          "medications": [
            {
              "medicationsClasses": [
                {
                  "Drug": [
                    {
                      "associatedDrug": [
                        {
                          "name": "asprin",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ],
                      "associatedDrug#2": [
                        {
                          "name": "somethingElse",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ]
                    }
                  ],
                  "Drug2": [
                    {
                      "associatedDrug": [
                        {
                          "name": "asprin",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ],
                      "associatedDrug#2": [
                        {
                          "name": "somethingElse",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "labs": [
            {
              "missing_field": "missing_value"
            }
          ]
        }
      ],

      "Asthma": [
        {}
      ],
      "Cancer": [
        {
          "medications": [
            {
              "medicationsClasses": [
                {
                  "Drug": [
                    {
                      "associatedDrug": [
                        {
                          "name": "asprin",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ],
                      "associatedDrug#2": [   
                        {
                          "name": "somethingElse",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ]
                    }
                  ],
                  "Drug2": [
                    {
                      "associatedDrug": [
                        {
                          "name": "asprin",
                          "dose": "",  
                          "strength": "500 mg"
                        }
                      ],
                      "associatedDrug#2": [
                        {
                          "name": "somethingElse",
                          "dose": "",
                          "strength": "500 mg"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "labs": [
            {
              "missing_field": "missing_value"
            }
          ]
        }
      ]
    }
  ]


  function renderProblemName() {
      let AllProblemsDOM = problems.map(function(problem,index){
        let SingelProblemDOM = `

         <div class="col-4 mt-5">
        <div class="card bg-primary text-blue ">
            <div class="card shadow">
                <div class="card-body design-body">
                ${problem.Diabetes.map(function(diabete,index){

                  return ` <h4> Diabetes:</h4>
                  ${diabete.medications.map(function(medication,index)
                    {

                    return ` <h5> Medications:</h5>
                    ${medication.medicationsClasses.map(function(medicClass,index) 
                      {

                      return `<ul> <h5> Drug:</h5>
                      ${medicClass.Drug.map(function(Drugs,index)
                        {

                        
                        return `
                        <h5> Associated Drug 1 </h5>
                        <li>
                        ${Drugs.associatedDrug.map(function(associateDrug,index)
                          {

                            return `  <p> ${associateDrug.name} </p>
                                      <p> ${associateDrug.dose} </p>
                                      
                                    <p> ${associateDrug.strength} </p>`
                          }
                          
                        )}

                        
                        </li>
                        <h5> Associated Drug#2 </h5>
                        <li>
                        ${Drugs["associatedDrug#2"].map(function(associateDrug2,index){
                            return ` 
                            <p> ${associateDrug2.name} </p>
                            <p> ${associateDrug2.dose} </p>
                            <p> ${associateDrug2.strength} </p>`

                        })}
                        </li>`

                      }


                        )}
                        </ul>` 

                      }
                      
                      
                      )}`
                   
                  
                  }
                    
                    
                    )}
                    <ul>
                    <h5>Labs</h5>
                    
                    ${diabete.labs.map(function(lab,index){
                      return `<li> ${lab.missing_field} </li>`
                    })}
                    </ul>`
                    
                 
              
                } 
                  
                  )} 


              </div>
              </div>
              </div>
              </div>
          


                  <div class="col-4 mt-5">
                  <div class="card bg-primary text-blue">
                  <div class="card shadow">
                  <div class="card-body">
            
                  <h4> Cancer: </h4>
                  ${problem.Cancer.map(function(diabete,index){
      
                        return ` <h5> Medications: </h5>
                        ${diabete.medications.map(function(medication,index){
      
                          return ` 
                          ${medication.medicationsClasses.map(function(medicClass,index) {
      
                            return ` <ul> <h5>Drug:</h5>
                            ${medicClass.Drug.map(function(Drugs,index){
      
                              
                              return `
                              <h5> Associated Drug </h5>
                              <li>
                              ${Drugs.associatedDrug.map(function(associateDrug,index)
                                {
      
                                  return `  <p> ${associateDrug.name} </p>
                                            <p> ${associateDrug.dose} </p>
                                          <p> ${associateDrug.strength} </p>`
                                }
                                
                              )}
                              </li>
                              <h5> Associated Drug#2 </h5>
                              <li>
                              ${Drugs["associatedDrug#2"].map(function(associateDrug2,index){
                                  return ` 
                                  <p> ${associateDrug2.name} </p>
                                  <p> ${associateDrug2.dose} </p>
                                  <p> ${associateDrug2.strength} </p>`
      
                              })}
                              </li>`
      
                            }
      
      
                              )}
                              </ul>` 
      
                            }
                            
                            
                            )}`
                         
                        
                        }
                          
                          
                          )}
                          <ul>
                          <h5>Labs</h5>
                          
                          ${diabete.labs.map(function(lab,index){
                            return `<li> ${lab.missing_field} </li>`
                          })}
                          </ul>`
                          
                       
                    
                      }
                        
                        
                        )} 

                        </div>
                        </div>
                        </div>
                        </div>

                        <div class="col-4 mt-5">
                        <div class="card bg-primary text-blue">
                        <div class="card shadow">
                        <div class="card-body">
                        
                  <h4> Asthma </h4>
                  ${problem.Asthma.map(function(ashthama,index){
                    return ` <ull><li> ${index} </li></ul>`
                  }
                    
                  
                  )}  
                      
                    </div>
                    </div>
                    </div>
                    </div>

                  `
                return SingelProblemDOM;
                
                
                   
        
    
     })


     let finalDOM = `<div class="row">${AllProblemsDOM}</div>`
     console.log(finalDOM);
     document.getElementById("app").innerHTML = finalDOM;
     
  }
    

    

  renderProblemName(problems)