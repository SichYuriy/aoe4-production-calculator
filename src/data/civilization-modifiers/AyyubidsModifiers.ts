import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import {muslimBerries} from "./MuslimModifiers";
import CostModifierId from "../cost-modifiers/CostModifierId";
import {tradersDiscount} from "./AbbasidModifiers";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import {UnitType} from "../../model/Unit";

const ayyubidsGoldenAgeTier1: GatheringRateModifier = {
    id: GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.067,
        wood: gatheringRates.wood * 1.067,
        gold: gatheringRates.gold * 1.067,
        stone: gatheringRates.stone * 1.067
    }),
    description: 'gatheringRate * 1.067'
}

const ayyubidsGoldenAgeTier3: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.AYYUBIDS_GOLDEN_AGE_3,
    canBeApplied: () => true,
    productionSpeedBonus: 0.2
}

const ayyubidsGoldenAgeTier4: UnitCostModifier = {
    id: CostModifierId.AYYUBIDS_GOLDEN_AGE_4,
    canBeApplied: unit => unit.types.includes(UnitType.SIEGE),
    apply: currentCost => ({
        food: currentCost.food * 0.8,
        wood: currentCost.wood * 0.8,
        gold: currentCost.gold * 0.8,
        stone: currentCost.stone * 0.8
    }),
    description: 'siegeCost * 0.8'
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.MUSLIM_BERRIES]: muslimBerries,
    [GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1]: ayyubidsGoldenAgeTier1
}

const COST_MODIFIERS = {
    [CostModifierId.ABBASID_TRADER_DISCOUNT]: tradersDiscount,
    [CostModifierId.AYYUBIDS_GOLDEN_AGE_4]: ayyubidsGoldenAgeTier4
}

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.AYYUBIDS_GOLDEN_AGE_3]: ayyubidsGoldenAgeTier3
}

const AYYUBIDS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.AYYUBIDS,
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
    allResourceDropOffModifiers: {}
}

export default AYYUBIDS_MODIFIERS;