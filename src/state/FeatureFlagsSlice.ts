import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";

const initialState: {[key: string]: boolean} = {};


export const featureFlags = createSlice({
    name: 'featureFlags',
    initialState: initialState,
    reducers: {
        enableFeature: (state, action: PayloadAction<string>) => {
            state[action.payload] = true;
        },
        disableFeature: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state) => {
            Object.keys(state).forEach(key => delete state[key]);
        })
    }
});

export const {enableFeature, disableFeature} = featureFlags.actions;
export default featureFlags.reducer;
