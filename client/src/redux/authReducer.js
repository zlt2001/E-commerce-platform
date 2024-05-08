import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
    token: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLogged = true
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logOut: (state) => {
            state.isLogged = false
            state.token = null
            state.user = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer