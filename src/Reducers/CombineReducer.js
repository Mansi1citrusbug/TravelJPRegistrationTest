import { combineReducers } from 'redux'

import Registratioreducer from './Registratioreducer';


const RootReducer = combineReducers({
 
  section: Registratioreducer,
 
})

export default RootReducer