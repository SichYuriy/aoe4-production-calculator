import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import {UnitType} from "../../model/Unit";
import {
    frenchCastleAgeProductionSpeedModifier, frenchDarkAgeProductionSpeedModifier,
    frenchFeudalAgeProductionSpeedModifier, frenchImperialAgeProductionSpeedModifier
} from "../civilization-modifiers/FrenchModifiers";
import ProductionSpeedModifierId from "./ProductionSpeedModifierId";

const PRODUCTION_SPEED_MODIFIERS: { [key: string]: ProductionSpeedModifier } = {
    [ProductionSpeedModifierId.MILITARY_ACADEMY]: {
        id: ProductionSpeedModifierId.MILITARY_ACADEMY,
        canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
        apply: currentProductionTime => currentProductionTime * 0.75
    },
    [ProductionSpeedModifierId.FRENCH_DARK_AGE]: frenchDarkAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.FRENCH_FEUDAL_AGE]: frenchFeudalAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.FRENCH_CASTLE_AGE]: frenchCastleAgeProductionSpeedModifier,
    [ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE]: frenchImperialAgeProductionSpeedModifier,
}

export default PRODUCTION_SPEED_MODIFIERS;
