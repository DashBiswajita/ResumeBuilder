import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const certificationSlice = createSlice({
    name : "Certification",
    initialState,
    reducers : {
        modifyCertification(state,modifiedObj){
            state[modifiedObj.payload.index] = {...state[modifiedObj.payload.index],...modifiedObj.payload.changeValue};
        },
        addCertification(state){
            return [...state, {
                certificationName: "Certification",
                validTill : "",
                summary: "",
              }];
        },
        deleteCertification(state,modifiedObj){
            state.splice(state[modifiedObj.payload],1)
        }
    }
})

export const certificationActions = certificationSlice.actions;
export default certificationSlice.reducer;