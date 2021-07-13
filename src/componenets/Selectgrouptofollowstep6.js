import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function Selectgrouptofollowstep6() {
    const MySelectedGroup = useSelector(state => state.section);
    debugger
    function DivSelectedGroup(MySelectedGroup) {
        debugger
        return MySelectedGroup.map((MySelectedGroup, index) => {
      
            const { id, title,img, IsVailid } = MySelectedGroup //destructuring
            
            return (
      
                <div className="col-lg-3 col-md-3 grid-20 plr-8">
                <div className="img-checkbox-card-box groups-card-box">
                    <label for="select-groups-option01" className="label-box">
                        <div className="check-box-position">
                            <button className="checkbox-round-div">
                                <i className="fe fe-check fe-custom"></i>
                            </button>
                        </div>
                        <div className="img-banner">
                            <img src={img} className="img-fluid img-responsive" alt="groups" />
                        </div>
                        <div className="check-title-row">
                            <h4>{title}</h4>
                        </div>
                    </label>
                    <input type="checkbox" className="form-checkbox form-checkbox-groups" id={id} value={IsVailid} />
                </div>
            </div>

           
           )
          })
        
    }
    return (
        <div>
            <div className="common-div areas-div group-div">
                <div className="container">
                    <div className="row">
    
                        <div className="col-lg-12 col-md-12">        
    
                            <div className="common-card-div">
                                
                                <div className="heading-top-row">
                                    <div className="heading-div"> 
                                        <h2>Select Group to Follow</h2>
                                        <p>Select group and continue!</p>
                                    </div>
                                </div>

                                <div className="main-body-div">
                                    
                                    <div className="search-box-root">
                                        <div className="row get-row mr-minus-8">
                                            <div className="col-lg-12 col-md-12 plr-8">
                                                <div className="input-group input-group-30">
                                                    <input type="text" className="form-control" placeholder="Select Group to Follow" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-success btn-search"><i className="material-icons search-icons"> search </i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        

                                    <div className="select-img-root most-img-root">
                                        <div className="row get-row mr-minus-8">
                                            <div className="col-lg-12 col-md-12 plr-8">
                                                <div className="heading-h4"><h4>Most popular Groups</h4></div>
                                            </div>
                                        </div>
                                        <div className="row get-row mr-minus-8">
                                        {DivSelectedGroup(MySelectedGroup[0].SelectedGruop)}
                 
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
