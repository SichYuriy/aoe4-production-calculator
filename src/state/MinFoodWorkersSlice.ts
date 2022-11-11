import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";

export const minFoodWorkersSlice = createSlice({
    name: 'minFoodWorkers',
    initialState: {
        value: 0
    },
    reducers: {
        setMinFoodWorkers: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            state.value = 0;
        });
    }
});

export const {setMinFoodWorkers} = minFoodWorkersSlice.actions;
export default minFoodWorkersSlice.reducer;