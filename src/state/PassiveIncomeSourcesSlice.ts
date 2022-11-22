import PassiveIncomeSource from "../data/passive-income-modifiers/PassiveIncomeSource";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_PASSIVE_INCOME_SOURCES
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";

export interface PassiveIncomeSourceState {
    id: string;
    count: number;
}

export interface PassiveIncomeSourcesState {
    [key: string]: PassiveIncomeSourceState
}

export interface UnselectSelectPassiveIncomeSourcesPayload {
    unselect: string[],
    select: string[]
}

export interface SetPassiveIncomeCountPayload {
    id: string,
    count: number
}

const initialState: PassiveIncomeSourcesState = Object.values(PassiveIncomeSource)
    .reduce((state: PassiveIncomeSourcesState, source) => {
        state[source] = {
            id: source,
            count: 0
        };
        return state;
    }, {});

export const passiveIncomeSourcesSlice = createSlice({
    name: 'passiveIncomeSources',
    initialState: initialState,
    reducers: {
        incrementPassiveIncome: (state, action: PayloadAction<string>) => {
            let source = action.payload;
            state[source].count++;
        },
        decrementPassiveIncome: (state, action: PayloadAction<string>) => {
            let source = action.payload;
            if (state[source].count > 0) {
                state[source].count--;
            }
        },
        unselectSelectPassiveIncome: (state, action: PayloadAction<UnselectSelectPassiveIncomeSourcesPayload>) => {
            action.payload.unselect.forEach(id => state[id].count = 0);
            action.payload.select.forEach(id => state[id].count = 1);
        },
        setPassiveIncomeCount: (state, action: PayloadAction<SetPassiveIncomeCountPayload>) => {
            state[action.payload.id].count = action.payload.count;
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            ALL_CIVILIZATIONS_PASSIVE_INCOME_SOURCES.forEach(id => state[id].count = 0);
        })
    }
});

export const {
    incrementPassiveIncome,
    decrementPassiveIncome,
    unselectSelectPassiveIncome,
    setPassiveIncomeCount
} = passiveIncomeSourcesSlice.actions;
export default passiveIncomeSourcesSlice.reducer;
