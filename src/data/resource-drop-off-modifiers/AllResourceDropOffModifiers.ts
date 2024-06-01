import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const RESOURCE_DROP_OFF_MODIFIERS: { [key: string]: ResourceDropOffModifier } = {};

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allResourceDropOffModifiers)
        .forEach(modifier => RESOURCE_DROP_OFF_MODIFIERS[modifier.id] = modifier);
});

export default RESOURCE_DROP_OFF_MODIFIERS;