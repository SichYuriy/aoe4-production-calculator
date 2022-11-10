import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS,
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import {RootState} from "../store";
import PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS
    from "../data/passive-gold-from-food-vilager-modifiers/AllPassiveGoldFromFoodVillagerModifiers";
import PassiveGoldFromFoodVillagerModifier from "../model/PassiveGoldFromFoodVillagerModifier";

export interface PassiveGoldFromFoodVillagerModifierState {
    id: string;
    selected: boolean;
}

const initialState: PassiveGoldFromFoodVillagerModifiersState = Object.values(PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS)
    .reduce((state: PassiveGoldFromFoodVillagerModifiersState, modifier) => {
        state[modifier.id] = {
            id: modifier.id,
            selected: false
        };
        return state;
    }, {})

export interface PassiveGoldFromFoodVillagerModifiersState {
    [key: string]: PassiveGoldFromFoodVillagerModifierState
}

export const passiveGoldFromFoodVillagerModifiers = createSlice({
    name: 'passiveGoldFromFoodVillagerModifiers',
    initialState: initialState,
    reducers: {
        togglePassiveGoldFromFoodVillagerModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id].selected = !state[id].selected;
        },
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            ALL_CIVILIZATIONS_PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS.forEach(id => state[id].selected = false);
        })
    }
});

export let selectActivePassiveGoldFromFoodVillagerModifiers = (state: RootState): PassiveGoldFromFoodVillagerModifier[] => {
    return Object.keys(state.passiveGoldFromFoodVillagerModifiers)
        .filter(id => state.passiveGoldFromFoodVillagerModifiers[id].selected)
        .map(id => PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS[id]);
}

export const {togglePassiveGoldFromFoodVillagerModifier} = passiveGoldFromFoodVillagerModifiers.actions;
export default passiveGoldFromFoodVillagerModifiers.reducer;
