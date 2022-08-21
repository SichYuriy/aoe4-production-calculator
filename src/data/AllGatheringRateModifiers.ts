import GatheringRateModifier from "../model/GatheringRateModifier";
import FoodSource from "../model/FoodSource";

export enum GATHERING_RATE_MODIFIERS_ID {
    WHEELBARROW = 'WHEELBARROW',
    DOUBLE_BROADAX = 'DOUBLE_BROADAX',
    LUMBER_PRESERVATION = 'LUMBER_PRESERVATION',
    CROSSCUT_SAW = 'CROSSCUT_SAW',
    HORTICULTURE = 'HORTICULTURE',
    FERTILIZATION = 'FERTILIZATION',
    CROSS_BREEDING = 'CROSS_BREEDING',
    SPECIALIZED_PICK = 'SPECIALIZED_PICK',
    ACID_DISTILLATION = 'ACID_DISTILLATION',
    CUPELLATION = 'CUPELLATION',
    FORESTRY = 'FORESTRY'
}

const GATHERING_RATES_MODIFIERS: { [key: string]: GatheringRateModifier } = {
    [GATHERING_RATE_MODIFIERS_ID.WHEELBARROW]: {
        id: GATHERING_RATE_MODIFIERS_ID.WHEELBARROW,
        apply: (rates, foodSource) => {
            let foodMultiplier = [FoodSource.BERRY, FoodSource.DEER].includes(foodSource) ? 1.0952 : 1.01;
            return {
                food: rates.food * foodMultiplier,
                wood: rates.wood * 1.07,
                gold: rates.gold * 1.07,
                stone: rates.stone * 1.07
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.DOUBLE_BROADAX]: {
        id: GATHERING_RATE_MODIFIERS_ID.DOUBLE_BROADAX,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.1
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.LUMBER_PRESERVATION]: {
        id: GATHERING_RATE_MODIFIERS_ID.LUMBER_PRESERVATION,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.09
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.CROSSCUT_SAW]: {
        id: GATHERING_RATE_MODIFIERS_ID.CROSSCUT_SAW,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.08
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.HORTICULTURE]: {
        id: GATHERING_RATE_MODIFIERS_ID.HORTICULTURE,
        apply: rates => {
            return {
                ...rates,
                food: rates.food * 1.12
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.FERTILIZATION]: {
        id: GATHERING_RATE_MODIFIERS_ID.FERTILIZATION,
        apply: rates => {
            return {
                ...rates,
                food: rates.food * 1.1
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.CROSS_BREEDING]: {
        id: GATHERING_RATE_MODIFIERS_ID.CROSS_BREEDING,
        apply: rates => {
            return {
                ...rates,
                food: rates.food * 1.1
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.SPECIALIZED_PICK]: {
        id: GATHERING_RATE_MODIFIERS_ID.SPECIALIZED_PICK,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * 1.12,
                stone: rates.stone * 1.12,
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.ACID_DISTILLATION]: {
        id: GATHERING_RATE_MODIFIERS_ID.ACID_DISTILLATION,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * 1.11,
                stone: rates.stone * 1.11,
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.CUPELLATION]: {
        id: GATHERING_RATE_MODIFIERS_ID.CUPELLATION,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * 1.1,
                stone: rates.stone * 1.1,
            };
        }
    },
    [GATHERING_RATE_MODIFIERS_ID.FORESTRY]: {
        id: GATHERING_RATE_MODIFIERS_ID.FORESTRY,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * 1.04
            };
        }
    }
}

export default GATHERING_RATES_MODIFIERS;
