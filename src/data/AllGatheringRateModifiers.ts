import GatheringRateModifier from "../model/GatheringRateModifier";
import FoodSource from "../model/FoodSource";

export enum GATHERING_RATE_MODIFIERS_ID {
    WHEELBARROW = 'WHEELBARROW',
    DOUBLE_BROADAX = 'DOUBLE_BROADAX',
    LUMBER_PRESERVATION = 'LUMBER_PRESERVATION',
    CROSSCUT_SAW = 'CROSSCUT_SAW'
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
    }
}

export default GATHERING_RATES_MODIFIERS;
