import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";
import {Building} from "../../model/Unit";

const englishDarkAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_DARK_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {...gatheringRates, food: gatheringRates.food * 1.12}
        : gatheringRates,
    description: 'farm * 1.12'
}

const englishFeudalAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_FEUDAL_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {...gatheringRates, food: gatheringRates.food * 1.17}
        : gatheringRates,
    description: 'farm * 1.17'
}

const englishCastleAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_CASTLE_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {...gatheringRates, food: gatheringRates.food * 1.20}
        : gatheringRates,
    description: 'farm * 1.20'
}

const englishImperialAge: GatheringRateModifier = {
    id: GatheringRateModifierId.ENGLISH_IMPERIAL_AGE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {...gatheringRates, food: gatheringRates.food * 1.24}
        : gatheringRates,
    description: 'farm * 1.24'
}

const englishDocks: UnitCostModifier = {
    id: CostModifierId.ENGLISH_DOCKS,
    canBeApplied: unit => unit.building === Building.DOCK,
    apply: cost => ({
        food: cost.food * 0.9,
        wood: cost.wood * 0.9,
        gold: cost.gold * 0.9,
        stone: cost.stone * 0.9,
    }),
    description: 'shipCost * 0.9'
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.ENGLISH_DARK_AGE]: englishDarkAge,
    [GatheringRateModifierId.ENGLISH_FEUDAL_AGE]: englishFeudalAge,
    [GatheringRateModifierId.ENGLISH_CASTLE_AGE]: englishCastleAge,
    [GatheringRateModifierId.ENGLISH_IMPERIAL_AGE]: englishImperialAge,
}

const COST_MODIFIERS = {
    [CostModifierId.ENGLISH_DOCKS]: englishDocks
}

const ENGLISH_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ENGLAND,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.ENGLISH_DARK_AGE],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.ENGLISH_DOCKS]
}

export default ENGLISH_MODIFIERS;
