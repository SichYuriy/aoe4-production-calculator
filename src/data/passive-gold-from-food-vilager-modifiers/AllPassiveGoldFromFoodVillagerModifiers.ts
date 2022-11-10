import PassiveGoldFromFoodVillagerModifier from "../../model/PassiveGoldFromFoodVillagerModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS: { [key: string]: PassiveGoldFromFoodVillagerModifier } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allPassiveGoldFromFoodVillagerModifiers)
        .forEach(modifier => PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS[modifier.id] = modifier);
});

export default PASSIVE_GOLD_FROM_FOOD_VILLAGER_MODIFIERS;