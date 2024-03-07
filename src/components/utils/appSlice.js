import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        coinDetails : {},
        spikesArray : []
    },
    reducers : {
        addItem : (state, action)=>{
            state.coinDetails = {...state.coinDetails, ...action.payload};
        },
        clearData : (state)=>{
            state.coinDetails = {};
        },
        addSpikes : (state, action)=>{
            state.spikesArray = [...state.spikesArray, ...action.payload];
        },
        clearSpikes : (state)=>{
            state.spikesArray = [];
        }
    }
})

export default appSlice.reducer;
export const {addItem, clearData, addSpikes, clearSpikes} = appSlice.actions;