import { createSlice } from "@reduxjs/toolkit";

const initialState = []


const experienceSlice = createSlice({
    name : "Intro",
    initialState,
    reducers : {
        modifyExperience(state,modifiedObj){
            state[modifiedObj.payload.index] = {...state[modifiedObj.payload.index],...modifiedObj.payload.changeValue};
        },
        addExperience(state){
            return [...state, {
                comapnyName: "Company",
                jobTitle: "",
                startMonth: "",
                endMonth: "",
                totalDuration: "",
                summary: "",
              }];
        },
        deleteExperience(state,modifiedObj){
            state.splice(state[modifiedObj.payload],1)
        }
    }
})

export const experienceActions = experienceSlice.actions;
export default experienceSlice.reducer;