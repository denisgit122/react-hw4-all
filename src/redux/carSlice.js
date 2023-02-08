import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServ} from "../cervice/Urls";

const initialState={
    cars:[],
    update:null,
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

const delet=createAsyncThunk(
    'carSlice/delete',
    async ({id},thunkAPI)=>{
        try {
            await carServ.delete(id)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update=createAsyncThunk(
    'carSlice/update',
    async ({id,car},thunkAPI)=>{
        try {
            await carServ.updateId(id,car)
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
setCar:(state, action)=>{
    state.update=action.payload
}
    },
    extraReducers:{
        [getAll.fulfilled]:(state,action)=>{
            state.cars=action.payload
        }
    }
})
const {reducer:carReducer , actions:{setCar}}=carSlice
const carActions={
    getAll,
    creat,
    delet,
    setCar,
    update
}
export {carActions,carReducer,carSlice}