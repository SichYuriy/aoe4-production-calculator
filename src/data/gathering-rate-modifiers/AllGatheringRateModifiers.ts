import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";
import GatheringRateModifierId from "./GatheringRateModifierId";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const GATHERING_RATES_MODIFIERS: { [key: string]: GatheringRateModifier } = {
    [GatheringRateModifierId.WHEELBARROW]: {
        id: GatheringRateModifierId.WHEELBARROW,
        apply: (rates, foodSource) => {
            let foodMultiplier = [FoodSource.BERRY, FoodSource.DEER].includes(foodSource) ? 1.0952 : 1.01;
            return {
                food: rates.food * foodMultiplier,
                wood: rates.wood * 1.07,
                gold: rates.gold * 1.07,
                stone: rates.stone * 1.07
            };
        },
        description: '[berries, deer] * 1.0952, other food * 1.01, [wood, gold, stone] * 1.07'
    },
    [GatheringRateModifierId.DOUBLE_BROADAX]: {
        id: GatheringRateModifierId.DOUBLE_BROADAX,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.1
            };
        },
        description: 'wood * 1.1'
    },
    [GatheringRateModifierId.LUMBER_PRESERVATION]: {
        id: GatheringRateModifierId.LUMBER_PRESERVATION,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.09
            };
        },
        description: 'wood * 1.09'
    },
    [GatheringRateModifierId.CROSSCUT_SAW]: {
        id: GatheringRateModifierId.CROSSCUT_SAW,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.08
            };
        },
        description: 'wood * 1.08'
    },
    [GatheringRateModifierId.HORTICULTURE]: {
        id: GatheringRateModifierId.HORTICULTURE,
        apply: rates => {
            return {
                ...rates,
                food: rates.food * 1.12
            };
        },
        description: 'food * 1.12'
    },
    [GatheringRateModifierId.FERTILIZATION]: {
        id: GatheringRateModifierId.FERTILIZATION,
        apply: rates => {
            return {
                ...rates,
                food: rates.food * 1.1
            };
        },
        description: 'food * 1.1'
    },
    [GatheringRateModifierId.CROSS_BREEDING]: {
        id: GatheringRateModifierId.CROSS_BREEDING,
        apply: rates => {
            return {
                ...rates,
                food: rates.food * 1.1
            };
        },
        description: 'food * 1.1'
    },
    [GatheringRateModifierId.SPECIALIZED_PICK]: {
        id: GatheringRateModifierId.SPECIALIZED_PICK,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * 1.12,
                stone: rates.stone * 1.12,
            };
        },
        description: '[gold, stone] * 1.11'
    },
    [GatheringRateModifierId.ACID_DISTILLATION]: {
        id: GatheringRateModifierId.ACID_DISTILLATION,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * 1.11,
                stone: rates.stone * 1.11,
            };
        },
        description: '[gold, stone] * 1.11'
    },
    [GatheringRateModifierId.CUPELLATION]: {
        id: GatheringRateModifierId.CUPELLATION,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * 1.1,
                stone: rates.stone * 1.1,
            };
        },
        description: '[gold, stone] * 1.1'
    },
    [GatheringRateModifierId.FORESTRY]: {
        id: GatheringRateModifierId.FORESTRY,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.04
            };
        },
        description: 'wood * 1.04'
    }
}

allCivilizationModifiers.forEach(civilizationModifiers => {
    Object.values(civilizationModifiers.allGatheringRateModifiers)
        .forEach(modifier => GATHERING_RATES_MODIFIERS[modifier.id] = modifier);
});

export default GATHERING_RATES_MODIFIERS;
