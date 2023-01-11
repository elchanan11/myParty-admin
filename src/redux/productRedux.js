import {createSlice} from "@reduxjs/toolkit";

const userRedux = createSlice({
    name: "user",
    initialState:{
        products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        //GET ALL
        getProductStart:(state)=>{
            state.isFetching = true
            state.error = false
        },
        getProductSuccess:(state,action)=>{
            state.isFetching = false
            state.products = action.payload
        },
        getProductFaliure:(state)=>{
            state.isFetching = false
            state.error = true
        },
    },
})

export const {getProductStart,getProductSuccess,getProductFaliure} = userRedux.actions;
export default userRedux.reducer;