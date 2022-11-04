import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";
import LimitedFoodGatheringSourceModifier from "../../model/LimitedFoodGatheringSourceModifier";


const LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS: { [key: string]: LimitedFoodGatheringSourceModifier } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allLimitedFoodGatheringSourceModifiers)
        .forEach(modifier => LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS[modifier.id] = modifier);
});

export default LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS;
