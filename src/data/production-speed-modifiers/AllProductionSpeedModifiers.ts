import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import {UnitType} from "../../model/Unit";
import ProductionSpeedModifierId from "./ProductionSpeedModifierId";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const PRODUCTION_SPEED_MODIFIERS: { [key: string]: ProductionSpeedModifier } = {
    [ProductionSpeedModifierId.MILITARY_ACADEMY]: {
        id: ProductionSpeedModifierId.MILITARY_ACADEMY,
        canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT, UnitType.MILITARY_SHIP].includes(unitType)),
        productionSpeedBonus: 0.33
    }
};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allProductionSpeedModifiers)
        .forEach(modifier => PRODUCTION_SPEED_MODIFIERS[modifier.id] = modifier);
});

export default PRODUCTION_SPEED_MODIFIERS;
