"use client";

import { createSlice } from '@reduxjs/toolkit';

export interface moveState {
    value:number
}

const initialState: moveState = {
    value:0
}

export const movingSlice = createSlice({
    name:'move',
    initialState,
    reducers: {
        moving: (state, action) => {state.value = action.payload},
    },
})

export const { moving } = movingSlice.actions;
export default movingSlice.reducer;