import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";

const englishDarkAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_DARK_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.12
        }
        : gatheringRates
}

const englishFeudalAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_FEUDAL_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.17
        }
        : gatheringRates
}

const englishCastleAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_CASTLE_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.20
        }
        : gatheringRates
}

const englishImperialAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_IMPERIAL_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.24
        }
        : gatheringRates
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.ENGLISH_DARK_AGE]: englishDarkAge,
    [GatheringRateModifierId.ENGLISH_FEUDAL_AGE]: englishFeudalAge,
    [GatheringRateModifierId.ENGLISH_CASTLE_AGE]: englishCastleAge,
    [GatheringRateModifierId.ENGLISH_IMPERIAL_AGE]: englishImperialAge,
}

const ENGLISH_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ENGLAND,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.ENGLISH_DARK_AGE],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: []
}

export default ENGLISH_MODIFIERS;
