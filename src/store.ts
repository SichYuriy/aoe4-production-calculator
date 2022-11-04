import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './state/UnitsSlice'
import gatheringRatesReducer from "./state/GatheringRatesSlice";
import gatheringRateModifiersReducer from "./state/GatheringRateModifiersSlice";
import productionSpeedModifiersReducer from "./state/ProducationSpeedModifiersSlice";
import costModifiersReducer from "./state/CostModifiersSlice";
import civilizationReducer from "./state/CivilizationSlice";
import passiveIncomeModifiers from "./state/PassiveIncomeModifiersSlice";
import limitedFoodGatheringSourceModifiers from "./state/LimitedFoodGatheringSourceModifiersSlice";

export const store = configureStore({
    reducer: {
        units: unitsReducer,
        gatheringRates: gatheringRatesReducer,
        gatheringRateModifiers: gatheringRateModifiersReducer,
        productionSpeedModifiers: productionSpeedModifiersReducer,
        costModifiers: costModifiersReducer,
        passiveIncomeModifiers: passiveIncomeModifiers,
        limitedFoodGatheringSourceModifiers: limitedFoodGatheringSourceModifiers,
        civilization: civilizationReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
