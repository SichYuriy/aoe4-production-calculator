import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import FoodSource from "../model/FoodSource";
import GatheringRates from "../model/GatheringRates";

export interface GatheringRatesState {
    foodSource: FoodSource,
    customGatheringRates: GatheringRates,
    useCustomGatheringRates: boolean
}

export const gatheringRatesSlice = createSlice({
    name: 'gatheringRates',
    initialState: {
        foodSource: FoodSource.SHEEP,
        customGatheringRates: {
            food: 40,
            wood: 40,
            gold: 40,
            stone: 40
        },
        useCustomGatheringRates: false
    } as GatheringRatesState,
    reducers: {
        changeFoodSource: (state, action: PayloadAction<FoodSource>) => {
            state.foodSource = action.payload;
        },
        toggleUseCustomGatheringRates: (state, action: PayloadAction<boolean>) => {
            state.useCustomGatheringRates = action.payload;
        },
        changeCustomFoodGatheringRate: (state, action: PayloadAction<number>) => {
            state.customGatheringRates.food = action.payload
        },
        changeCustomWoodGatheringRate: (state, action: PayloadAction<number>) => {
            state.customGatheringRates.wood = action.payload
        },
        changeCustomGoldGatheringRate: (state, action: PayloadAction<number>) => {
            state.customGatheringRates.gold = action.payload
        },
        changeCustomStoneGatheringRate: (state, action: PayloadAction<number>) => {
            state.customGatheringRates.stone = action.payload
        }
    }
});

export const {
    changeFoodSource,
    toggleUseCustomGatheringRates,
    changeCustomFoodGatheringRate,
    changeCustomWoodGatheringRate,
    changeCustomGoldGatheringRate,
    changeCustomStoneGatheringRate
} = gatheringRatesSlice.actions;
export default gatheringRatesSlice.reducer;
