import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {
    chineseDocks,
    foodImperialOfficial,
    goldImperialOfficial,
    stoneImperialOfficial,
    woodImperialOfficial
} from "./ChineseModifiers";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";

const ZHU_XI_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL]: foodImperialOfficial,
    [GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL]: woodImperialOfficial,
    [GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL]: goldImperialOfficial,
    [GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL]: stoneImperialOfficial
}

const ZHU_XI_PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.CHINESE_DOCKS]: chineseDocks
}

const ZHU_XIS_LEGACY_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ZHU_XIS_LEGACY,
    allGatheringRateModifiers: ZHU_XI_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: ZHU_XI_PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.CHINESE_DOCKS],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default ZHU_XIS_LEGACY_MODIFIERS;