import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './ducks/counterSlice'

export const store = configureStore({
    reducer: counterReducer
})