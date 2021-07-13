import React from 'react'

export default function Passwordsetupstep7() {
    return (
        <div>
              <div className="common-div password-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Password setup</h2>
                                        <p>Enter password and confirm password!</p>
                                    </div>
                                </div>

                                <div className="main-body-div main-body-div2">

                                    <div className="login-div">
                                        <div className="row mr-minus-8">
                                            <div className="col-lg-6 col-md-6 plr-8">
                                                <div className="form-div">
                                                    <div className="form-group">
                                                        <label for="">Enter password</label>
                                                        <div className="input-group-box password-box">
                                                            <input type="password" className="form-control" name="password" id="password" placeholder="Enter password"/>
                                                            <button type="button" id="show_password" name="show_password" className="pass-hide password-view-click"><i className="material-icons password-view">remove_red_eye</i></button> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 plr-8">
                                                <div className="form-div">
                                                    <div className="form-group">
                                                        <label for="">Confirm password</label>
                                                        <div className="input-group-box password-box">
                                                            <input type="password" className="form-control" name="password" id="confirm-password" placeholder="Enter confirm password"/>
                                                            <button type="button" id="show_password2" name="show_password" className="pass-hide password-view-click"><i className="material-icons password-view">remove_red_eye</i></button> 
                                                        </div>
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
