import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";
export default function Whattodonectstep8() {
  const whatnextdonstepdata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [whatdonenext, setwhatdonenext] = useState([]);

  const clickSkiptoend = () => {
    validation(whatdonenext);
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      dispatch(AddDetails({ Whattodonext: whatdonenext }));
    }
  };
  const clickcontinue = () => {
    validation(whatdonenext);
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
    if (whatnextdonstepdata !== "") {
      setwhatdonenext(whatnextdonstepdata.Whattodonext);
    }
  }, [whatnextdonstepdata]);
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
          errors["Whattodonext"] = "";
        } else {
          errors["iserror"] = "true";
          errors["Whattodonext"] = "Please select next step ";
        }
      }
    } else {
      errors["iserror"] = "true";
      errors["Whattodonext"] = "Please select next step ";
    }

    setErrors(errors);
  }

  const radioOnclick = (id) => {
    for (
      let index = 0;
      index < whatnextdonstepdata.Whattodonext.length;
      index++
    ) {
      if (whatnextdonstepdata.Whattodonext[index].id === id) {
        var clonedata = "";
        if (whatnextdonstepdata.Whattodonext[index].IsVailid === true) {
          clonedata = {
            ...whatnextdonstepdata.Whattodonext[index],
            IsVailid: false,
          };
        } else {
          clonedata = {
            ...whatnextdonstepdata.Whattodonext[index],
            IsVailid: true,
          };
        }

        var obj = {
          ...obj,
          [index]: clonedata,
        };
        var finalobject = { ...whatnextdonstepdata.Whattodonext, ...obj };
        var finalArray = Object.keys(finalobject).map(function (key) {
          return finalobject[key];
        });

        setwhatdonenext(finalArray);
        validation(finalArray);

        dispatch(AddDetails({ Whattodonext: finalArray }));
      }
    }
  };
  function divwhatnextstep(whatnextdonstepdata) {
    return whatnextdonstepdata.map((whatnextdonstepdata, index) => {
      const { id, title, icon, IsVailid } = whatnextdonstepdata; //destructuring
      if (IsVailid === true) {
        var activeclass = "";
        activeclass = "radio-card-box what-to-do-card-box active";
      } else {
        activeclass = "radio-card-box what-to-do-card-box";
      }
      return (
        <div
          className="col-lg-3 col-md-3 grid-20 plr-8"
          onClick={() => radioOnclick(id)}
        >
          <div className={activeclass}>
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
      <div className="common-div what-to-do-div">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="common-card-div">
                <div className="heading-top-row">
                  <div className="heading-div">
                    <h2>What to do next</h2>
                    <p>Choose option and continue!</p>
                  </div>
                </div>

                <div className="main-body-div">
                  <div className="select-img-root">
                    <div className="row get-row mr-minus-8 justify-content-center">
                      {divwhatnextstep(whatnextdonstepdata.Whattodonext)}
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
