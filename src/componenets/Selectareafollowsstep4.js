import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function Selectareafollowsstep4() {
    const MySelectedArea = useSelector(state => state.section);
    debugger
    function DivSelecteArea(MySelectedArea) {
        debugger
        return MySelectedArea.map((MySelectedArea, index) => {
      
            const { id, title,img, IsVailid } = MySelectedArea //destructuring
            
            return (
      
                <div class="col-lg-3 col-md-3 grid-20 plr-8">
                <div class="img-checkbox-card-box area-card-box">
                    <label for="select-area-option01" class="label-box">
                        <div class="check-box-position">
                            <button class="checkbox-round-div">
                                <i class="fe fe-check fe-custom"></i>
                            </button>
                        </div>
                        <div class="img-banner">
                            <img src={img} class="img-fluid img-responsive" alt="area" />
                        </div>
                        <div class="check-title-row">
                            <h4>{title}</h4>
                        </div>
                    </label>
                    <input type="checkbox" class="form-checkbox form-checkbox-areas" id={id} value={IsVailid} />
                </div>
            </div>

           
           )
          })
        
    }
    return (
        <div>
                        <div class="common-div areas-div">
                <div class="container">
                    <div class="row">
    
                        <div class="col-lg-12 col-md-12">        
    
                            <div class="common-card-div">
                                
                                <div class="heading-top-row">
                                    <div class="heading-div"> 
                                        <h2>Select Areas to Follow</h2>
                                        <p>Select area and continue!</p>
                                    </div>
                                </div>

                                <div class="main-body-div">
                                    
                                    <div class="search-box-root">
                                        <div class="row get-row mr-minus-8">
                                            <div class="col-lg-12 col-md-12 plr-8">
                                                <div class="input-group input-group-30">
                                                    <input type="text" class="form-control" placeholder="Select Areas to Follow" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-success btn-search"><i class="material-icons search-icons"> search </i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        

                                    <div class="select-img-root most-img-root">
                                        <div class="row get-row mr-minus-8">
                                            <div class="col-lg-12 col-md-12 plr-8">
                                                <div class="heading-h4"><h4>Most popular Area</h4></div>
                                            </div>
                                        </div>
                                        <div class="row get-row mr-minus-8">
                                        {DivSelecteArea(MySelectedArea[0].SelectedArea)}
                                
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
