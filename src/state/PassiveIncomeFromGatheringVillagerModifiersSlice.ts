import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS,
    PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS_DEFAULT,
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

export interface UnselectSelectPassiveIncomeFromGatheringVillagerModifiersState {
    unselect: string[],
    select: string[]
}

export const passiveIncomeFromGatheringVillagerModifiers = createSlice({
    name: 'passiveIncomeFromGatheringVillagerModifiers',
    initialState: initialState,
    reducers: {
        togglePassiveIncomeFromGatheringVillagerModifier: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id].selected = !state[id].selected;
        },
        unselectSelectPassiveIncomeFromGatheringVillagerModifiers: (state, action: PayloadAction<UnselectSelectPassiveIncomeFromGatheringVillagerModifiersState>) => {
            action.payload.unselect.forEach(id => state[id].selected = false);
            action.payload.select.forEach(id => state[id].selected = true);
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            ALL_CIVILIZATIONS_PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS.forEach(id => state[id].selected = false);
            (PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS_DEFAULT[action.payload] || []).forEach(id => state[id].selected = true);
        })
    }
});

export let selectActivePassiveIncomeFromGatheringVillagerModifiers = (state: RootState): PassiveIncomeFromGatheringVillagerModifier[] => {
    return Object.keys(state.passiveIncomeFromGatheringVillagerModifiers)
        .filter(id => state.passiveIncomeFromGatheringVillagerModifiers[id].selected)
        .map(id => PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS[id]);
}

export const {togglePassiveIncomeFromGatheringVillagerModifier, unselectSelectPassiveIncomeFromGatheringVillagerModifiers} = passiveIncomeFromGatheringVillagerModifiers.actions;
export default passiveIncomeFromGatheringVillagerModifiers.reducer;
