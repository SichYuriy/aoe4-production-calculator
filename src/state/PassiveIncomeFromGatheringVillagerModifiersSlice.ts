import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS,
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import {RootState} from "../store";
import PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS
    from "../data/passive-income-from-gathering-vilager-modifiers/AllPassiveIncomeFromGatheringVillagerModifiers";
import PassiveIncomeFromGatheringVillagerModifier from "../model/PassiveIncomeFromGatheringVillagerModifier";

export interface PassiveIncomeFromGatheringVillagerModifierState {
    id: string;
    selected: boolean;
}

const initialState: PassiveIncomeFromGatheringVillagerModifiersState = Object.values(PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS)
    .reduce((state: PassiveIncomeFromGatheringVillagerModifiersState, modifier) => {
        state[modifier.id] = {
            id: modifier.id,
            selected: false
        };
        return state;
    }, {})

export interface PassiveIncomeFromGatheringVillagerModifiersState {
    [key: string]: PassiveIncomeFromGatheringVillagerModifierState
}

export const passiveIncomeFromGatheringVillagerModifiers = createSlice({
    name: 'passiveIncomeFromGatheringVillagerModifiers',
    initialState: initialState,
    reducers: {
        togglePassiveIncomeFromGatheringVillagerModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id].selected = !state[id].selected;
        },
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            ALL_CIVILIZATIONS_PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS.forEach(id => state[id].selected = false);
        })
    }
});

export let selectActivePassiveIncomeFromGatheringVillagerModifiers = (state: RootState): PassiveIncomeFromGatheringVillagerModifier[] => {
    return Object.keys(state.passiveIncomeFromGatheringVillagerModifiers)
        .filter(id => state.passiveIncomeFromGatheringVillagerModifiers[id].selected)
        .map(id => PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS[id]);
}

export const {togglePassiveIncomeFromGatheringVillagerModifier} = passiveIncomeFromGatheringVillagerModifiers.actions;
export default passiveIncomeFromGatheringVillagerModifiers.reducer;
