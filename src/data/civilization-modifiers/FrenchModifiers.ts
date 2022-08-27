import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import Unit from "../../model/Unit";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";

export const FRENCH_PRODUCTION_SPEED_MODIFIERS = [
    ProductionSpeedModifierId.FRENCH_DARK_AGE,
    ProductionSpeedModifierId.FRENCH_FEUDAL_AGE,
    ProductionSpeedModifierId.FRENCH_CASTLE_AGE,
    ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE
]

export const DEFAULT_FRENCH_PRODUCTION_SPEED_MODIFIERS = [
    ProductionSpeedModifierId.FRENCH_DARK_AGE
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

