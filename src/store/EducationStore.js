import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const educationSlice = createSlice({
    name : "Education",
    initialState,
    reducers : {
        modifyEducation(state,modifiedObj){
            state[modifiedObj.payload.index] = {...state[modifiedObj.payload.index],...modifiedObj.payload.changeValue};
        },
        addEducation(state){
            return [...state, {
                uniVersityName: "University",
                collegeName: "College",
                degree : "BTECH",
                stream: "EEE",
                startTime : "APR,2021",
                endTime: "SEPT, 2022",
                totalDuration: "4",
                marksObtained: "8.34 CGPA",
              }];
        },
        deleteEducation(state,modifiedObj){
            state.splice(state[modifiedObj.payload],1)
        }
    }
})

export const educationActions = educationSlice.actions;
export default educationSlice.reducer;