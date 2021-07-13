import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function ChooseOccupationstep2() {
    const MyOccdata = useSelector(state => state.section);
debugger
    function DivOccupation(MyOccdata) {
        debugger
        return MyOccdata.map((MyOccdata, index) => {
      
            const { id, title, icon, IsVailid } = MyOccdata //destructuring
            
            return (
      
                <div className="col-lg-3 col-md-3 grid-20 plr-8">
                <div className="radio-card-box occupation-card-box">
                    <label for="opt-radio01" className="label-box">
                        <div className="icon-img-thumb">
                           {icon}
                        </div>
                        <div className="title-row">
                            <p>{title}</p>
                        </div>
                    </label>
                    <input type="radio" className="form-radio form-radio-occupation" id={id} name="occupation-select" value={IsVailid} />
                </div>
            </div>
            )
          })
        
    }
    return (
        <>
                <div className="common-div occupation-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Choose Occupation</h2>
                                        <p>Enter user name or email and why you want to join!</p>
                                    </div>
                                </div>

                                <div className="main-body-div">

                                    <div className="select-img-root">
                                        <div className="row get-row mr-minus-8">
                                     {DivOccupation(MyOccdata[0].Occupations)}
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
        </>
    )
}
