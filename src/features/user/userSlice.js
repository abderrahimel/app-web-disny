import { createSlice } from '@reduxjs/toolkit';

// initial the state
const initialState = {
    name: "",
    email: "",
    photo: ""
}
// create slice

const userSlice = createSlice({
    name:  "user",
    initialState,
    reducers:{
        setUserLogin: (state, action)=>{
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;

        },
        setSignOut: (state)=>{
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

// export actions creator
export const { setUserLogin, setSignOut} = userSlice.actions;

// selector

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;


//  export reducer
export default userSlice.reducer;

