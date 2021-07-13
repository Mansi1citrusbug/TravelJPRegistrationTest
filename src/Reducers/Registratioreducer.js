import Staticjson from "../Constant/Staticjson";

const InitialState=Staticjson.data;


const Registratioreducer = (state=InitialState,action) =>{
 
    switch (action.type) {
        case "AddDetails":
             return  state={...state,...action.data};
    
        default: return state;
         
    }


}
export default Registratioreducer