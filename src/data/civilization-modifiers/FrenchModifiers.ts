import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import Unit, {Building, UnitType} from "../../model/Unit";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";
import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";

const frenchDarkAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_DARK_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.9,
    description: 'villagerTime * 0.9'
}

const frenchFeudalAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_FEUDAL_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.9,
    description: 'villagerTime * 0.9'
}

const frenchCastleAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_CASTLE_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.85,
    description: 'villagerTime * 0.85'
}

const frenchImperialAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.8,
    description: 'villagerTime * 0.8'
}

const schoolOfCavalry: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.SCHOOL_OF_CAVALRY,
    canBeApplied: (unit: Unit) => unit.types.includes(UnitType.CAVALRY),
    apply: (currentProductionTime: number) => currentProductionTime * 0.8,
    description: 'cavalryTime * 0.8'
}

const frenchCastle: UnitCostModifier = {
    id: CostModifierId.FRENCH_CASTLE,
    canBeApplied: unit => unit.building === Building.STABLE || unit.building === Building.ARCHERY,
    apply: currentCost => ({
        food: currentCost.food * 0.8,
        wood: currentCost.wood * 0.8,
        gold: currentCost.gold * 0.8,
        stone: currentCost.stone * 0.8,
    }),
    description: '[stableUnitCost, archeryUnitCost] * 0.8'
}

const enlistmentIncentives: UnitCostModifier = {
    id: CostModifierId.ENLISTMENTS_INCENTIVES,
    canBeApplied: unit => unit.building === Building.STABLE || unit.building === Building.ARCHERY,
    apply: currentCost => ({
        food: currentCost.food * 0.95,
        wood: currentCost.wood * 0.95,
        gold: currentCost.gold * 0.95,
        stone: currentCost.stone * 0.95,
    }),
    description: '[stableUnitCost, archeryUnitCost] * 0.95'
}

const PRODUCTION_SPEED_MODIFIERS: {[key:string]: ProductionSpeedModifier} = {
    [ProductionSpeedModifierId.FRENCH_DARK_AGE]: frenchDarkAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.FRENCH_FEUDAL_AGE]: frenchFeudalAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.FRENCH_CASTLE_AGE]: frenchCastleAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE]: frenchImperialAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]: schoolOfCavalry
}

const COST_MODIFIERS: {[key:string]: UnitCostModifier} = {
    [CostModifierId.FRENCH_CASTLE]: frenchCastle,
    [CostModifierId.ENLISTMENTS_INCENTIVES]: enlistmentIncentives
}

const FRENCH_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.FRENCH,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.FRENCH_DARK_AGE],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [],
    allPassiveIncomeModifiers: {},
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {}
}

export default FRENCH_MODIFIERS;

