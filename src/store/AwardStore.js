import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const awardSlice = createSlice({
    name : "award",
    initialState,
    reducers : {
        modifyAward(state,modifiedObj){
            state[modifiedObj.payload.index] = {...state[modifiedObj.payload.index],...modifiedObj.payload.changeValue};
        },
        addAward(state){
            return [...state, {
                awardName: "University",
                validTill : "",
                summary: "",
              }];
        },
        deleteAward(state,modifiedObj){
            state.splice(state[modifiedObj.payload],1)
        }
    }
})

export const awardActions = awardSlice.actions;
export default awardSlice.reducer;