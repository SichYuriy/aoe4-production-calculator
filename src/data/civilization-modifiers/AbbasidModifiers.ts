import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import {muslimBerries} from "./MuslimModifiers";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import FoodSource from "../../model/FoodSource";
import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import ResourceDropOffModifierId from "../resource-drop-off-modifiers/ResourceDropOffModifierId";
import ResourcesAmount from "../../model/ResourcesAmount";

export const tradersDiscount: UnitCostModifier = {
    id: CostModifierId.ABBASID_TRADER_DISCOUNT,
    canBeApplied: unit => unit.id === 'TRADER',
    apply: currentCost => ({
        food: currentCost.food * 0.67,
        wood: currentCost.wood * 0.67,
        gold: currentCost.gold * 0.67,
        stone: currentCost.stone * 0.67,
    }),
    description: 'traderCost * 0.67'
}

const goldenAgeTier1: GatheringRateModifier = {
    id: GatheringRateModifierId.GOLDEN_AGE_1,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.1,
        wood: gatheringRates.wood * 1.1,
        gold: gatheringRates.gold * 1.1,
        stone: gatheringRates.stone * 1.1,
    }),
    description: 'gatheringRate * 1.1'
};

const goldenAgeTier2: GatheringRateModifier = {
    id: GatheringRateModifierId.GOLDEN_AGE_2,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.1,
        wood: gatheringRates.wood * 1.1,
        gold: gatheringRates.gold * 1.1,
        stone: gatheringRates.stone * 1.1,
    }),
    description: 'gatheringRate * 1.1'
};

const goldenAgeTier3GatheringRate: GatheringRateModifier = {
    id: GatheringRateModifierId.GOLDEN_AGE_3,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.155,
        wood: gatheringRates.wood * 1.155,
        gold: gatheringRates.gold * 1.155,
        stone: gatheringRates.stone * 1.155,
    }),
    description: 'gatheringRate * 1.155'
};

const goldenAgeTier3ProductionSpeed: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.GOLDEN_AGE_3,
    canBeApplied: () => true,
    productionSpeedBonus: 0.2
};

const freshFood: UnitCostModifier = {
    id: CostModifierId.FRESH_FOOD,
    canBeApplied: unit => unit.id === 'VILLAGER',
    apply: currentCost => ({
        ...currentCost,
        food: currentCost.food * 0.6
    }),
    description: 'villagerCost * 0.6'
}

const agriculture: GatheringRateModifier = {
    id: GatheringRateModifierId.AGRICULTURE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? ({...gatheringRates, food: gatheringRates.food * 1.1})
        : gatheringRates,
    description: 'farm * 1.1'
}

const improvedProcessing: ResourceDropOffModifier = {
    id: ResourceDropOffModifierId.IMPROVED_PROCESSING,
    getDropOffPercentage: () => ResourcesAmount.of(8, 8, 8, 8)
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.MUSLIM_BERRIES]: muslimBerries,
    [GatheringRateModifierId.GOLDEN_AGE_1]: goldenAgeTier1,
    [GatheringRateModifierId.GOLDEN_AGE_2]: goldenAgeTier2,
    [GatheringRateModifierId.GOLDEN_AGE_3]: goldenAgeTier3GatheringRate,
    [GatheringRateModifierId.AGRICULTURE]: agriculture,
}

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.GOLDEN_AGE_3]: goldenAgeTier3ProductionSpeed
}

const COST_MODIFIERS = {
    [CostModifierId.ABBASID_TRADER_DISCOUNT]: tradersDiscount,
    [CostModifierId.FRESH_FOOD]: freshFood
}

const RESOURCE_DROP_OFF_MODIFIERS = {
    [ResourceDropOffModifierId.IMPROVED_PROCESSING]: improvedProcessing
}

const ABBASID_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ABBASID,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.MUSLIM_BERRIES],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.ABBASID_TRADER_DISCOUNT],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: RESOURCE_DROP_OFF_MODIFIERS
}

export default ABBASID_MODIFIERS;
