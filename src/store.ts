import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './state/UnitsSlice'
import foodSourceReducer from "./state/FoodSourceSlice";

export const store = configureStore({
    reducer: {
        units: unitsReducer,
        foodSource: foodSourceReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
