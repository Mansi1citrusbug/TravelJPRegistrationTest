import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";
export default function ChooseOccupationstep2() {
  const occupationdata = useSelector((state) => state.section.staticjson);

  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [occdatastate, setoccdataset] = useState([]);
  const clickSkiptoend = () => {
    validation(occdatastate);
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      const Adddata = {
        ...occdatastate,
      };
      dispatch(AddDetails(Adddata));
    }
  };
  const clickcontinue = () => {
    validation(occdatastate);
    if (errors.iserror === "false") {
      dispatch(StepidIncrese());
    } else {
      dispatch(Stepidreset());
    }
  };

  const clickprevious = () => {
    dispatch(Stepiddecrese());
  };

  useEffect(() => {
    if (occupationdata !== "") {
      setoccdataset(occupationdata.Occupations);
    }
  }, [occupationdata]);
  function validation(data) {
    errors["iserror"] = "false";
    var Array = [];
    if (data.length !== 0) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].IsVailid == true) {
          Array.push(data[index]);
        }
        if (Array.length > 0) {
          errors["iserror"] = "false";
          errors["Occupations"] = "";
        } else {
          errors["iserror"] = "true";
          errors["Occupations"] = "Please select one Occupation ";
        }
      }
    } else {
      errors["iserror"] = "true";
      errors["Occupations"] = "Please select one Occupation ";
    }

    setErrors(errors);
  }

  const radioOnclick = (id) => {
    for (let index = 0; index < occupationdata.Occupations.length; index++) {
      if (occupationdata.Occupations[index].id === id) {
        var clonedata = "";
        if (occupationdata.Occupations[index].IsVailid === true) {
          clonedata = {
            ...occupationdata.Occupations[index],
            IsVailid: false,
          };
        } else {
          clonedata = {
            ...occupationdata.Occupations[index],
            IsVailid: true,
          };
        }

        var obj = {
          ...obj,
          [index]: clonedata,
        };
        var finalobject = { ...occupationdata.Occupations, ...obj };
        var finalArray = Object.keys(finalobject).map(function (key) {
          return finalobject[key];
        });

        setoccdataset(finalArray);
        validation(finalArray);

        dispatch(AddDetails({ Occupations: finalArray }));
      }
    }
  };
  function divOccupation(occupationdata) {
    return occupationdata.map((occupationdata, index) => {
      const { id, title, icon, IsVailid } = occupationdata;
      let activeclass = "";
      if (IsVailid === true) {
        activeclass = "radio-card-box occupation-card-box active";
      } else {
        activeclass = "radio-card-box occupation-card-box";
      }
      return (
        <div
          className="col-lg-3 col-md-3 grid-20 plr-8"
          onClick={() => radioOnclick(id)}
        >
          <div className={activeclass}>
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
                      {divOccupation(occupationdata.Occupations)}
                    </div>
                    <span style={{ color: "red" }}>{errors.Occupations}</span>
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
    </>
  );
}
