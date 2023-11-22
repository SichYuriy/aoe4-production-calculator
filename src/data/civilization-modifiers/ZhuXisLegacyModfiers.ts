import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {
    chineseDocks,
    foodImperialOfficial,
    goldImperialOfficial,
    granary,
    stoneImperialOfficial,
    woodImperialOfficial
} from "./ChineseModifiers";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";

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
}

const ZHU_XI_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL]: foodImperialOfficial,
    [GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL]: woodImperialOfficial,
    [GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL]: goldImperialOfficial,
    [GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL]: stoneImperialOfficial,
    [GatheringRateModifierId.GRANARY]: granary
}

const ZHU_XI_PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.CHINESE_DOCKS]: chineseDocks
}

const ZHU_XI_COST_MODIFIERS = {
    [CostModifierId.ZHU_XIS_LEGACY_YUAN_DYNASTY]: zhuXisLegacyYuanDynasty
}

const ZHU_XIS_LEGACY_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ZHU_XIS_LEGACY,
    allGatheringRateModifiers: ZHU_XI_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: ZHU_XI_PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.CHINESE_DOCKS],
    allCostModifiers: ZHU_XI_COST_MODIFIERS,
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default ZHU_XIS_LEGACY_MODIFIERS;