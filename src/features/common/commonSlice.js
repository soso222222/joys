import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isToast : false,
    toastData : {
        status :'success',
        message: '정상적으로 되었습니다',
        cancelText:'',
        onCancel:false,

    }
}


const commonSlice = createSlice({
    name:'common',
    initialState,
    reducers:{
        onShowToast : (state, {payload}) => {
            state.isToast = true
            state.toastData = payload
        },
        onHideToast : (state, {payload}) => {
            state.isToast = false
        },
        
    }
})

export const { onShowToast , onHideToast} = commonSlice.actions;

export default commonSlice