import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import RESOURCE_DROP_OFF_MODIFIERS from "../data/resource-drop-off-modifiers/AllResourceDropOffModifiers";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_RESOURCE_DROP_OFF_MODIFIERS
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";

export interface ResourceDropOffModifiersState {
    [key: string]: boolean
}

export interface UnselectSelectResourceDropOffPayload {
    unselect: string[],
    select: string[]
}

const initialState: ResourceDropOffModifiersState = Object.values(RESOURCE_DROP_OFF_MODIFIERS)
    .reduce((state: ResourceDropOffModifiersState, modifier) => {
        state[modifier.id] = false;
        return state;
    }, {});

export const resourceDropOffModifiers = createSlice({
    name: 'resourceDropOffModifiers',
    initialState: initialState,
    reducers: {
        toggleResourceDropOffModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id] = !state[id];
        },
        unselectSelectResourceDropOff: (state, action: PayloadAction<UnselectSelectResourceDropOffPayload>) => {
            action.payload.unselect.forEach(id => state[id] = false);
            action.payload.select.forEach(id => state[id] = true);
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            ALL_CIVILIZATIONS_RESOURCE_DROP_OFF_MODIFIERS.forEach(id => state[id] = false);
        })
    }
})

export const {toggleResourceDropOffModifier, unselectSelectResourceDropOff} = resourceDropOffModifiers.actions;
export default resourceDropOffModifiers.reducer;