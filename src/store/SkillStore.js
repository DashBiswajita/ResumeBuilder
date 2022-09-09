import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Languages : [],
    Frameworks : [],
    Technologies : [],
    Libraries : [],
    Tools : []
}

const skillSlice = createSlice({
    name : "Skills",
    initialState,
    reducers : {
        modifySkills(state,modifiedObj){
            state[modifiedObj.payload.skill][modifiedObj.payload.index] = {...state[modifiedObj.payload.skill][modifiedObj.payload.index],...modifiedObj.payload.changeValue};
        },
        addSkills(state,modifiedObj){
            state[modifiedObj.payload] = [...state[modifiedObj.payload],{skillName: "dummy", value: "0"}];
        },
        deleteSkills(state,modifiedObj){
            state[modifiedObj.payload.skill].splice(state[modifiedObj.payload.index],1)
        }
    }
})

export const skillActions = skillSlice.actions;
export default skillSlice.reducer;