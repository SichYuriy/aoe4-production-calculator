import DynamicPassiveIncomeModifier from "../../model/DynamicPassiveIncomeModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const DYNAMIC_PASSIVE_INCOME_MODIFIERS: { [key: string]: DynamicPassiveIncomeModifier } = {};

allCivilizationModifiers
        .filter(civilizationModifiers => !!civilizationModifiers.allDynamicPassiveIncomeModifiers)
        .forEach(civilizationModifiers => {
            Object.values(civilizationModifiers.allDynamicPassiveIncomeModifiers!)
                .forEach(modifier => DYNAMIC_PASSIVE_INCOME_MODIFIERS[modifier.id] = modifier);
        });

export const DEFAULT_COMMON_DYNAMIC_PASSIVE_INCOME_MODIFIERS: string[] = [];


export default DYNAMIC_PASSIVE_INCOME_MODIFIERS;