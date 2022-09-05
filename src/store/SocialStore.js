import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    linkedIn : "",
    gitHub : "",
    hackerRank : "",
    hackerEarth : ""
}

const socialSlice = createSlice({
    name : "social",
    initialState,
    reducers : {
       modifysocial(state,modifyValue){
           return {...state,...modifyValue.payload};
       }
    }
})

export const socialActions = socialSlice.actions;
export default socialSlice.reducer;