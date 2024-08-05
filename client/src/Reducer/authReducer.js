import { createSlice } from "@reduxjs/toolkit";



const initialStateValue = null


export const authSlice = createSlice({
    name: "auth",
    initialState: {value: initialStateValue},
    reducers: {
        //actions
        authLogin: (state, action)=>{
            state.value = action.payload;
        },
        authRegister: (state, action)=>{
            state.value = action.payload;
        }
    }

});



export const {authLogin, authRegister} = authSlice.actions;
export default authSlice.reducer;






// const authReducer = (state = { authData: null, loading: false, error: false }, action) => {
//     switch (action.type) {
//         case "AUTH_START":
//             return { ...state, loading: true, error: false }
//         case "AUTH_SUCCESS":
//             console.log("auth reducer passed")
//             localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
//             return { ...state, authData: action.data, loading: false, error: false }
//         case "AUTH_FAIL":
//             return { ...state, loading: false, error: true }
//         default:
//             return state
//     }
// }

// export default authReducer;