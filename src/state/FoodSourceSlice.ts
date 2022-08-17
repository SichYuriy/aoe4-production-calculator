import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import FoodSource from "../model/FoodSource";

export interface FoodSourceState {
    value: FoodSource
}

export const foodSourceSlice = createSlice({
    name: 'foodSource',
    initialState: {
        value: FoodSource.SHEEP
    } as FoodSourceState,
    reducers: {
        changeFoodSource: (state, action: PayloadAction<FoodSource>) => {
            state.value = action.payload;
        },
    }
});

export const {changeFoodSource} = foodSourceSlice.actions;
export default foodSourceSlice.reducer;
