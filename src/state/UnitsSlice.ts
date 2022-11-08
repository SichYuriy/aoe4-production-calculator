import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import UNITS from "../data/unit/Units";
import CivilizationsEnum from "../data/CivilizationsEnum";

export interface UnitsState {
    [key: string]: number
}

export interface UnselectSelectUnitsPayload {
    unselect: string[],
    select: string[],
    selectCount?: number
}

export const unitsSlice = createSlice({
    name: 'units',
    initialState: {} as UnitsState,
    reducers: {
        toggle: (state, action: PayloadAction<string>) => {
            let unitId: string = action.payload;
            if (state[unitId] !== undefined) {
                state[unitId]++;
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
        },
        unselectSelectUnits: (state, action: PayloadAction<UnselectSelectUnitsPayload>) => {
            let selectCount = action.payload.selectCount || 1;
            action.payload.unselect.forEach(unitId => delete state[unitId]);
            action.payload.select.forEach(unitId => {
                state[unitId] = selectCount;
            });
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            Object.keys(state)
                .forEach(unitId => {
                    let unit = UNITS.get(unitId)!;
                    if (!unit.civilizations.includes(action.payload)
                        && !(action.payload === CivilizationsEnum.RANDOM && unit.common)) {
                        delete state[unitId];
                    }
                });
        });
    }
});

export const {toggle, increment, decrement, unselectSelectUnits} = unitsSlice.actions;
export default unitsSlice.reducer;
