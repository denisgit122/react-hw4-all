import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServ} from "../cervice/Urls";

const initialState={
    cars:[],
    loading:null

}
const getAll=createAsyncThunk(
    'carSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data}=await carServ.getAll()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
}
)
const creat=createAsyncThunk(
    'carSlice/create',
    async ({car},thunkAPI)=>{
        try {
            await carServ.create(car)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice=createSlice({
    name:'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.cars=action.payload
        }
    }
})
const {reducer:carReducer}=carSlice
const carActions={
    getAll,
    creat
}
export {carActions,carReducer,carSlice}