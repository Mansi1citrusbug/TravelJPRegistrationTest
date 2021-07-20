import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";

export default function OutputDisplay() {
  const reduxstoredata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const clickprevious = () => {
    dispatch(Stepiddecrese());
  };
  function divOccupation(occupationdata) {
    const occupationlist = [];
    for (let index = 0; index < occupationdata.length; index++) {
      if (occupationdata[index].IsVailid === true) {
        occupationlist.push(occupationdata[index]);
      }
    }
    return occupationlist.map((occupationlist, index) => {
      const { id, title, icon, IsVailid, IsActive } = occupationlist;

      return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
          <div className="radio-card-box occupation-card-box">
            <label for="opt-radio01" className="label-box">
              <div className="icon-img-thumb">{icon}</div>
              <div className="title-row">
                <p>{title}</p>
              </div>
            </label>
            <input
              type="radio"
              className="form-radio form-radio-occupation"
              id={id}
              name="occupation-select"
              value={IsVailid}
            />
          </div>
        </div>
      );
    });
  }
  function divAgegroup(agegroupdata) {
    const agelist = [];
    for (let index = 0; index < agegroupdata.length; index++) {
      if (agegroupdata[index].IsVailid === true) {
        agelist.push(agegroupdata[index]);
      }
    }
    return agelist.map((agelist, index) => {
      const { id, title, IsVailid } = agelist; //destructuring
      return (
        <div class="col-lg-2 col-md-2 grid-125 plr-8">
          <div class="radio-card-box age-card-box">
            <label for="opt-age-group01" class="label-box">
              <div class="title-row">
                <p>{title}</p>
              </div>
            </label>
            <input
              type="radio"
              class="form-radio form-radio-age-group"
              id={id}
              name="age-group-select"
              value={IsVailid}
            />
          </div>
        </div>
      );
    });
  }
  function divSelectedarea(selectesareadata) {
    const arealist = [];
    for (let index = 0; index < selectesareadata.length; index++) {
      if (selectesareadata[index].IsVailid === true) {
        arealist.push(selectesareadata[index]);
      }
    }
    return arealist.map((arealist, index) => {
      const { id, title, img, IsVailid } = arealist; //destructuring

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
            <input
              type="checkbox"
              class="form-checkbox form-checkbox-areas"
              id={id}
              value={IsVailid}
            />
          </div>
        </div>
      );
    });
  }
  function divselecteduser(selecteduserdata) {
    const userlist = [];
    for (let index = 0; index < selecteduserdata.length; index++) {
      if (selecteduserdata[index].IsVailid === true) {
        userlist.push(selecteduserdata[index]);
      }
    }
    return userlist.map((userlist, index) => {
      const { id, title, email, img, IsVailid } = userlist; //destructuring

      return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
          <div className="user-card-box follow-card-box">
            <label for="select-follow-option01" className="label-box">
              <div className="check-box-position">
                <button className="checkbox-round-div">
                  <i className="fe fe-check fe-custom"></i>
                </button>
              </div>
              <div className="img-user-thumb">
                <img src={img} className="img-fluid img-user" alt="follow" />
              </div>
              <div className="check-title-row">
                <h4>{title}</h4>
                <p>{email}</p>
              </div>
            </label>
            <input
              type="checkbox"
              className="form-checkbox form-checkbox-follow"
              id={id}
              value={IsVailid}
            />
          </div>
        </div>
      );
    });
  }
  function divselectedgroup(selectedgroupdata) {
    const grouplist = [];
    for (let index = 0; index < selectedgroupdata.length; index++) {
      if (selectedgroupdata[index].IsVailid === true) {
        grouplist.push(selectedgroupdata[index]);
      }
    }
    return grouplist.map((grouplist, index) => {
      const { id, title, img, IsVailid } = grouplist; //destructuring
      let activeclass = "";
      if (IsVailid === true) {
        activeclass = "img-checkbox-card-box groups-card-box selected";
      } else {
        activeclass = "img-checkbox-card-box groups-card-box";
      }
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
                <img
                  src={img}
                  className="img-fluid img-responsive"
                  alt="groups"
                />
              </div>
              <div className="check-title-row">
                <h4>{title}</h4>
              </div>
            </label>
            <input
              type="checkbox"
              className="form-checkbox form-checkbox-groups"
              id={id}
              value={IsVailid}
            />
          </div>
        </div>
      );
    });
  }
  function divwhatnextstep(whatnextdonstepdata) {
    const nextsteplist = [];
    for (let index = 0; index < whatnextdonstepdata.length; index++) {
      if (whatnextdonstepdata[index].IsVailid === true) {
        nextsteplist.push(whatnextdonstepdata[index]);
      }
    }
    return nextsteplist.map((nextsteplist, index) => {
      const { id, title, icon, IsVailid } = nextsteplist; //destructuring

      return (
        <div className="col-lg-3 col-md-3 grid-20 plr-8">
          <div className="radio-card-box what-to-do-card-box">
            <label for="what-to-do-radio01" className="label-box">
              <div className="icon-img-thumb">{icon}</div>
              <div className="title-row">
                <p>{title}</p>
              </div>
            </label>
            <input
              type="radio"
              className="form-radio form-radio-what-to-do"
              id={id}
              name="what-to-do-select"
              value={IsVailid}
            />
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="main-body-div main-body-div2 pr-80">
        <div className="login-div">
          <div className="container">
            <div className="form-div">
              <div className="form-group displafeild">
                <div className="col-lg-4 col-md-4">
                  <label for="">Name</label>
                </div>
                <div className="col-lg-8 col-md-8">
                  <input
                    type="text"
                    value={reduxstoredata.Name}
                    className="form-control"
                    name="Name"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div className="form-group displafeild">
                <div className="col-lg-4 col-md-4">
                  <label for="">Email</label>
                </div>
                <div className="col-lg-8 col-md-8">
                  <input
                    type="email"
                    name="Email"
                    value={reduxstoredata.Email}
                    className="form-control"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div className="form-group displafeild">
                <div className="col-lg-4 col-md-4">
                  <label for="">Password</label>
                </div>
                <div className="col-lg-8 col-md-8">
                  <input
                    type="password"
                    value={reduxstoredata.Password}
                    className="form-control"
                    name="Password"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="form-group displafeild">
                <div className="col-lg-4 col-md-4">
                  <label for="">Confirm Password</label>
                </div>
                <div className="col-lg-8 col-md-8">
                  <input
                    type="password"
                    className="form-control"
                    value={reduxstoredata.ConfirmPassword}
                    name="ConfirmPassword"
                    id="confirm-password"
                    placeholder="Enter confirm password"
                  />
                </div>
              </div>

              <div className="main-body-div">
                <div className="select-img-root">
                  <div className="form-group displafeild">
                    <div className="col-lg-4 col-md-4">
                      <h2>Occupation</h2>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="row get-row mr-minus-8">
                        {divOccupation(reduxstoredata.Occupations)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-body-div">
              <div className="select-img-root">
                <div className="form-group displafeild">
                  <div className="col-lg-4 col-md-4">
                    <h2>Age</h2>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div class="main-body-div main-body-div2">
                      <div class="select-img-root select-label-root">
                        <div class="row get-row mr-minus-8">
                          {divAgegroup(reduxstoredata.AgeGroup)}
                        </div>
                        <div class="row get-row mr-minus-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-body-div">
              <div className="select-img-root">
                <div className="form-group displafeild">
                  <div className="col-lg-4 col-md-4">
                    <h2>Area</h2>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div class="select-img-root most-img-root">
                      <div class="row get-row mr-minus-8">
                        {divSelectedarea(reduxstoredata.SelectedArea)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-body-div">
              <div className="select-img-root">
                <div className="form-group displafeild">
                  <div className="col-lg-4 col-md-4">
                    <h2>User</h2>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div class="select-img-root most-img-root">
                      <div class="row get-row mr-minus-8">
                        {divselecteduser(reduxstoredata.SelectedUser)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-body-div">
              <div className="select-img-root">
                <div className="form-group displafeild">
                  <div className="col-lg-4 col-md-4">
                    <h2>Group</h2>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div class="select-img-root most-img-root">
                      <div class="row get-row mr-minus-8">
                        {divselectedgroup(reduxstoredata.SelectedGruop)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-body-div">
              <div className="select-img-root">
                <div className="form-group displafeild">
                  <div className="col-lg-4 col-md-4">
                    <h2>What to done next step</h2>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <div class="select-img-root most-img-root">
                      <div class="row get-row mr-minus-8">
                        {divwhatnextstep(reduxstoredata.Whattodonext)}
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
                        <button
                          onClick={clickprevious}
                          className="btn btn-outline-primary btn-common btn-previous"
                        >
                          <i className="fe fe-arrow-left fe-icon"></i>
                          <span className="text-span">Previous</span>
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
  );
}
