import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import changeCivilization from "./actions/CivilizationChnagedAction";
import {RootState} from "../store";
import GatheringRateModifier from "../model/GatheringRateModifier";
import ALL_COST_MODIFIERS_PER_UNIT from "../data/cost-modifiers-per-unit/AllCostModifiersPerUnit";

export interface UnitsSelected {
    [key: string]: number
}

export interface CostModifiersPerUnitState {
    [key: string]: UnitsSelected
}

export interface CostModifierPerUnitsActionPayload {
    modifierId: string,
    unitId: string
}

export interface CostModifierUnitsActionPayload {
    modifierId: string,
    unitsSelected: UnitsSelected
}

export interface SwitchCostModifierPerUnitActionPayload {
    from: string,
    to: string
}

export const costModifiersPerUnitSlice = createSlice({
    name: 'costModifiersPerUnit',
    initialState: {} as CostModifiersPerUnitState,
    reducers: {
        incrementUnitForCostModifier: (state, action: PayloadAction<CostModifierPerUnitsActionPayload>) => {
            let unitsSelected: UnitsSelected = state[action.payload.modifierId] || {};
            let unitCount: number = unitsSelected[action.payload.unitId] || 0;
            unitCount++;
            unitsSelected[action.payload.unitId] = unitCount;
            state[action.payload.modifierId] = unitsSelected;
        },
        decrementUnitForCostModifier: (state, action: PayloadAction<CostModifierPerUnitsActionPayload>) => {
            let unitsSelected: UnitsSelected = state[action.payload.modifierId] || {};
            let unitCount: number = unitsSelected[action.payload.unitId] || 0;
            unitCount--;
            unitsSelected[action.payload.unitId] = unitCount;
            state[action.payload.modifierId] = unitsSelected;
            if (unitCount <= 0) {
                delete unitsSelected[action.payload.unitId];
            }
            if (Object.keys(unitsSelected).length === 0) {
                delete state[action.payload.modifierId];
            }
        },
        setUnitsForCostModifier: (state, action: PayloadAction<CostModifierUnitsActionPayload>) => {
            state[action.payload.modifierId] = action.payload.unitsSelected;
        },
        clearUnitsForCostModifier: (state, action: PayloadAction<string>) => {
            delete state[action.payload];
        },
        switchCostModifierPerUnit: (state, action: PayloadAction<SwitchCostModifierPerUnitActionPayload>) => {
            if (state[action.payload.from]) {
                state[action.payload.to] = state[action.payload.from];
                delete state[action.payload.from];
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(changeCivilization, (state) => {
            Object.keys(state)
                .forEach(modifierId => {
                    delete state[modifierId];
                });
        });
    }
});

export let selectActiveCostModifiersPerUnit = (state: RootState): GatheringRateModifier[] => {
    return Object.keys(state.costModifiersPerUnit)
        .filter(id => state.costModifiersPerUnit[id])
        .map(id => ALL_COST_MODIFIERS_PER_UNIT[id]);
}

export const {incrementUnitForCostModifier, decrementUnitForCostModifier, setUnitsForCostModifier, clearUnitsForCostModifier, switchCostModifierPerUnit} = costModifiersPerUnitSlice.actions;
export default costModifiersPerUnitSlice.reducer;
