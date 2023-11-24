import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import {muslimBerries} from "./MuslimModifiers";
import CostModifierId from "../cost-modifiers/CostModifierId";
import {tradersDiscount} from "./AbbasidModifiers";

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.MUSLIM_BERRIES]: muslimBerries,
}

const COST_MODIFIERS = {
    [CostModifierId.ABBASID_TRADER_DISCOUNT]: tradersDiscount,
}

const AYYUBIDS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.AYYUBIDS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.MUSLIM_BERRIES],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.ABBASID_TRADER_DISCOUNT],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default AYYUBIDS_MODIFIERS;