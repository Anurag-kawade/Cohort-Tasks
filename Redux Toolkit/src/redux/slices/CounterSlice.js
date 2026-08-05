import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'Counter',
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        reset : (state)=>{
            state.value = 0
        },
        incrementBy5 : (state)=>{
            state.value += 5
        },
        decrementBy5 : (state)=>{
            state.value -= 5
        }
    }
})

export const {increment,decrement,reset,incrementBy5,decrementBy5} = counterSlice.actions;   

export default counterSlice.reducer;