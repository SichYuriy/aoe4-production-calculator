import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import PASSIVE_INCOME_MODIFIERS from "../data/passive-income-modifiers/AllPassiveIncomeModifiers";
import {RootState} from "../store";
import PassiveIncomeModifier from "../model/PassiveIncomeModifier";

export interface PassiveIncomeModifierState {
    id: string;
    count: number;
}

const initialState: PassiveIncomeModifiersState = Object.values(PASSIVE_INCOME_MODIFIERS)
    .reduce((state: PassiveIncomeModifiersState, modifier) => {
        state[modifier.id] = {
            id: modifier.id,
            count: 0
        };
        return state;
    }, {})

export interface PassiveIncomeModifiersState {
    [key: string]: PassiveIncomeModifierState
}

export interface UnselectSelectPassiveIncomeModifiersPayload {
    unselect: string[],
    select: string[]
}

export const passiveIncomeModifiers = createSlice({
    name: 'passiveIncomeModifiers',
    initialState: initialState,
    reducers: {
        incrementPassiveIncome: (state, action: PayloadAction<string>) => {
            let id = action.payload;
            let modifier = PASSIVE_INCOME_MODIFIERS[id];
            if (!modifier.maxCount || state[id].count < modifier.maxCount) {
                state[id].count++;
            }
        },
        decrementPassiveIncome: (state, action: PayloadAction<string>) => {
            let id = action.payload;
            if (state[id].count > 0) {
                state[id].count--;
            }
        },
        unselectSelectPassiveIncome: (state, action: PayloadAction<UnselectSelectPassiveIncomeModifiersPayload>) => {
            action.payload.unselect.forEach(id => state[id].count = 0);
            action.payload.select.forEach(id => state[id].count = 1);
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS.forEach(id => state[id].count = 0);
        })
    }
});

export let selectActivePassiveIncomeModifiers = (state: RootState): PassiveIncomeModifier[] => {
    return Object.keys(state.passiveIncomeModifiers)
        .filter(id => state.passiveIncomeModifiers[id].count > 0)
        .map(id => PASSIVE_INCOME_MODIFIERS[id]);
}

export const {incrementPassiveIncome, decrementPassiveIncome, unselectSelectPassiveIncome} = passiveIncomeModifiers.actions;
export default passiveIncomeModifiers.reducer;
