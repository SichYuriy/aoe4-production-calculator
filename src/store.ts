import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './state/UnitsSlice'

export const store = configureStore({
    reducer: {
        units: unitsReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
