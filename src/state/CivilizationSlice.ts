import {createSlice} from "@reduxjs/toolkit";
import CivilizationsEnum from "../data/CivilizationsEnum";
import changeCivilization from "./actions/CivilizationChnagedAction";

export const civilization = createSlice({
    name: 'civilization',
    initialState: {selected: CivilizationsEnum.RANDOM},
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            state.selected = action.payload;
        })
    }
});

export default civilization.reducer;


