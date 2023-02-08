import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carServ} from "../../service/urls";

const initialState =  {
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
            return thunkAPI.fulfillWithValue(e.response.data)
        }

    }
)

const carSlice= createSlice({
    name:'carSlice',
    initialState,
    reducers:{
    
    }
;`S`
})\