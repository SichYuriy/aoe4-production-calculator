import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {
    chineseDocks,
    foodImperialOfficial,
    goldImperialOfficial,
    granary,
    pagoda,
    stoneImperialOfficial,
    woodImperialOfficial
} from "./ChineseModifiers";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";

const zhuXisLegacyYuanDynasty: UnitCostModifier = {
    id: CostModifierId.ZHU_XIS_LEGACY_YUAN_DYNASTY,
    canBeApplied: () => true,
    apply: currentCost => ({
        food: currentCost.food * 0.9,
        wood: currentCost.wood * 0.9,
        gold: currentCost.gold * 0.9,
        stone: currentCost.stone * 0.9,
    }),
    description: 'unitCost * 0.9'
};

const meditationGardenBush: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MEDITATION_GARDEN_BUSH,
    food: 6,
    gold: 0,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.MEDITATION_GARDEN_BUSH
};

const meditationGardenGold: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MEDITATION_GARDEN_GOLD,
    food: 0,
    gold: 25,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.MEDITATION_GARDEN_GOLD
};

const meditationGardenStone: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MEDITATION_GARDEN_STONE,
    food: 0,
    gold: 0,
    wood: 0,
    stone: 25,
    source: PassiveIncomeSource.MEDITATION_GARDEN_STONE
};

const meditationGardenTree: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MEDITATION_GARDEN_TREE,
    food: 0,
    gold: 0,
    wood: 1,
    stone: 0,
    source: PassiveIncomeSource.MEDITATION_GARDEN_TREE
};

const ZHU_XI_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL]: foodImperialOfficial,
    [GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL]: woodImperialOfficial,
    [GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL]: goldImperialOfficial,
    [GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL]: stoneImperialOfficial,
    [GatheringRateModifierId.GRANARY]: granary
}

const ZHU_XI_PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.CHINESE_DOCKS]: chineseDocks
};

const ZHU_XI_COST_MODIFIERS = {
    [CostModifierId.ZHU_XIS_LEGACY_YUAN_DYNASTY]: zhuXisLegacyYuanDynasty
};

const ZHU_XI_PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.PAGODA]: pagoda,
    [PassiveIncomeModifierId.MEDITATION_GARDEN_BUSH]: meditationGardenBush,
    [PassiveIncomeModifierId.MEDITATION_GARDEN_GOLD]: meditationGardenGold,
    [PassiveIncomeModifierId.MEDITATION_GARDEN_STONE]: meditationGardenStone,
    [PassiveIncomeModifierId.MEDITATION_GARDEN_TREE]: meditationGardenTree
};

const ZHU_XI_PASSIVE_INCOME_SOURCES = [
    PassiveIncomeSource.PAGODA,
    PassiveIncomeSource.MEDITATION_GARDEN_BUSH,
    PassiveIncomeSource.MEDITATION_GARDEN_GOLD,
    PassiveIncomeSource.MEDITATION_GARDEN_STONE,
    PassiveIncomeSource.MEDITATION_GARDEN_TREE
];

const DEFAULT_PASSIVE_INCOME_MODIFIERS = [
    PassiveIncomeModifierId.PAGODA,
    PassiveIncomeModifierId.MEDITATION_GARDEN_BUSH,
    PassiveIncomeModifierId.MEDITATION_GARDEN_GOLD,
    PassiveIncomeModifierId.MEDITATION_GARDEN_STONE,
    PassiveIncomeModifierId.MEDITATION_GARDEN_TREE
];

const ZHU_XIS_LEGACY_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ZHU_XIS_LEGACY,
    allGatheringRateModifiers: ZHU_XI_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: ZHU_XI_PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.CHINESE_DOCKS],
    allCostModifiers: ZHU_XI_COST_MODIFIERS,
    defaultCostModifiers: [],
    passiveIncomeSources: ZHU_XI_PASSIVE_INCOME_SOURCES,
    allPassiveIncomeModifiers: ZHU_XI_PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers: DEFAULT_PASSIVE_INCOME_MODIFIERS,
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default ZHU_XIS_LEGACY_MODIFIERS;