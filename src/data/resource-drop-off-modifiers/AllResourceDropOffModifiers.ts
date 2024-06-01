import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";
import ResourceDropOffModifierId from "./ResourceDropOffModifierId";

const RESOURCE_DROP_OFF_MODIFIERS: { [key: string]: ResourceDropOffModifier } = {
    [ResourceDropOffModifierId.CUPELLATION]: {
        id: ResourceDropOffModifierId.CUPELLATION,
        getDropOffPercentage: () => ({
            food: 0,
            gold: 15,
            wood: 0,
            stone: 0,
        })
    },
};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allResourceDropOffModifiers)
        .forEach(modifier => RESOURCE_DROP_OFF_MODIFIERS[modifier.id] = modifier);
});

export default RESOURCE_DROP_OFF_MODIFIERS;