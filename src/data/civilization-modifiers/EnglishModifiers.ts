import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";
import {Building} from "../../model/Unit";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import PassiveGoldFromFoodVillagerModifier from "../../model/PassiveGoldFromFoodVillagerModifier";
import PassiveGoldFromFoodVillagerModifierId
    from "../passive-gold-from-food-vilager-modifiers/PassiveGoldFromFoodVillagerModifierId";

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

const englishMma: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.ENGLISH_MMA,
    canBeApplied: unit => unit.id === 'MAN_AT_ARMS',
    apply: currentProductionTime => currentProductionTime * 0.6818,
    description: 'mmaTime * 0.68'
}

const enclosures: PassiveGoldFromFoodVillagerModifier = {
    id: PassiveGoldFromFoodVillagerModifierId.ENCLOSURES,
    gold: 12,
    foodSources: [FoodSource.FARM]
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.ENGLISH_DARK_AGE]: englishDarkAge,
    [GatheringRateModifierId.ENGLISH_FEUDAL_AGE]: englishFeudalAge,
    [GatheringRateModifierId.ENGLISH_CASTLE_AGE]: englishCastleAge,
    [GatheringRateModifierId.ENGLISH_IMPERIAL_AGE]: englishImperialAge,
}

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.ENGLISH_MMA]: englishMma
}

const COST_MODIFIERS = {
    [CostModifierId.ENGLISH_DOCKS]: englishDocks
}

const PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS = {
    [PassiveGoldFromFoodVillagerModifierId.ENCLOSURES]: enclosures
}

const ENGLISH_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ENGLAND,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.ENGLISH_DARK_AGE],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.ENGLISH_MMA],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.ENGLISH_DOCKS],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS,
    allCostModifiersPerUnit: {}
}

export default ENGLISH_MODIFIERS;
