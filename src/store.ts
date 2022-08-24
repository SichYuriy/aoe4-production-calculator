import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from './state/UnitsSlice'
import gatheringRatesReducer from "./state/GatheringRatesSlice";
import gatheringRateModifiersReducer from "./state/GatheringRateModifiersSlice";
import productionSpeedModifiers from "./state/ProducationSpeedModifiersSlice";

export const store = configureStore({
    reducer: {
        units: unitsReducer,
        gatheringRates: gatheringRatesReducer,
        gatheringRateModifiers: gatheringRateModifiersReducer,
        productionSpeedModifiers: productionSpeedModifiers
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
