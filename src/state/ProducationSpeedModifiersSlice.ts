import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import PRODUCTION_SPEED_MODIFIERS from "../data/AllProductionSpeedModifiers";
import ProductionSpeedModifier from "../model/ProductionSpeedModifier";

export interface ProductionSpeedModifiersState {
    [key: string]: boolean
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
        }
    }
});

export let selectActiveProductionSpeedModifiers = (state: RootState): ProductionSpeedModifier[] => {
    return Object.keys(state.productionSpeedModifiers)
        .filter(id => state.productionSpeedModifiers[id])
        .map(id => PRODUCTION_SPEED_MODIFIERS[id]);
}

export const {toggleProductionSpeedModifier} = productionSpeedModifiers.actions;
export default productionSpeedModifiers.reducer;
