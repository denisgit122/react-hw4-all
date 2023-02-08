import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./carSlise/carSlice";

const root=combineReducers({
car:carReducer
})
const setUpStore=configureStore({
    reducer:root
})
export {setUpStore}
