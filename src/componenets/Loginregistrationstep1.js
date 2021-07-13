import React from 'react'

export default function Loginregistrationstep1() {
    return (
        <div>
            <div className="common-div user-registration-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>User registration</h2>
                                        <p>Enter user name or email and why you want to join!</p>
                                    </div>
                                </div>

                                <div className="main-body-div main-body-div2 pr-80">

                                    <div className="login-div">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-div">
                                                    <div className="form-group">
                                                        <label for="">Name</label>
                                                        <input type="text" className="form-control" placeholder="Enter name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="">Email</label>
                                                        <input type="email" className="form-control" placeholder="Enter email address" />
                                                        <span className="help-error font-italic display-none">
                                                            <span className="text-underline font-500">Email ID</span> is already exist
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="social-row">
                                                    <div className="left-social-txt">
                                                        <p> <span className="text-span">Or </span>  Login with</p>
                                                    </div>
                                                    <div className="social-button-row">
                                                        <button className="btn btn-social btn-google-plus mr-10">
                                                            <img src="images/icons/Google+.svg" className="img-fluid img-social img-google" alt="Google+" />
                                                        </button>
                                                        <button className="btn btn-social btn-facebook">
                                                            <img src="images/icons/Facebook.svg" className="img-fluid img-social img-facebook" alt="Facebook" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="description-div">
                                                    <h4>Why you will love <span className="text-bold">Travelz.jp</span></h4>
                                                    <div className="list-info-div">
                                                        <ul>
                                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                                            <li>Duis porttitor tristique varius. </li>
                                                            <li>Suspendisse potenti.</li>
                                                            <li>Praesent mauris nunc posuere malesuadaest.</li>
                                                            <li>Suspendisse potenti. </li>
                                                        </ul>
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
