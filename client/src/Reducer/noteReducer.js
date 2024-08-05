import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = null



export const noteSlice = createSlice({
    name: "note",
    initialState: {value: initialStateValue},
    reducers: {
        //actions
        sendNote: (state, action)=>{
            state.value = action.payload
        },
        getNote: (state, action)=>{
            state.value = action.payload
        }
    }
});


export const {sendNote, getNote} = noteSlice.actions
export default noteSlice.reducer;