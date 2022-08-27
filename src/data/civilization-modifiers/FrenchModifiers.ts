import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import Unit, {Building, UnitType} from "../../model/Unit";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";

export const FRENCH_PRODUCTION_SPEED_MODIFIERS = [
    ProductionSpeedModifierId.FRENCH_DARK_AGE,
    ProductionSpeedModifierId.FRENCH_FEUDAL_AGE,
    ProductionSpeedModifierId.FRENCH_CASTLE_AGE,
    ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE,
    ProductionSpeedModifierId.SCHOOL_OF_CAVALRY
]

export const DEFAULT_FRENCH_PRODUCTION_SPEED_MODIFIERS = [
    ProductionSpeedModifierId.FRENCH_DARK_AGE
]

export const FRENCH_COST_MODIFIERS = [
    CostModifierId.FRENCH_CASTLE,
    CostModifierId.ENLISTMENTS_INCENTIVES
]

export const DEFAULT_FRENCH_COST_MODIFIERS = [

]

export const frenchDarkAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_DARK_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.9
}

export const frenchFeudalAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_FEUDAL_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.9
}

export const frenchCastleAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_CASTLE_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.85
}

export const frenchImperialAgeProductionSpeedModifier: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE,
    canBeApplied: (unit: Unit) => unit.id === 'VILLAGER',
    apply: (currentProductionTime: number) => currentProductionTime * 0.8
}

export const schoolOfCavalry: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.SCHOOL_OF_CAVALRY,
    canBeApplied: (unit: Unit) => unit.types.includes(UnitType.CAVALRY),
    apply: (currentProductionTime: number) => currentProductionTime * 0.8
}

export const frenchCastle: UnitCostModifier = {
    id: CostModifierId.FRENCH_CASTLE,
    canBeApplied: unit => unit.building === Building.STABLE || unit.building === Building.ARCHERY,
    apply: currentCost => ({
        food: currentCost.food * 0.8,
        wood: currentCost.wood * 0.8,
        gold: currentCost.gold * 0.8,
        stone: currentCost.stone * 0.8,
    })
}

export const enlistmentIncentives: UnitCostModifier = {
    id: CostModifierId.ENLISTMENTS_INCENTIVES,
    canBeApplied: unit => unit.building === Building.STABLE || unit.building === Building.ARCHERY,
    apply: currentCost => ({
        food: currentCost.food * 0.95,
        wood: currentCost.wood * 0.95,
        gold: currentCost.gold * 0.95,
        stone: currentCost.stone * 0.95,
    })
}

