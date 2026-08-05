// Store -> The central place where all application state lives.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        theme : themeReducer    
    }
})    // ye store nam se tumne bana diya mall ya d-mart 
// export bhi kr diya matlab sab ko acessible rahe 

