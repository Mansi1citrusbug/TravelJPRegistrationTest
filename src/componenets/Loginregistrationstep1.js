import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";

export default function Loginregistrationstep1() {
  const userRegistrationdata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [feild, setfeild] = useState({
    Name: "",
    Email: "",
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

  useEffect(() => {
    if (userRegistrationdata !== "") {
      setfeild({
        Name: userRegistrationdata.Name,
        Email: userRegistrationdata.Email,
      });
    }
  }, [userRegistrationdata]);

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
    if (Name == "Email") {
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value === "" || value.trim() === "") {
        errors["email"] = "Please enter email";
      } else if (!re.test(value)) {
        errors["email"] = "Enter a valid email";
      } else {
        errors["email"] = "";
      }
    }
    if (Name === "Name") {
      if (value === "" || value.trim() === "") {
        errors["Name"] = "Please enter Name";
      } else {
        errors["Name"] = "";
      }
    }

    setErrors(errors);
  }
  function continuebtnvalidation() {
    errors["iserror"] = "false";
    if (feild.Name === "" || feild.Name === undefined) {
      errors["Name"] = "Please enter Name";
      errors["iserror"] = "true";
    }

    if (feild.Email === "" || feild.Email === undefined) {
      errors["email"] = "Please enter email";
      errors["iserror"] = "true";
    }

    setErrors(errors);
  }
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
                            <input
                              type="text"
                              onChange={handleChange}
                              value={feild.Name}
                              className="form-control"
                              name="Name"
                              placeholder="Enter name"
                            />
                            <span style={{ color: "red" }}>{errors.Name}</span>
                          </div>
                          <div className="form-group">
                            <label for="">Email</label>
                            <input
                              type="email"
                              name="Email"
                              value={feild.Email}
                              className="form-control"
                              onChange={handleChange}
                              placeholder="Enter email address"
                            />

                            <span style={{ color: "red" }}>{errors.email}</span>
                          </div>
                        </div>
                        <div className="social-row">
                          <div className="left-social-txt">
                            <p>
                              {" "}
                              <span className="text-span">Or </span> Login with
                            </p>
                          </div>
                          <div className="social-button-row">
                            <button className="btn btn-social btn-google-plus mr-10">
                              <img
                                src="images/icons/Google+.svg"
                                className="img-fluid img-social img-google"
                                alt="Google+"
                              />
                            </button>
                            <button className="btn btn-social btn-facebook">
                              <img
                                src="images/icons/Facebook.svg"
                                className="img-fluid img-social img-facebook"
                                alt="Facebook"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="description-div">
                          <h4>
                            Why you will love{" "}
                            <span className="text-bold">Travelz.jp</span>
                          </h4>
                          <div className="list-info-div">
                            <ul>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </li>
                              <li>Duis porttitor tristique varius. </li>
                              <li>Suspendisse potenti.</li>
                              <li>
                                Praesent mauris nunc posuere malesuadaest.
                              </li>
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
