import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";
export default function Selectareafollowsstep4() {
  const selectesareadata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [selectedareaset, setselectedareaset] = useState([]);

  const clickSkiptoend = () => {
    validation(selectedareaset);
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      dispatch(AddDetails({ SelectedArea: selectedareaset }));
    }
  };
  const clickcontinue = () => {
    validation(selectedareaset);
    if (errors.iserror === "false") {
      dispatch(StepidIncrese());
      dispatch(AddDetails({ SelectedArea: selectedareaset }));
    } else {
      dispatch(Stepidreset());
    }
  };

  const clickprevious = () => {
    dispatch(Stepiddecrese());
  };

  useEffect(() => {
    if (selectesareadata !== "") {
      setselectedareaset(selectesareadata.SelectedArea);
    }
  }, [selectesareadata]);
  function validation(data) {
    errors["iserror"] = "false";

    var Array = [];
    if (data.length !== 0) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].IsVailid === true) {
          Array.push(data[index]);
        }
        if (Array.length > 1) {
          errors["iserror"] = "false";
          errors["SelectedArea"] = "";
        } else {
          errors["iserror"] = "true";
          errors["SelectedArea"] = "Please select two Area ";
        }
      }
    } else {
      errors["iserror"] = "true";
      errors["SelectedArea"] = "Please select two Area ";
    }

    setErrors(errors);
  }

  const handlesearchchang = (evt) => {
    const filterarray = [];

    const value = evt.target.value;
    if (value !== "") {
      for (let index = 0; index < selectedareaset.length; index++) {
        if (selectedareaset[index].title.includes(value)) {
          filterarray.push(selectedareaset[index]);
        }
      }
      if (filterarray !== []) {
        setselectedareaset(filterarray);
      }
    } else {
      setselectedareaset(selectesareadata.SelectedArea);
    }
  };

  const radioOnclick = (id) => {
    for (let index = 0; index < selectedareaset.length; index++) {
      if (selectedareaset[index].id === id) {
        var clonedata = "";
        if (selectedareaset[index].IsVailid === true) {
          clonedata = {
            ...selectedareaset[index],
            IsVailid: false,
          };
        } else {
          clonedata = {
            ...selectedareaset[index],
            IsVailid: true,
          };
        }

        var obj = {
          ...obj,
          [index]: clonedata,
        };
        var finalobject = { ...selectedareaset, ...obj };
        var finalArray = Object.keys(finalobject).map(function (key) {
          return finalobject[key];
        });

        setselectedareaset(finalArray);
        validation(finalArray);

        // dispatch(AddDetails({ SelectedArea: finalArray }));
      }
    }
  };
  function divSelectedarea(selectesareadata) {
    return selectesareadata.map((selectesareadata, index) => {
      const { id, title, img, IsVailid } = selectesareadata; //destructuring
      let activeclass = "";
      if (IsVailid === true) {
        activeclass = "img-checkbox-card-box area-card-box selected";
      } else {
        activeclass = "img-checkbox-card-box area-card-box";
      }

      return (
        <div
          class="col-lg-3 col-md-3 grid-20 plr-8"
          onClick={() => radioOnclick(id)}
        >
          <div class={activeclass}>
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
  return (
    <div>
      <div class="common-div areas-div">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="common-card-div">
                <div class="heading-top-row">
                  <div class="heading-div">
                    <h2>Select Areas to Follow</h2>
                    <p>Select area and continue!</p>
                  </div>
                </div>

                <div class="main-body-div">
                  <div class="search-box-root">
                    <div class="row get-row mr-minus-8">
                      <div class="col-lg-12 col-md-12 plr-8">
                        <div class="input-group input-group-30">
                          <input
                            type="text"
                            onChange={handlesearchchang}
                            class="form-control"
                            placeholder="Select Areas to Follow"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-success btn-search">
                              <i class="material-icons search-icons">
                                {" "}
                                search{" "}
                              </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="select-img-root most-img-root">
                    <div class="row get-row mr-minus-8">
                      <div class="col-lg-12 col-md-12 plr-8">
                        <div class="heading-h4">
                          <h4>Most popular Area</h4>
                        </div>
                      </div>
                    </div>
                    <div class="row get-row mr-minus-8">
                      {divSelectedarea(selectedareaset)}
                      <span style={{ color: "red" }}>
                        {errors.SelectedArea}
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
