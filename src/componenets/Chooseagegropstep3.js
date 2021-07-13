import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function Chooseagegropstep3() {
    const MyAgegrpdata = useSelector(state => state.section);
    debugger
    function Divagegroup(MyAgegrpdata) {
        debugger
        return MyAgegrpdata.map((MyAgegrpdata, index) => {
      
            const { id, title, IsVailid } = MyAgegrpdata //destructuring
            
            return (
      
                <div class="col-lg-2 col-md-2 grid-125 plr-8">
                <div class="radio-card-box age-group-card-box">
                    <label for="opt-age-group01" class="label-box">
                        <div class="title-row">
                            <p>{title}</p>
                        </div>
                    </label>
                    <input type="radio" class="form-radio form-radio-age-group" id={id} name="age-group-select" value={IsVailid} />
                </div>
            </div>
           
           )
          })
        
    }
    return (
        <div>
             <div class="common-div age-group-div">
                <div class="container">
                    <div class="row">
    
                        <div class="col-lg-12 col-md-12">        
    
                            <div class="common-card-div">
                                
                                <div class="heading-top-row">
                                    <div class="heading-div"> 
                                        <h2>Choose Age Group</h2>
                                        <p>Select age group and continue!</p>
                                    </div>
                                </div>

                                <div class="main-body-div main-body-div2">

                                    <div class="select-img-root select-label-root">
                                        <div class="row get-row mr-minus-8">
                                        {Divagegroup(MyAgegrpdata[0].AgeGroup)}
                                          
                                      
                                        </div>
                                        <div class="row get-row mr-minus-8">
                                            <div class="col-lg-12 col-md-12 plr-8">
                                                <div class="checkbox-select-root">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" name="example1"/>
                                                        <label class="custom-control-label" for="customCheck">Undisclosed age</label>
                                                      </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="footer-bottom-row">
                                    <div className="container">
                                        <div className="row mr-minus-8">
                                            <div className="col-lg-12 plr-8">
                                                <div className="button-row">
                                                    <div className="btn-left-side justify-content-between"> 
                                                        <button className="btn btn-outline-primary btn-common btn-previous">
                                                            <i className="fe fe-arrow-left fe-icon"></i>
                                                            <span className="text-span">Previous</span>
                                                        </button>
                                                        <a href="#" className="btn btn-link btn-skip mr-30">Skip <span className="remove-mobile">to End of </span>Process!</a>
                                                    </div>
                                                    <div className="btn-right-side"> 
                                                        <button className="btn btn-primary btn-common btn-continue">
                                                            <span className="text-span">Continue</span>
                                                            <i className="fe fe-arrow-right fe-icon"></i>
                                                        </button>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                            </div>
                            
                        </div>  
                        
                    </div>        
                </div>
            </div>
        </div>
    )
}
