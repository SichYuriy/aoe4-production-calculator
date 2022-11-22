import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './state/UnitsSlice'
import gatheringRatesReducer from "./state/GatheringRatesSlice";
import gatheringRateModifiersReducer from "./state/GatheringRateModifiersSlice";
import productionSpeedModifiersReducer from "./state/ProducationSpeedModifiersSlice";
import costModifiersReducer from "./state/CostModifiersSlice";
import civilizationReducer from "./state/CivilizationSlice";
import passiveIncomeModifiers from "./state/PassiveIncomeModifiersSlice";
import passiveIncomeSources from "./state/PassiveIncomeSourcesSlice";
import limitedFoodGatheringSourceModifiers from "./state/LimitedFoodGatheringSourceModifiersSlice";
import passiveGoldFromFoodVillagerModifiers from "./state/PassiveGoldFromFoodVillagerModifiersSlice";
import minFoodWorkers from "./state/MinFoodWorkersSlice";

export const store = configureStore({
    reducer: {
        units: unitsReducer,
        gatheringRates: gatheringRatesReducer,
        gatheringRateModifiers: gatheringRateModifiersReducer,
        productionSpeedModifiers: productionSpeedModifiersReducer,
        costModifiers: costModifiersReducer,
        passiveIncomeSources: passiveIncomeSources,
        passiveIncomeModifiers: passiveIncomeModifiers,
        limitedFoodGatheringSourceModifiers: limitedFoodGatheringSourceModifiers,
        passiveGoldFromFoodVillagerModifiers: passiveGoldFromFoodVillagerModifiers,
        civilization: civilizationReducer,
        minFoodWorkers: minFoodWorkers
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
