import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS, PASSIVE_INCOME_MODIFIERS_DEFAULT
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import PASSIVE_INCOME_MODIFIERS, {
    DEFAULT_COMMON_PASSIVE_INCOME_MODIFIERS
} from "../data/passive-income-modifiers/AllPassiveIncomeModifiers";
import {RootState} from "../store";
import PassiveIncomeModifier from "../model/PassiveIncomeModifier";

export interface PassiveIncomeModifierState {
    id: string;
    selected: boolean;
}

export interface PassiveIncomeModifiersState {
    [key: string]: PassiveIncomeModifierState
}

export interface UnselectSelectPassiveIncomeModifiersState {
    unselect: string[],
    select: string[]
}

const initialState: PassiveIncomeModifiersState = Object.values(PASSIVE_INCOME_MODIFIERS)
    .reduce((state: PassiveIncomeModifiersState, modifier) => {
        state[modifier.id] = {
            id: modifier.id,
            // @ts-ignore
            selected: DEFAULT_COMMON_PASSIVE_INCOME_MODIFIERS.includes(modifier.id)
        };
        return state;
    }, {});

export const passiveIncomeModifiers = createSlice({
    name: 'passiveIncomeModifiers',
    initialState: initialState,
    reducers: {
        togglePassiveIncomeModifier: (state, action: PayloadAction<string>) => {
            let id = action.payload;
            state[id].selected = !state[id].selected;
        },
        unselectSelectPassiveIncomeModifiers: (state, action: PayloadAction<UnselectSelectPassiveIncomeModifiersState>) => {
            action.payload.unselect.forEach(id => state[id].selected = false);
            action.payload.select.forEach(id => state[id].selected = true);
        },
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS.forEach(id => state[id].selected = false);
            (PASSIVE_INCOME_MODIFIERS_DEFAULT[action.payload] || []).forEach(id => state[id].selected = true);
        });
    }
});

export let selectActivePassiveIncomeModifiers = (state: RootState): PassiveIncomeModifier[] => {
    return Object.keys(state.passiveIncomeModifiers)
        .filter(id => state.passiveIncomeModifiers[id].selected)
        .map(id => PASSIVE_INCOME_MODIFIERS[id]);
}

export const {
    togglePassiveIncomeModifier,
    unselectSelectPassiveIncomeModifiers
} = passiveIncomeModifiers.actions;
export default passiveIncomeModifiers.reducer;
