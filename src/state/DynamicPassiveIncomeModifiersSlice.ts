import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import GatheringRates from "../model/GatheringRates";
import DYNAMIC_PASSIVE_INCOME_MODIFIERS, {
    DEFAULT_COMMON_DYNAMIC_PASSIVE_INCOME_MODIFIERS
} from "../data/dynamic-passive-income-modifiers/AllDynamicPassiveIncomeModifiers";
import {
    ALL_CIVILIZATIONS_DYNAMIC_PASSIVE_INCOME_MODIFIERS,
    DYNAMIC_PASSIVE_INCOME_MODIFIERS_DEFAULT
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {RootState} from "../store";

export interface DynamicPassiveIncomeModifierState {
    id: string,
    value: GatheringRates,
    selected: boolean;
}

export interface DynamicPassiveIncomeModifiersState {
    [key: string]: DynamicPassiveIncomeModifierState
}

 export interface SetDynamicPassiveIncomeModifierState {
    id: string,
    income: GatheringRates
 }

const initialState: DynamicPassiveIncomeModifiersState = Object.values(DYNAMIC_PASSIVE_INCOME_MODIFIERS)
    .reduce((state: DynamicPassiveIncomeModifiersState, modifier) => {
        state[modifier.id] = {
            id: modifier.id,
            value: {
                food: modifier.default.food,
                gold: modifier.default.gold,
                wood: modifier.default.wood,
                stone: modifier.default.stone
            },
            selected: DEFAULT_COMMON_DYNAMIC_PASSIVE_INCOME_MODIFIERS.includes(modifier.id)
        };

        return state;
    }, {});

export const dynamicPassiveIncomeModifiers = createSlice({
    name: 'dynamicPassiveIncomeModifiers',
    initialState: initialState,
    reducers: {
        setDynamicPassiveIncomeModifierValue: (state, action: PayloadAction<SetDynamicPassiveIncomeModifierState>) => {
            state[action.payload.id].value = action.payload.income;
        },
    },

    extraReducers: builder => {
        builder.addCase(changeCivilization, (state, action) => {
            ALL_CIVILIZATIONS_DYNAMIC_PASSIVE_INCOME_MODIFIERS.forEach(id => state[id].selected = false);
            (DYNAMIC_PASSIVE_INCOME_MODIFIERS_DEFAULT[action.payload] || []).forEach(id => {
                state[id].selected = true;
                state[id].value = DYNAMIC_PASSIVE_INCOME_MODIFIERS[id].default;
            });
        });
    }
});

export let selectActiveDynamicPassiveIncomeModifiers = (state: RootState): DynamicPassiveIncomeModifierState[] => {
    return Object.keys(state.dynamicPassiveIncomeModifiers)
        .filter(id => state.dynamicPassiveIncomeModifiers[id].selected)
        .map(id => state.dynamicPassiveIncomeModifiers[id]);
}

export const {setDynamicPassiveIncomeModifierValue} = dynamicPassiveIncomeModifiers.actions;
export default dynamicPassiveIncomeModifiers.reducer;