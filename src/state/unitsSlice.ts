import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UnitsState {
    [key: string]: number
}

export const unitsSlice = createSlice({
    name: 'units',
    initialState: {} as UnitsState,
    reducers: {
        toggle: (state, action: PayloadAction<string>) => {
            let unitId: string = action.payload;
            if (state[unitId] !== undefined) {
                delete state[unitId];
            } else {
                state[unitId] = 1;
            }
        },
        increment: (state, action: PayloadAction<string>) => {
            let unitId: string = action.payload;
            let count: number = state[unitId] || 0;
            state[unitId] = count + 1;
        },
        decrement: (state, action: PayloadAction<string>) => {
            let unitId: string = action.payload;
            let count = state[unitId] || 0;
            if (count === 0) {
                console.warn('can not decrement unit count');
            }
            if (count === 1) {
                delete state[unitId];
            } else {
                state[unitId] = count - 1;
            }
        }
    }
});

export const {toggle, increment, decrement} = unitsSlice.actions;

export default unitsSlice.reducer;
