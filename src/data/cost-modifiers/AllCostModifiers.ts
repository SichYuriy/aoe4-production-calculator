import UnitCostModifier from "../../model/UnitCostModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const COST_MODIFIERS: { [key: string]: UnitCostModifier } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allCostModifiers)
        .forEach(modifier => COST_MODIFIERS[modifier.id] = modifier);
});

export default COST_MODIFIERS;
