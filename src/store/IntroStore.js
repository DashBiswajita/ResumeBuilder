import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "Biswajita Dash",
    role : "Senior Associate",
    email : "biswajitadash.96@gmail.com",
    phone : "7978335173",
    relExp : "4",
    totalExp : "4",
    summary : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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