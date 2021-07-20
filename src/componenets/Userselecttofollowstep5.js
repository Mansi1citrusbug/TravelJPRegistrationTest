import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";
export default function Userselecttofollowstep5() {
  const selecteduserdata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [selecteduserset, setselecteduserset] = useState([]);

  const clickSkiptoend = () => {
    validation(selecteduserset);
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      dispatch(AddDetails({ SelectedUser: selecteduserset }));
    }
  };
  const clickcontinue = () => {
    validation(selecteduserset);
    if (errors.iserror === "false") {
      dispatch(StepidIncrese());
      dispatch(AddDetails({ SelectedUser: selecteduserset }));
    } else {
      dispatch(Stepidreset());
    }
  };

  const clickprevious = () => {
    dispatch(Stepiddecrese());
  };

  useEffect(() => {
    if (selecteduserdata !== "") {
      setselecteduserset(selecteduserdata.SelectedUser);
    }
  }, [selecteduserdata]);
  function validation(data) {
    errors["iserror"] = "false";
    var Array = [];
    if (data.length !== 0) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].IsVailid === true) {
          Array.push(data[index]);
        }
        if (Array.length > 2) {
          errors["iserror"] = "false";
          errors["SelectedUser"] = "";
        } else {
          errors["iserror"] = "true";
          errors["SelectedUser"] = "Please select three User ";
        }
      }
    } else {
      errors["iserror"] = "true";
      errors["SelectedUser"] = "Please select three User ";
    }

    setErrors(errors);
  }
  const handlesearchchang = (evt) => {
    const filterarray = [];

    const value = evt.target.value;
    if (value !== "") {
      for (let index = 0; index < selecteduserset.length; index++) {
        if (
          selecteduserset[index].title.includes(value) ||
          selecteduserset[index].email.includes(value)
        ) {
          filterarray.push(selecteduserset[index]);
        }
      }
      if (filterarray !== []) {
        setselecteduserset(filterarray);
      }
    } else {
      setselecteduserset(selecteduserdata.SelectedUser);
    }
  };
  const radioOnclick = (id) => {
    for (let index = 0; index < selecteduserset.length; index++) {
      if (selecteduserset[index].id === id) {
        var clonedata = "";
        if (selecteduserset[index].IsVailid === true) {
          clonedata = {
            ...selecteduserset[index],
            IsVailid: false,
          };
        } else {
          clonedata = {
            ...selecteduserset[index],
            IsVailid: true,
          };
        }

        var obj = {
          ...obj,
          [index]: clonedata,
        };
        var finalobject = { ...selecteduserset, ...obj };
        var finalArray = Object.keys(finalobject).map(function (key) {
          return finalobject[key];
        });

        setselecteduserset(finalArray);
        validation(finalArray);


      }
    }
  };
  function divselecteduser(selecteduserdata) {
    return selecteduserdata.map((selecteduserdata, index) => {
      const { id, title, email, img, IsVailid } = selecteduserdata; //destructuring
      let activeclass = "";
      if (IsVailid === true) {
        activeclass = "user-card-box follow-card-box selected";
      } else {
        activeclass = "user-card-box follow-card-box";
      }
      return (
        <div
          className="col-lg-3 col-md-3 grid-20 plr-8"
          onClick={() => radioOnclick(id)}
        >
          <div className={activeclass}>
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
  return (
    <div>
      <div className="common-div follow-div">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="common-card-div">
                <div className="heading-top-row">
                  <div className="heading-div">
                    <h2>Select Users to Follow</h2>
                    <p>Select user and continue!</p>
                  </div>
                </div>

                <div className="main-body-div">
                  <div className="search-box-root">
                    <div className="row get-row mr-minus-8">
                      <div className="col-lg-12 col-md-12 plr-8">
                        <div className="input-group input-group-30">
                          <input
                            type="text"
                            onChange={handlesearchchang}
                            className="form-control"
                            placeholder="Select User to Follow"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-success btn-search">
                              <i className="material-icons search-icons">
                                {" "}
                                search{" "}
                              </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="select-img-root most-img-root popular-user-root">
                    <div className="row get-row mr-minus-8">
                      <div className="col-lg-12 col-md-12 plr-8">
                        <div className="heading-h4">
                          <h4>Most popular User</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row get-row mr-minus-8">
                      {divselecteduser(selecteduserset)}
                      <span style={{ color: "red" }}>
                        {errors.SelectedUser}
                      </span>
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
                            <a className="btn btn-link btn-skip mr-30" onClick={clickSkiptoend}>
                              Skip{" "}
                              <span className="remove-mobile">to End of </span>
                              Process!
                            </a>
                          </div>
                          <div className="btn-right-side">
                            <button
                              onClick={clickcontinue}
                              className="btn btn-primary btn-common btn-continue"
                            >
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
  );
}
