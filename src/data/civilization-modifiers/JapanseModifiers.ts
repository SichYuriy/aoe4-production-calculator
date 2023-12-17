import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import CostModifierId from "../cost-modifiers/CostModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";

const japaneseFishingBoats: UnitCostModifier = {
    id: CostModifierId.JAPANESE_FISHING_BOATS,
    canBeApplied: unit => unit.id === 'FISHING_BOAT',
    apply: currentCost => ({
        food: currentCost.food * 0.7,
        wood: currentCost.wood * 0.7,
        gold: currentCost.gold * 0.7,
        stone: currentCost.stone * 0.7
    }),
    description: 'fishingBoatCost * 0.7'
};

const daimyoManor: GatheringRateModifier = {
    id: GatheringRateModifierId.DAIMYO_MANOR,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.2
        }
        : gatheringRates,
    description: 'farm * 1.2'
};

const daimyoPalace: GatheringRateModifier = {
    id: GatheringRateModifierId.DAIMYO_PALACE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.4
        }
        : gatheringRates,
    description: 'farm * 1.4'
};

const shogunateCastle: GatheringRateModifier = {
    id: GatheringRateModifierId.SHOGUNATE_CASTLE,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {
            ...gatheringRates,
            food: gatheringRates.food * 1.6
        }
        : gatheringRates,
    description: 'farm * 1.6'
};

const JAPANESE_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.DAIMYO_MANOR]: daimyoManor,
    [GatheringRateModifierId.DAIMYO_PALACE]: daimyoPalace,
    [GatheringRateModifierId.SHOGUNATE_CASTLE]: shogunateCastle,
}

const JAPANESE_COST_MODIFIERS = {
    [CostModifierId.JAPANESE_FISHING_BOATS]: japaneseFishingBoats
};

const JAPANESE_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.JAPANESE,
    allGatheringRateModifiers: JAPANESE_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: JAPANESE_COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.JAPANESE_FISHING_BOATS],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
};

export default JAPANESE_MODIFIERS;