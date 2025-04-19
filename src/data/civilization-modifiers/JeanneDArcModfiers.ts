import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {schoolOfCavalry} from "./FrenchModifiers";
import CostModifierPerUnit from "../../model/CostModifierPerUnit";
import CostModifierPerUnitId from "../cost-modifiers-per-unit/CostModifierPerUnitId";

const consecrate: CostModifierPerUnit = {
    id: CostModifierPerUnitId.CONSECRATE,
    apply: currentCost => ({
        ...currentCost,
        food: currentCost.food * 0.75
    }),
    description: 'unitCost.food * 0.75'
}

const ordinanceCompany: CostModifierPerUnit = {
    id: CostModifierPerUnitId.ORDINANCE_COMPANY,
    apply: currentCost => ({
        ...currentCost,
        food: currentCost.food * 0.75,
        wood: currentCost.wood * 0.75,
        gold: currentCost.gold * 0.75
    }),
    description: '[unitCost.food, unitCost.gold, unitCost.wood] * 0.75'
}

const PRODUCTION_SPEED_MODIFIERS: { [key: string]: ProductionSpeedModifier } = {
    [ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]: schoolOfCavalry
}

const COST_MODIFIERS_PER_UNIT: { [key: string]: CostModifierPerUnit } = {
    [CostModifierPerUnitId.CONSECRATE]: consecrate,
    [CostModifierPerUnitId.ORDINANCE_COMPANY]: ordinanceCompany,
}

const JEANNE_D_ARC_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.JEANNE_D_ARC,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: COST_MODIFIERS_PER_UNIT,
    allResourceDropOffModifiers: {}
}

export default JEANNE_D_ARC_MODIFIERS;