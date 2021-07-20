import Staticjson from "../Constant/Staticjson";
const json = Staticjson.data;
const InitialState = {
  staticjson: json,
  stepid: 0
};


const Registratioreducer = (state = InitialState, action) => {
  switch (action.type) {
    case "AddDetails":
      return {
        ...state,
        staticjson: { ...state.staticjson, ...action.data }
      };

    case "StepidIncrese":
      return {
        ...state,
        stepid: state.stepid + 1
      };
    case "Stepiddecrese":
      return {
        ...state,
        stepid: state.stepid - 1
      };

    case "Stepidreset":
      return (state = { ...state, ...state.stepid});

      case "Stepidskiptoend":
        return {
          ...state,
          stepid:7
        };

    default:
      return state;
  }
};
export default Registratioreducer;

