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
import passiveIncomeFromGatheringVillagerModifiers from "./state/PassiveIncomeFromGatheringVillagerModifiersSlice";
import minFoodWorkers from "./state/MinFoodWorkersSlice";
import costModifiersPerUnit from "./state/CostModifiersPerUnitSlice";
import featureFlags from "./state/FeatureFlagsSlice";
import resourceDropOffModifiers from "./state/ResourceDropOffModifiersSlice";

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
        passiveIncomeFromGatheringVillagerModifiers: passiveIncomeFromGatheringVillagerModifiers,
        civilization: civilizationReducer,
        minFoodWorkers: minFoodWorkers,
        costModifiersPerUnit: costModifiersPerUnit,
        featureFlags: featureFlags,
        resourceDropOffModifiers: resourceDropOffModifiers
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
