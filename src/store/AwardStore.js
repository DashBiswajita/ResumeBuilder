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
                validTill : "AUG,2021",
                summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              }];
        },
        deleteAward(state,modifiedObj){
            state.splice(state[modifiedObj.payload],1)
        }
    }
})

export const awardActions = awardSlice.actions;
export default awardSlice.reducer;