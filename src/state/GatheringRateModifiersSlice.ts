import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GATHERING_RATES_MODIFIERS from "../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import {RootState} from "../store";
import GatheringRateModifier from "../model/GatheringRateModifier";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_GATHERING_RATE_MODIFIERS, DISABLED_GATHERING_RATE_MODIFIERS,
    GATHERING_RATE_MODIFIERS_DEFAULT
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";

export interface GatheringRateModifierState {
    [key: string]: boolean
}

export interface UpdateSelectedModifierPayload {
    unselect: string[],
    select: string[]
}

const initialState: GatheringRateModifierState = Object.values(GATHERING_RATES_MODIFIERS)
    .reduce((state: GatheringRateModifierState, modifier) => {
        state[modifier.id] = false;
        return state;
    }, {})


export const gatheringRateModifiers = createSlice({
    name: 'gatheringRateModifiers',
    initialState: initialState,
    reducers: {
        toggleGatheringRateModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id] = !state[id];
        },
        unselectSelect: (state, action: PayloadAction<UpdateSelectedModifierPayload>) => {
            action.payload.unselect.forEach(id => state[id] = false);
            action.payload.select.forEach(id => state[id] = true);
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            ALL_CIVILIZATIONS_GATHERING_RATE_MODIFIERS.forEach(id => state[id] = false);
            (GATHERING_RATE_MODIFIERS_DEFAULT[action.payload] || []).forEach(id => state[id] = true);
            (DISABLED_GATHERING_RATE_MODIFIERS[action.payload] || []).forEach(id => state[id] = false);
        })
    }
});

export let selectActiveGatheringRateModifiers = (state: RootState): GatheringRateModifier[] => {
    return Object.keys(state.gatheringRateModifiers)
        .filter(id => state.gatheringRateModifiers[id])
        .map(id => GATHERING_RATES_MODIFIERS[id]);
}

export const {toggleGatheringRateModifier, unselectSelect} = gatheringRateModifiers.actions;
export default gatheringRateModifiers.reducer;
