"use client";
import { configureStore } from '@reduxjs/toolkit';
import { movingReducer } from './Features/Moves/moveSlice';

export const store = configureStore({
    reducer: {
        moves: movingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;