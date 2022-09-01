import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import {UnitType} from "../../model/Unit";
import ProductionSpeedModifierId from "./ProductionSpeedModifierId";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const PRODUCTION_SPEED_MODIFIERS: { [key: string]: ProductionSpeedModifier } = {
    [ProductionSpeedModifierId.MILITARY_ACADEMY]: {
        id: ProductionSpeedModifierId.MILITARY_ACADEMY,
        canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
        apply: currentProductionTime => currentProductionTime * 0.75,
        description: 'militaryTime * 0.75'
    }
};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allProductionSpeedModifiers)
        .forEach(modifier => PRODUCTION_SPEED_MODIFIERS[modifier.id] = modifier);
});

export default PRODUCTION_SPEED_MODIFIERS;
