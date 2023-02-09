import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "../carSlice/carSlice";

const root=combineReducers({
    cars:carReducer
})
const setStore = () => configureStore({
    reducer:root
    }

)

export {setStore}