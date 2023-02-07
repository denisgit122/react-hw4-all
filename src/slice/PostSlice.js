import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {PostServcice} from "../configs/service/postServcice";

const initialState={
    posts:[],
    loading:null,
    errors:null,
    selectedPost:null
}
const getAll=createAsyncThunk(
    'PostSlice/getAll',
    async (_, {rejectedWithValue})=>{
        try {
          const {data}= await PostServcice.getAll()
            return data
        }catch (e) {
            return  rejectedWithValue(e.response.data)
        }
    }
)

const PostSlice=createSlice({
    name:'postSlice',
    initialState,
    reducers:{
        setPOstId:(state,action)=>{
            state.selectedPost=action.payload
        }
    },
    extraReducers:(builder)=>builder
        .addCase(getAll.fulfilled,(state, action)=>{
            state.posts=action.payload
        })


})
const{reducer:postReducer,actions:{setPOstId}} =PostSlice
const postAction={
    getAll,
    setPOstId
}
export {postReducer,postAction,PostSlice}