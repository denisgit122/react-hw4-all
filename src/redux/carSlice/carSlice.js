import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carServ} from "../../services";

let initialState = {
      cars:[],
      carsUpd:null,
      error:null,
      loading:null

}
const getAll=createAsyncThunk(
    'carSlice/getAll',
    async (_,thunkAPI)=>{
        try {
          const {data}= await carServ.getAll()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create=createAsyncThunk(
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
    'carSlice/delet',
    async ({id},thunkAPI)=>{
        try {
            await carServ.deletById(id)
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
            await carServ.updateById(id,car)
            thunkAPI.dispatch(getAll())
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice=createSlice({
    name:'carSlice',
    initialState,
    reducers: {
setCar:(state, action)=>{
    state.carsUpd=action.payload
}
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.cars=action.payload
                state.loading=false
            })
            .addDefaultCase((state, action) => {
             const [actioStatus]=  action.type.split('/').slice(-1)

                if (actioStatus==='pending'){
                    state.loading=true

                }else {
                    state.loading=false
                }
            })

})
const{reducer:carReducer,actions:{setCar}} =carSlice

const carAction={
    getAll,
    create,
    delet,
    setCar,
    update
}
export {carReducer,carAction}