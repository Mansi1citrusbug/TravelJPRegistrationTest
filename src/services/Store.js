import React from 'react'
import { createStore } from 'redux';
import RootReducer from '../Reducers/CombineReducer';
const Store=createStore(RootReducer);

export default Store;
