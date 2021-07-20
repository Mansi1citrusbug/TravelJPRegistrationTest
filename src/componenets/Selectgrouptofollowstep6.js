import React, { useState, useEffect } from "react";
import {
  AddDetails,
  StepidIncrese,
  Stepidreset,
  Stepiddecrese,
  Stepidskiptoend
} from "../actions/RegistrationActions";
import { useSelector, useDispatch } from "react-redux";
export default function Selectgrouptofollowstep6() {
  const selectedgroupdata = useSelector((state) => state.section.staticjson);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [selectedgroupset, setselectedgroupset] = useState([]);
  const clickSkiptoend = () => {
    validation(selectedgroupset);
    if (errors.iserror === "false") {
      dispatch(Stepidskiptoend());
      dispatch(AddDetails({ SelectedGruop: selectedgroupset }));
    }
  };
  const clickcontinue = () => {
    validation(selectedgroupset);
    if (errors.iserror === "false") {
      dispatch(StepidIncrese());
      dispatch(AddDetails({ SelectedGruop: selectedgroupset }));
    } else {
      dispatch(Stepidreset());
    }
  };

  const clickprevious = () => {
    dispatch(Stepiddecrese());
  };

  useEffect(() => {
    if (selectedgroupdata !== "") {
      setselectedgroupset(selectedgroupdata.SelectedGruop);
    }
  }, [selectedgroupdata]);
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
          errors["SelectedGruop"] = "";
        } else {
          errors["iserror"] = "true";
          errors["SelectedGruop"] = "Please select two group ";
        }
      }
    } else {
      errors["iserror"] = "true";
      errors["SelectedGruop"] = "Please select two group ";
    }

    setErrors(errors);
  }
  const handlesearchchang = (evt) => {
    const filterarray = [];

    const value = evt.target.value;
    if (value !== "") {
      for (let index = 0; index < selectedgroupset.length; index++) {
        if (selectedgroupset[index].title.includes(value)) {
          filterarray.push(selectedgroupset[index]);
        }
      }
      if (filterarray !== []) {
        setselectedgroupset(filterarray);
      }
    } else {
      setselectedgroupset(selectedgroupdata.SelectedGruop);
    }
  };
  const radioOnclick = (id) => {
    for (
      let index = 0;
      index < selectedgroupset.length;
      index++
    ) {
      if (selectedgroupset[index].id === id) {
        var clonedata = "";
        if (selectedgroupset[index].IsVailid === true) {
          clonedata = {
            ...selectedgroupset[index],
            IsVailid: false,
          };
        } else {
          clonedata = {
            ...selectedgroupset[index],
            IsVailid: true,
          };
        }

        var obj = {
          ...obj,
          [index]: clonedata,
        };
        var finalobject = { ...selectedgroupset, ...obj };
        var finalArray = Object.keys(finalobject).map(function (key) {
          return finalobject[key];
        });

        setselectedgroupset(finalArray);
        validation(finalArray);


      }
    }
  };
  function divselectedgroup(selectedgroupdata) {
    return selectedgroupdata.map((selectedgroupdata, index) => {
      const { id, title, img, IsVailid } = selectedgroupdata; //destructuring
      let activeclass = "";
      if (IsVailid === true) {
        activeclass = "img-checkbox-card-box groups-card-box selected";
      } else {
        activeclass = "img-checkbox-card-box groups-card-box";
      }
      return (
        <div
          className="col-lg-3 col-md-3 grid-20 plr-8"
          onClick={() => radioOnclick(id)}
        >
          <div className={activeclass}>
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
                          <input
                            type="text"
                            onChange={handlesearchchang}
                            className="form-control"
                            placeholder="Select Group to Follow"
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

                  <div className="select-img-root most-img-root">
                    <div className="row get-row mr-minus-8">
                      <div className="col-lg-12 col-md-12 plr-8">
                        <div className="heading-h4">
                          <h4>Most popular Groups</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row get-row mr-minus-8">
                      {divselectedgroup(selectedgroupset)}
                      <span style={{ color: "red" }}>
                        {errors.SelectedGruop}
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
