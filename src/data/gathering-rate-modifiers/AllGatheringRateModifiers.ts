import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";
import GatheringRateModifierId from "./GatheringRateModifierId";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const GATHERING_RATES_MODIFIERS: { [key: string]: GatheringRateModifier } = {
    [GatheringRateModifierId.WHEELBARROW]: {
        id: GatheringRateModifierId.WHEELBARROW,
        apply: (rates, foodSource) => {
            let foodMultiplier = 1;
            if ([FoodSource.BERRY, FoodSource.DEER].includes(foodSource)) {
                foodMultiplier = 1.0952;
            } else if ([FoodSource.SHEEP].includes(foodSource)) {
                foodMultiplier = 1.01;
            } else if ([FoodSource.FARM].includes(foodSource)) {
                foodMultiplier = 1.036
            }
            return {
                food: rates.food * foodMultiplier,
                wood: rates.wood * 1.07,
                gold: rates.gold * 1.07,
                stone: rates.stone * 1.07
            };
        },
        description: '[berries, deer] * 1.0952, [sheep] * 1.01, [farm] * 1.036, [wood, gold, stone] * 1.07'
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
        apply: (rates, foodSource) => {
            if ([FoodSource.SHEEP, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
                return ({...rates, food: rates.food * 1.12});
            } else if (FoodSource.TWIN_MINARET_BERRY === foodSource) {
                return ({...rates, food: rates.food * 1.15});
            } else {
                return rates;
            }
        },
        description: '[sheep, berry, farm] * 1.12, [twin-minaret-berry] * 1.15'
    },
    [GatheringRateModifierId.FERTILIZATION]: {
        id: GatheringRateModifierId.FERTILIZATION,
        apply: (rates, foodSource) => {
            if ([FoodSource.SHEEP, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
                return ({...rates, food: rates.food * 1.1});
            } else if (FoodSource.TWIN_MINARET_BERRY === foodSource) {
                return ({...rates, food: rates.food * 1.1304});
            } else {
                return rates;
            }
        },
        description: '[sheep, berry, farm] * 1.1, [twin-minaret-berry] * 1.13'
    },
    [GatheringRateModifierId.CROSS_BREEDING]: {
        id: GatheringRateModifierId.CROSS_BREEDING,
        apply: (rates, foodSource) => {
            if ([FoodSource.SHEEP, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
                return ({...rates, food: rates.food * 1.1});
            } else if (FoodSource.TWIN_MINARET_BERRY === foodSource) {
                return ({...rates, food: rates.food * 1.1154});
            } else {
                return rates;
            }
        },
        description: '[sheep, berry, farm] * 1.1, [twin-minaret-berry] * 1.1154'
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
