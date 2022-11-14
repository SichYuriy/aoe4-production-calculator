import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";
import PassiveIncomeModifierId from "./PassiveIncomeModifierId";

let relics: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.RELICS,
    food: 0,
    gold: 80,
    wood: 0,
    stone: 0
}

let sacredSites: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.SACRED_SITES,
    food: 0,
    gold: 100,
    wood: 0,
    stone: 0
}

const PASSIVE_INCOME_MODIFIERS: { [key: string]: PassiveIncomeModifier } = {
    [PassiveIncomeModifierId.RELICS]: relics,
    [PassiveIncomeModifierId.SACRED_SITES]: sacredSites,
};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allPassiveIncomeModifiers)
        .forEach(modifier => PASSIVE_INCOME_MODIFIERS[modifier.id] = modifier);
});

export default PASSIVE_INCOME_MODIFIERS;
