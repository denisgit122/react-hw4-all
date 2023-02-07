import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "../slice/UserSlice";
import {postReducer} from "../slice/PostSlice";

const rootReducer=combineReducers({
    users: userReducer,
    posts: postReducer
})
const setAppstore=configureStore({
    reducer:rootReducer
})
export {setAppstore}