import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../slice/UserSlice";

const rootReducer=combineReducers({
    users:userReducer
})
const setAppstore=configureStore({
    reducer:rootReducer
})
export {setAppstore}