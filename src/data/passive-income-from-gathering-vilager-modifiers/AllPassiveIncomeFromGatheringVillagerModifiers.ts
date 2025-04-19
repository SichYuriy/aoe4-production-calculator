import PassiveIncomeFromGatheringVillagerModifier from "../../model/PassiveIncomeFromGatheringVillagerModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS: { [key: string]: PassiveIncomeFromGatheringVillagerModifier } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allPassiveIncomeFromGatheringVillagerModifiers)
        .forEach(modifier => PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS[modifier.id] = modifier);
});

export default PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS;