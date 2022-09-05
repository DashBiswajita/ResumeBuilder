import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "",
    role : "",
    email : "",
    phone : "",
    relExp : "",
    totalExp : "",
    summary : ""
}

const introSlice = createSlice({
    name : "Intro",
    initialState,
    reducers : {
       modifyIntro(state,modifyValue){
           return {...state,...modifyValue.payload};
       }
    }
})

export const introActions = introSlice.actions;
export default introSlice.reducer;