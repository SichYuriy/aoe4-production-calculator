import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GATHERING_RATES_MODIFIERS from "../data/AllGatheringRateModifiers";
import {RootState} from "../store";
import GatheringRateModifier from "../model/GatheringRateModifier";

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
        toggle: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id] = !state[id];
        },
        unselectSelect: (state, action: PayloadAction<UpdateSelectedModifierPayload>) => {
            action.payload.unselect.forEach(id => state[id] = false);
            action.payload.select.forEach(id => state[id] = true);
        }
    }
});

export let selectActiveGatheringRateModifiers = (state: RootState): GatheringRateModifier[] => {
    return Object.keys(state.gatheringRateModifiers)
        .filter(id => state.gatheringRateModifiers[id])
        .map(id => GATHERING_RATES_MODIFIERS[id]);
}

export const {toggle, unselectSelect} = gatheringRateModifiers.actions;
export default gatheringRateModifiers.reducer;
