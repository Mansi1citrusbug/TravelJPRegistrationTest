import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";

export default function Passwordsetupstep7() {
  const passworddata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [feild, setfeild] = useState({
    Password: "",
    ConfirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const clickSkiptoend = () => {
    continuebtnvalidation();
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      const Adddata = {
        ...feild,
      };
      dispatch(AddDetails(Adddata));
    }
    else {
      dispatch(Stepidreset());
    }
  };


  const clickcontinue = () => {
    continuebtnvalidation();
    if (errors.iserror === "false") {
      dispatch(StepidIncrese());
      const Adddata = {
        ...feild,
      };
      dispatch(AddDetails(Adddata));
    } else {
      dispatch(Stepidreset());
    }
  };
  const clickprevious = () => {
    dispatch(Stepiddecrese());
  };
  useEffect(() => {
    if (passworddata !== "") {
      setfeild({
        Password: passworddata.Password,
        ConfirmPassword: passworddata.ConfirmPassword,
      });
    }
  }, [passworddata]);

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    const obj = {
      ...feild,
      [evt.target.name]: value,
    };
    setfeild(obj);

    validatononchange(name, value);
  }
  function validatononchange(Name, value) {
    if (Name == "Password") {
      let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      if (value === "" || value.trim() === "") {
        errors["Password"] = "Please enter Password";
      } else if (!re.test(value)) {
        errors["Password"] =
          "Minimum 8 character password with a Capital letter, small letter and a number";
      } else {
        errors["Password"] = "";
      }
    }
    if (Name === "ConfirmPassword") {
      if (value === "" || value.trim() === "") {
        errors["ConfirmPassword"] = "Please enter ConfirmPassword";
      } else if (value !== feild.Password) {
        errors["ConfirmPassword"] = "Same as password";
      } else {
        errors["ConfirmPassword"] = "";
      }
    }

    setErrors(errors);
  }
  function continuebtnvalidation() {
    errors["iserror"] = "false";
    if (feild.Password === "" || feild.Password === undefined) {
      errors["Password"] = "Please enter password";
      errors["iserror"] = "true";
    }

    if (feild.ConfirmPassword === "" || feild.ConfirmPassword === undefined) {
      errors["ConfirmPassword"] = "Please enter confirmpassword";
      errors["iserror"] = "true";
    }

    setErrors(errors);
  }
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
                              <input
                                type="password"
                                onChange={handleChange}
                                value={feild.Password}
                                className="form-control"
                                name="Password"
                                id="password"
                                placeholder="Enter password"
                              />
                              <button
                                type="button"
                                id="show_password"
                                name="show_password"
                                className="pass-hide password-view-click"
                              >
                                <i className="material-icons password-view">
                                  remove_red_eye
                                </i>
                              </button>
                            </div>
                          </div>
                          <span style={{ color: "red" }}>
                            {errors.Password}
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 plr-8">
                        <div className="form-div">
                          <div className="form-group">
                            <label for="">Confirm password</label>
                            <div className="input-group-box password-box">
                              <input
                                type="password"
                                onChange={handleChange}
                                value={feild.ConfirmPassword}
                                className="form-control"
                                name="ConfirmPassword"
                                id="confirm-password"
                                placeholder="Enter confirm password"
                              />
                              <button
                                type="button"
                                id="show_password2"
                                name="show_password"
                                className="pass-hide password-view-click"
                              >
                                <i className="material-icons password-view">
                                  remove_red_eye
                                </i>
                              </button>
                            </div>
                          </div>
                          <span style={{ color: "red" }}>
                            {errors.ConfirmPassword}
                          </span>
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
                              className="btn btn-outline-primary btn-common btn-previous"
                              onClick={clickprevious}
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
                              className="btn btn-primary btn-common btn-continue"
                              onClick={clickcontinue}
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
