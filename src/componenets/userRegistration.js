import React from 'react'
import Loginregistrationstep1 from './Loginregistrationstep1';
import ChooseOccupationstep2 from './ChooseOccupationstep2';
import Chooseagegropstep3 from './Chooseagegropstep3';
import Selectareafollowsstep4 from './Selectareafollowsstep4';
import Userselecttofollowstep5 from './Userselecttofollowstep5';
import Selectgrouptofollowstep6 from './Selectgrouptofollowstep6';
import Passwordsetupstep7 from './Passwordsetupstep7';
import Whattodonectstep8 from './Whattodonectstep8';
export default function userRegistration() {
 
    return (
        <>
            	<header>
        <div className="header-div clearfix" >
            <div className="inner-top-header-div clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="header-container">

                                <div className="logo-div">
                                    <a className="logo_link clearfix" href="index.html">
                                        <img src="images/logo.png" data-logo-loader className="img-fluid logo_img main-logo" alt="logo" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
    </header>
    <div className="main-middle-area">

<section className="common-section">
    <div className="background-image-full"></div>
    <Loginregistrationstep1 />
    <ChooseOccupationstep2 />
    <Chooseagegropstep3/>
    <Selectareafollowsstep4/>
    <Userselecttofollowstep5/>
    <Selectgrouptofollowstep6/>
    <Passwordsetupstep7 />
    <Whattodonectstep8/>
    </section>
    </div>
        </>
    )
}
