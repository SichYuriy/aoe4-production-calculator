import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {chineseDocks} from "./ChineseModifiers";

const CHINESE_PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.CHINESE_DOCKS]: chineseDocks
}

const ZHU_XIS_LEGACY_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ZHU_XIS_LEGACY,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: CHINESE_PRODUCTION_SPEED_MODIFIERS,
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