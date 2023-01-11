import {loginFailure, loginStart, loginSuccess} from "./userRedux";
import {publicRequest, userRequest} from "../requestMethods";
import {
    addProductFailure,
    addProductStart, addProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    getProductFaliure,
    getProductStart,
    getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess
} from "./productRedux";

export const login =  async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
    }catch (err){
        dispatch(loginFailure())
        console.log(err)
    }
}

export const getProducts =  async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get('/product')
        dispatch(getProductSuccess(res.data))
    }catch (err){
        dispatch(getProductFaliure())
        console.log(err)
    }
}

export const deleteProducts =  async (id,dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await userRequest.delete(`/product/${id}`)
        dispatch(deleteProductSuccess({id: id}))
    }catch (err){
        dispatch(deleteProductFailure())
        console.log(err)
    }
}

export const updateProducts =  async (id,product,dispatch) => {
    dispatch(updateProductStart())
    try {
        const res = await userRequest.put(`/product/${id}`,product)
        dispatch(updateProductSuccess({id:id,product:product}))
    }catch (err){
        dispatch(updateProductFailure())
        console.log(err)
    }
}

export const addProducts =  async (product,dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/product`, product)
        dispatch(addProductSuccess(res.data))
    }catch (err){
        dispatch(addProductFailure())
        console.log(err)
    }
}