import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServ} from "../../service/urls";

const initialState =  {
    cars: [] ,
    loading:null
}

const getAll=createAsyncThunk(
    'carSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data}=await carServ.getAll()
            return data
        }catch (e) {
            return thunkAPI.fulfillWithValue(e.response.data)
        }

    }
)
const create=createAsyncThunk(
    'carSlice/create',
    async ({data},thunkAPI)=>{
        try {
            await carServ.create(data)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.fulfillWithValue(e.response.data)
        }

    }
)
const delet=createAsyncThunk(
    'carSlice/delet',
    async ({id},thunkAPI)=>{
        try {
            await carServ.delete(id)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.fulfillWithValue(e.response.data)
        }

    }
)


const carSlice= createSlice({
    name:'carSlice',
    initialState,
    reducers:{
    
    },
     extraReducers:builder =>
         builder
             .addCase(getAll.fulfilled,(state, action)=>{
                 state.cars=action.payload
             })
    // {
    //     [getAll.fulfilled]:(state,action)=>{
    //         state.cars=action.payload
    //     }}

})
const{reducer:carReducer} =carSlice
const carActions={
    getAll,
    create,
    delet
}
export {carActions,carReducer,carSlice}