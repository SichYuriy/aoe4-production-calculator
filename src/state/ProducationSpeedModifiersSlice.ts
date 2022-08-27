import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import PRODUCTION_SPEED_MODIFIERS from "../data/production-speed-modifiers/AllProductionSpeedModifiers";
import ProductionSpeedModifier from "../model/ProductionSpeedModifier";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS, PRODUCTION_SPEED_MODIFIERS_DEFAULT
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";

export interface ProductionSpeedModifiersState {
    [key: string]: boolean
}

export interface UnselectSelectProductionSpeedModifiersPayload {
    unselect: string[],
    select: string[]
}

const initialState: ProductionSpeedModifiersState = Object.values(PRODUCTION_SPEED_MODIFIERS)
    .reduce((state: ProductionSpeedModifiersState, modifier) => {
        state[modifier.id] = false;
        return state;
    }, {})


export const productionSpeedModifiers = createSlice({
    name: 'productionSpeedModifiers',
    initialState: initialState,
    reducers: {
        toggleProductionSpeedModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id] = !state[id];
        },
        unselectSelectProductionSpeedModifiers: (state, action: PayloadAction<UnselectSelectProductionSpeedModifiersPayload>) => {
            action.payload.unselect.forEach(id => state[id] = false);
            action.payload.select.forEach(id => state[id] = true);
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS.forEach(id => state[id] = false);
            (PRODUCTION_SPEED_MODIFIERS_DEFAULT[action.payload] || []).forEach(id => state[id] = true);
        })
    }
});

export let selectActiveProductionSpeedModifiers = (state: RootState): ProductionSpeedModifier[] => {
    return Object.keys(state.productionSpeedModifiers)
        .filter(id => state.productionSpeedModifiers[id])
        .map(id => PRODUCTION_SPEED_MODIFIERS[id]);
}

export const {toggleProductionSpeedModifier, unselectSelectProductionSpeedModifiers} = productionSpeedModifiers.actions;
export default productionSpeedModifiers.reducer;
