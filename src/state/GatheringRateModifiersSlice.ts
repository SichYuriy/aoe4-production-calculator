import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GATHERING_RATES_MODIFIERS from "../data/AllGatheringRateModifiers";
import {RootState} from "../store";
import GatheringRateModifier from "../model/GatheringRateModifier";

export interface GatheringRateModifierState {
    [key: string]: boolean
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
        toggle: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id] = !state[id];
        }
    }
});

export let selectActiveGatheringRateModifiers = (state: RootState): GatheringRateModifier[] => {
    return Object.keys(state.gatheringRateModifiers)
        .filter(id => state.gatheringRateModifiers[id])
        .map(id => GATHERING_RATES_MODIFIERS[id]);
}

export const {toggle} = gatheringRateModifiers.actions;
export default gatheringRateModifiers.reducer;
