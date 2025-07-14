"use client"
import { configureStore, } from '@reduxjs/toolkit'
import  cartSlice  from './cartSlice'
import  loginSlice  from './loginSlice'

export const store = configureStore({
  reducer: {
    //  counter: counterReducer,
     cart:cartSlice,
     login:loginSlice,
  },
})