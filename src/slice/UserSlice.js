import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UserService} from "../configs/service/userService";

const initialState={
    users:[],
    loading:null,
    error:null,
    selectedUser:null

}
const getAll=createAsyncThunk(
    'userSlice/getAll',
    async (_,{rejectedWithValue} )=>{
        try{
            const {data}=await UserService.getAll()
            return data
        }catch (e) {
return rejectedWithValue(e.response.data)
        }
    }
)

const userSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        // getAll:(state,action)=>{
        //     state.users=action.payload
        // },
        setSelectedUser:(state,action)=>{
            state.selectedUser=action.payload
        }

    },
    // extraReducers:{
    //     [getAll.fulfilled]:(state,action) => {
    //         state.loading=false
    //         state.users=action.payload
    //     },
    //     [getAll.rejected]:(state,action)=>{
    //         state.loading=false
    //         state.error=action.payload
    //     },
    //     [getAll.pending]:(state)=>{
    //         state.loading=true
    //     }
    //
    // }
    extraReducers:(value)=>value
        .addCase(getAll.fulfilled,(state, action)=>{
            state.loading=false
            state.users=action.payload
        })
        .addCase(getAll.rejected,(state, action)=>{
            state.loading=false
            state.error=action.payload
        })
        .addCase(getAll.pending,(state, action)=>{
            state.loading=true
        })
    }

)
const {reducer:userReducer,actions:{setSelectedUser}}=userSlice
const userAction={
    getAll,
    setSelectedUser
}
export {userReducer,userAction,userSlice}