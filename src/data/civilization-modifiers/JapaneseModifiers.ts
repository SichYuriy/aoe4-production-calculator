import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import CostModifierId from "../cost-modifiers/CostModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";

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

const yorishiroFarmhouse: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.YORISHIRO_FARM_HOUSE,
    food: 75,
    gold: 0,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.YORISHIRO_FARM_HOUSE
};

const yorishiroLumberCamp: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.YORISHIRO_LUMBER_CAMP,
    food: 0,
    gold: 0,
    wood: 75,
    stone: 0,
    source: PassiveIncomeSource.YORISHIRO_LUMBER_CAMP
};

const yorishiroForge: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.YORISHIRO_FORGE,
    food: 0,
    gold: 75,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.YORISHIRO_FORGE
};

const JAPANESE_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.DAIMYO_MANOR]: daimyoManor,
    [GatheringRateModifierId.DAIMYO_PALACE]: daimyoPalace,
    [GatheringRateModifierId.SHOGUNATE_CASTLE]: shogunateCastle,
}

const JAPANESE_COST_MODIFIERS = {
    [CostModifierId.JAPANESE_FISHING_BOATS]: japaneseFishingBoats
};

const JAPANESE_PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.YORISHIRO_FARM_HOUSE]: yorishiroFarmhouse,
    [PassiveIncomeModifierId.YORISHIRO_LUMBER_CAMP]: yorishiroLumberCamp,
    [PassiveIncomeModifierId.YORISHIRO_FORGE]: yorishiroForge
}

const JAPANESE_PASSIVE_INCOME_SOURCES = [
    PassiveIncomeSource.YORISHIRO_FARM_HOUSE,
    PassiveIncomeSource.YORISHIRO_LUMBER_CAMP,
    PassiveIncomeSource.YORISHIRO_FORGE,
];

const JAPANESE_DEFAULT_PASSIVE_INCOME_MODIFIERS = [
    PassiveIncomeModifierId.YORISHIRO_FARM_HOUSE,
    PassiveIncomeModifierId.YORISHIRO_LUMBER_CAMP,
    PassiveIncomeModifierId.YORISHIRO_FORGE,
]

const JAPANESE_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.JAPANESE,
    allGatheringRateModifiers: JAPANESE_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: JAPANESE_COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.JAPANESE_FISHING_BOATS],
    passiveIncomeSources: JAPANESE_PASSIVE_INCOME_SOURCES,
    allPassiveIncomeModifiers: JAPANESE_PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers:JAPANESE_DEFAULT_PASSIVE_INCOME_MODIFIERS,
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
};

export default JAPANESE_MODIFIERS;