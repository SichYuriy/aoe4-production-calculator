import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const PASSIVE_INCOME_MODIFIERS: { [key: string]: PassiveIncomeModifier } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allPassiveIncomeModifiers)
        .forEach(modifier => PASSIVE_INCOME_MODIFIERS[modifier.id] = modifier);
});

export default PASSIVE_INCOME_MODIFIERS;
