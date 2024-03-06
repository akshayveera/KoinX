import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        coinDetails : {}
    },
    reducers : {
        addItem : (state, action)=>{
            state.coinDetails = {...state.coinDetails, ...action.payload};
            console.log(state.coinDetails);
        }
    }
})

export default appSlice.reducer;
export const {addItem} = appSlice.actions;