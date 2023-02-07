import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./carSlice";

const rootREducer=combineReducers({
    car:carReducer
})
const setUpStore=configureStore({
    reducer:rootREducer
})
export {setUpStore}