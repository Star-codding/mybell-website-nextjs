"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  islogin: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
        state.islogin = true
    },
    register: (state) => {
      state.islogin = true
    },
    logout: (state, action) => {
      state.islogin = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = loginSlice.actions

export default loginSlice.reducer