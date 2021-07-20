import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";
export default function Chooseagegropstep3() {
  const agegroupdata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [agedataset, setagedataset] = useState([]);

  const clickSkiptoend = () => {
    validation(agedataset);
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      const Adddata = {
        ...validation(agedataset),
      };
      dispatch(AddDetails(Adddata));
    }
  };
  const clickcontinue = () => {
    validation(agedataset);
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
    if (agegroupdata !== "") {
      setagedataset(agegroupdata.AgeGroup);
    }
  }, [agegroupdata]);
  function validation(data) {
    errors["iserror"] = "false";
    var Array = [];
    if (data.length !== 0) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].IsVailid === true) {
          Array.push(data[index]);
        }
        if (Array.length > 0) {
          errors["iserror"] = "false";
          errors["AgeGroup"] = "";
        } else {
          errors["iserror"] = "true";
          errors["AgeGroup"] = "Please select one Age ";
        }
      }
    } else {
      errors["iserror"] = "true";
      errors["AgeGroup"] = "Please select one Age ";
    }

    setErrors(errors);
  }

  const radioOnclick = (id) => {
    for (let index = 0; index < agegroupdata.AgeGroup.length; index++) {
      if (agegroupdata.AgeGroup[index].id === id) {
        var clonedata = "";
        if (agegroupdata.AgeGroup[index].IsVailid === true) {
          clonedata = {
            ...agegroupdata.AgeGroup[index],
            IsVailid: false,
          };
        } else {
          clonedata = {
            ...agegroupdata.AgeGroup[index],
            IsVailid: true,
          };
        }

        var obj = {
          ...obj,
          [index]: clonedata,
        };
        var finalobject = { ...agegroupdata.AgeGroup, ...obj };
        var finalArray = Object.keys(finalobject).map(function (key) {
          return finalobject[key];
        });

        setagedataset(finalArray);
        validation(finalArray);

        dispatch(AddDetails({ AgeGroup: finalArray }));
      }
    }
  };
  function divAgegroup(agegroupdata) {
    return agegroupdata.map((agegroupdata, index) => {
      const { id, title, IsVailid } = agegroupdata; //destructuring
      let activeclass = "";
      if (IsVailid === true) {
        activeclass = "radio-card-box age-card-box active";
      } else {
        activeclass = "radio-card-box age-card-box";
      }

      return (
        <div
          class="col-lg-2 col-md-2 grid-125 plr-8"
          onClick={() => radioOnclick(id)}
        >
          <div class={activeclass}>
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
  return (
    <div>
      <div class="common-div age-group-div">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="common-card-div">
                <div class="heading-top-row">
                  <div class="heading-div">
                    <h2>Choose Age Group</h2>
                    <p>Select age group and continue!</p>
                  </div>
                </div>

                <div class="main-body-div main-body-div2">
                  <div class="select-img-root select-label-root">
                    <div class="row get-row mr-minus-8">
                      {divAgegroup(agegroupdata.AgeGroup)}
                    </div>
                    <div class="row get-row mr-minus-8">
                      <div class="col-lg-12 col-md-12 plr-8">
                        <div class="checkbox-select-root">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                              name="example1"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Undisclosed age
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span style={{ color: "red" }}>{errors.AgeGroup}</span>
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
    </div>
  );
}
