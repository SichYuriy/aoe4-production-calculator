import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";
import GatheringRateModifierId, {
    ACID_DISTILLATION_MULTIPLIER,
    CROSS_BREEDING_MULTIPLIER,
    CROSSCUT_SAW_MULTIPLIER,
    DOUBLE_BROADAX_MULTIPLIER, FERTILIZATION_MULTIPLIER, HORTICULTURE_MULTIPLIER,
    LUMBER_PRESERVATION_MULTIPLIER, SPECIALIZED_PICK_MULTIPLIER
} from "./GatheringRateModifierId";
import allCivilizationModifiers from "../civilization-modifiers/AllCivilizationModifiersRegistry";

const GATHERING_RATES_MODIFIERS: { [key: string]: GatheringRateModifier } = {
    [GatheringRateModifierId.WHEELBARROW]: {
        id: GatheringRateModifierId.WHEELBARROW,
        apply: (rates, foodSource, allSelectedModifiers) => {
            let foodMultiplier = 1;
            if ([FoodSource.BERRY, FoodSource.DEER].includes(foodSource)) {
                foodMultiplier = 1.0952;
            } else if ([FoodSource.SHEEP, FoodSource.CATTLE].includes(foodSource)) {
                foodMultiplier = 1.03;
            } else if ([FoodSource.FARM].includes(foodSource)) {
                foodMultiplier = 1.032
            }
            let woodMultiplier = allSelectedModifiers.includes(GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE) ? 1 : 1.07;
            return {
                food: rates.food * foodMultiplier,
                wood: rates.wood * woodMultiplier,
                gold: rates.gold * 1.07,
                stone: rates.stone * 1.07
            };
        },
        description: '[berries, deer] * 1.0952, [sheep, cattle] * 1.03, [farm] * 1.032, [wood, gold, stone] * 1.07'
    },
    [GatheringRateModifierId.DOUBLE_BROADAX]: {
        id: GatheringRateModifierId.DOUBLE_BROADAX,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * DOUBLE_BROADAX_MULTIPLIER
            };
        },
        description: 'wood * ' + DOUBLE_BROADAX_MULTIPLIER.toFixed(2)
    },
    [GatheringRateModifierId.LUMBER_PRESERVATION]: {
        id: GatheringRateModifierId.LUMBER_PRESERVATION,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * LUMBER_PRESERVATION_MULTIPLIER
            };
        },
        description: 'wood * ' + LUMBER_PRESERVATION_MULTIPLIER.toFixed(2)
    },
    [GatheringRateModifierId.CROSSCUT_SAW]: {
        id: GatheringRateModifierId.CROSSCUT_SAW,
        apply: rates => {
            return {
                ...rates,
                wood: rates.wood * CROSSCUT_SAW_MULTIPLIER
            };
        },
        description: 'wood * ' + CROSSCUT_SAW_MULTIPLIER.toFixed(2)
    },
    [GatheringRateModifierId.HORTICULTURE]: {
        id: GatheringRateModifierId.HORTICULTURE,
        apply: (rates, foodSource) => {
            if ([FoodSource.SHEEP, FoodSource.CATTLE, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
                return ({...rates, food: rates.food * HORTICULTURE_MULTIPLIER});
            } else if (FoodSource.TWIN_MINARET_BERRY === foodSource) {
                return ({...rates, food: rates.food * 1.10});
            } else {
                return rates;
            }
        },
        description: `[sheep, berry, farm, cattle] * ${HORTICULTURE_MULTIPLIER.toFixed(2)}, [twin-minaret-berry] * 1.10`
    },
    [GatheringRateModifierId.FERTILIZATION]: {
        id: GatheringRateModifierId.FERTILIZATION,
        apply: (rates, foodSource) => {
            if ([FoodSource.SHEEP, FoodSource.BERRY, FoodSource.FARM, FoodSource.CATTLE].includes(foodSource)) {
                return ({...rates, food: rates.food * FERTILIZATION_MULTIPLIER});
            } else if (FoodSource.TWIN_MINARET_BERRY === foodSource) {
                return ({...rates, food: rates.food * 1.0935});
            } else {
                return rates;
            }
        },
        description: `[sheep, berry, farm, cattle] * ${FERTILIZATION_MULTIPLIER.toFixed(2)}, [twin-minaret-berry] * 1.0935`
    },
    [GatheringRateModifierId.CROSS_BREEDING]: {
        id: GatheringRateModifierId.CROSS_BREEDING,
        apply: (rates, foodSource) => {
            if ([FoodSource.SHEEP, FoodSource.CATTLE, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
                return ({...rates, food: rates.food * CROSS_BREEDING_MULTIPLIER});
            } else if (FoodSource.TWIN_MINARET_BERRY === foodSource) {
                return ({...rates, food: rates.food * 1.0869});
            } else {
                return rates;
            }
        },
        description: `[sheep, berry, farm, cattle] * ${CROSS_BREEDING_MULTIPLIER.toFixed(2)}, [twin-minaret-berry] * 1.0869`
    },
    [GatheringRateModifierId.SPECIALIZED_PICK]: {
        id: GatheringRateModifierId.SPECIALIZED_PICK,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * SPECIALIZED_PICK_MULTIPLIER,
                stone: rates.stone * SPECIALIZED_PICK_MULTIPLIER,
            };
        },
        description: `[gold, stone] * ${SPECIALIZED_PICK_MULTIPLIER.toFixed(2)}`
    },
    [GatheringRateModifierId.ACID_DISTILLATION]: {
        id: GatheringRateModifierId.ACID_DISTILLATION,
        apply: rates => {
            return {
                ...rates,
                gold: rates.gold * ACID_DISTILLATION_MULTIPLIER,
                stone: rates.stone * ACID_DISTILLATION_MULTIPLIER,
            };
        },
        description: `[gold, stone] * ${ACID_DISTILLATION_MULTIPLIER}`
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
