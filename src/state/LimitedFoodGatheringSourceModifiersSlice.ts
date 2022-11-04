import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {
    ALL_CIVILIZATIONS_LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS
} from "../data/civilization-modifiers/AllCivilizationSpecificModifiers";
import LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS
    from "../data/limited-food-gathering-source-modifiers/AllLimitedFoodGatheringSourceModifiers";

export interface LimitedFoodGatheringSourceModifierState {
    id: string;
    selected: boolean;
}

export interface LimitedFoodGatheringSourceModifiersState {
    [key: string]: LimitedFoodGatheringSourceModifierState
}

const initialState: LimitedFoodGatheringSourceModifiersState = Object.values(LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS)
    .reduce((state: LimitedFoodGatheringSourceModifiersState, modifier) => {
        state[modifier.id] = {
            id: modifier.id,
            selected: false
        };
        return state;
    }, {})


export const limitedFoodGatheringSourceModifiers = createSlice({
    name: 'limitedFoodGatheringSourceModifiers',
    initialState: initialState,
    reducers: {
        toggleLimitedFoodGatheringSource: (state, action: PayloadAction<string>) => {
            let id: string = action.payload;
            state[id].selected = !state[id].selected;
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, state => {
            ALL_CIVILIZATIONS_LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS.forEach(id => state[id].selected = false);
        });
    }
});

export const {toggleLimitedFoodGatheringSource} = limitedFoodGatheringSourceModifiers.actions;
export default limitedFoodGatheringSourceModifiers.reducer;
