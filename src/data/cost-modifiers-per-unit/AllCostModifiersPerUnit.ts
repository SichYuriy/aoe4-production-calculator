import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";
import CostModifierPerUnit from "../../model/CostModifierPerUnit";

const ALL_COST_MODIFIERS_PER_UNIT: { [key: string]: CostModifierPerUnit } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allCostModifiersPerUnit)
        .forEach(modifier => ALL_COST_MODIFIERS_PER_UNIT[modifier.id] = modifier);
});

export default ALL_COST_MODIFIERS_PER_UNIT;