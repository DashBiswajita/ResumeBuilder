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
                companyName: "Tata Consultancy Services",
                jobTitle: "Senior Associate",
                startMonth: "APR 2021",
                endMonth: "Aug 2022",
                totalDuration: "2",
                summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              }];
        },
        deleteExperience(state,modifiedObj){
            state.splice(state[modifiedObj.payload],1)
        }
    }
})

export const experienceActions = experienceSlice.actions;
export default experienceSlice.reducer;