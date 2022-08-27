import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_COST_MODIFIERS,
    COST_MODIFIERS_DEFAULT
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import COST_MODIFIERS from "../data/cost-modifiers/AllCostModifiers";
import {RootState} from "../store";
import UnitCostModifier from "../model/UnitCostModifier";

export interface CostModifierState {
    [key: string]: boolean
}

export interface UnselectSelectCostModifiersPayload {
    unselect: string[],
    select: string[]
}

const initialState: CostModifierState = Object.values(COST_MODIFIERS)
    .reduce((state: CostModifierState, modifier) => {
        state[modifier.id] = false;
        return state;
    }, {})


export const costModifiers = createSlice({
    name: 'costModifiers',
    initialState: initialState,
    reducers: {
        toggleCostModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id] = !state[id];
        },
        unselectSelectCostModifiers: (state, action: PayloadAction<UnselectSelectCostModifiersPayload>) => {
            action.payload.unselect.forEach(id => state[id] = false);
            action.payload.select.forEach(id => state[id] = true);
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            ALL_CIVILIZATIONS_COST_MODIFIERS.forEach(id => state[id] = false);
            (COST_MODIFIERS_DEFAULT[action.payload] || []).forEach(id => state[id] = true);
        })
    }
});

export let selectActiveCostModifiers = (state: RootState): UnitCostModifier[] => {
    return Object.keys(state.costModifiers)
        .filter(id => state.costModifiers[id])
        .map(id => COST_MODIFIERS[id]);
}

export const {toggleCostModifier, unselectSelectCostModifiers} = costModifiers.actions;
export default costModifiers.reducer;
