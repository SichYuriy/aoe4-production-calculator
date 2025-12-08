import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {UnitType} from "../../model/Unit";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";

const productionSpeedEdict: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT,
    canBeApplied: unit => unit.types.some(unitType =>
        [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT, UnitType.MILITARY_SHIP].includes(unitType)
    ),
    productionSpeedBonus: 0.2
}

const stockyardEdict: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.STOCKYARD_EDICT,
    food: 0,
    gold: 40,
    wood:0,
    stone: 0,
    source: PassiveIncomeSource.STOCKYARD
}

const rotationGrazing: GatheringRateModifier = {
    id: GatheringRateModifierId.ROTATION_GRAZING,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.STOCKYARD
        ? {...gatheringRates, food: gatheringRates.food * 1.097}
        : gatheringRates,
    description: 'stockyard * 1.097'
}

const overGrazing: GatheringRateModifier = {
    id: GatheringRateModifierId.OVER_GRAZING,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.STOCKYARD
        ? {...gatheringRates, food: gatheringRates.food * 1.095}
        : gatheringRates,
    description: 'stockyard * 1.095'
}

const GOLDEN_HORDE_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.GOLDEN_HORDE,
    allGatheringRateModifiers: {
        [GatheringRateModifierId.ROTATION_GRAZING]: rotationGrazing,
        [GatheringRateModifierId.OVER_GRAZING]: overGrazing
    },
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {
        [ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT]: productionSpeedEdict
    },
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [PassiveIncomeSource.STOCKYARD],
    allPassiveIncomeModifiers: {
        [PassiveIncomeModifierId.STOCKYARD_EDICT]: stockyardEdict
    },
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default GOLDEN_HORDE_MODIFIERS;