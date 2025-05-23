import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {UnitType} from "../../model/Unit";

const cisternGatheringRateLevel1: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_1,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.067,
        wood: gatheringRates.wood * 1.067,
        gold: gatheringRates.gold * 1.067,
        stone: gatheringRates.stone * 1.067,
    }),
    description: 'gatheringRate * 1.067'
}

const cisternGatheringRateLevel2: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_2,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.093,
        wood: gatheringRates.wood * 1.093,
        gold: gatheringRates.gold * 1.093,
        stone: gatheringRates.stone * 1.093,
    }),
    description: 'gatheringRate * 1.093'
}

const cisternGatheringRateLevel3: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_3,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.12,
        wood: gatheringRates.wood * 1.12,
        gold: gatheringRates.gold * 1.12,
        stone: gatheringRates.stone * 1.12,
    }),
    description: 'gatheringRate * 1.12'
}

const cisternGatheringRateLevel4: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_4,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.146,
        wood: gatheringRates.wood * 1.146,
        gold: gatheringRates.gold * 1.146,
        stone: gatheringRates.stone * 1.146,
    }),
    description: 'gatheringRate * 1.146'
}

const cisternGatheringRateLevel5: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_5,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.173,
        wood: gatheringRates.wood * 1.173,
        gold: gatheringRates.gold * 1.173,
        stone: gatheringRates.stone * 1.173,
    }),
    description: 'gatheringRate * 1.173'
}

const conscriptioLevel1: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.CONSCRIPTIO_1,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    productionSpeedBonus: 0.2
}

const conscriptioLevel2: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.CONSCRIPTIO_2,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    productionSpeedBonus: 0.4
}

const conscriptioLevel3: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.CONSCRIPTIO_3,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    productionSpeedBonus: 0.6
}

const conscriptioLevel4: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.CONSCRIPTIO_4,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    productionSpeedBonus: 0.8
}

const conscriptioLevel5: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.CONSCRIPTIO_5,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    productionSpeedBonus: 1
}

const BYZANTINES_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.CISTERN_LEVEL_1]: cisternGatheringRateLevel1,
    [GatheringRateModifierId.CISTERN_LEVEL_2]: cisternGatheringRateLevel2,
    [GatheringRateModifierId.CISTERN_LEVEL_3]: cisternGatheringRateLevel3,
    [GatheringRateModifierId.CISTERN_LEVEL_4]: cisternGatheringRateLevel4,
    [GatheringRateModifierId.CISTERN_LEVEL_5]: cisternGatheringRateLevel5
}

const BYZANTINES_PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.CONSCRIPTIO_1]: conscriptioLevel1,
    [ProductionSpeedModifierId.CONSCRIPTIO_2]: conscriptioLevel2,
    [ProductionSpeedModifierId.CONSCRIPTIO_3]: conscriptioLevel3,
    [ProductionSpeedModifierId.CONSCRIPTIO_4]: conscriptioLevel4,
    [ProductionSpeedModifierId.CONSCRIPTIO_5]: conscriptioLevel5
}

const BYZANTINES_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.BYZANTINES,
    allGatheringRateModifiers: BYZANTINES_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: BYZANTINES_PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default BYZANTINES_MODIFIERS;