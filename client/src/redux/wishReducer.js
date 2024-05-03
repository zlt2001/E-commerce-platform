import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            console.log(action)
            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)

        },
        resetWish: (state) => {
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToWish, removeItem, resetWish } = wishSlice.actions
export default wishSlice.reducer