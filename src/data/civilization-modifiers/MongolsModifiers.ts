import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";
import {
    ACID_DISTILLATION_MULTIPLIER,
    CROSS_BREEDING_MULTIPLIER,
    CROSSCUT_SAW_MULTIPLIER, CUPELLATION_MULTIPLIER,
    DOUBLE_BROADAX_MULTIPLIER, FERTILIZATION_MULTIPLIER, HORTICULTURE_MULTIPLIER,
    LUMBER_PRESERVATION_MULTIPLIER, SPECIALIZED_PICK_MULTIPLIER
} from "../gathering-rate-modifiers/GatheringRateModifierId";
import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import ResourceDropOffModifierId from "../resource-drop-off-modifiers/ResourceDropOffModifierId";

const steppeRedoubt: GatheringRateModifier = {
    id: GatheringRateModifierId.STEPPE_REDOUBT,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.5
    }),
    description: 'gold * 1.5'
};

export const IMPROVED_DOUBLE_BROADAX_MULTIPLIER = (LUMBER_PRESERVATION_MULTIPLIER - 1) / 2 * 0.9 + 1;
export const IMPROVED_LUMBER_PRESERVATION_MULTIPLIER = (CROSSCUT_SAW_MULTIPLIER - 1) / 2 * 0.9 + 1;
export const IMPROVED_CROSSCUT_SAW_MULTIPLIER = (IMPROVED_LUMBER_PRESERVATION_MULTIPLIER - 1) * 0.9 + 1;
export const IMPROVED_HORTICULTURE_MULTIPLIER = (FERTILIZATION_MULTIPLIER - 1) / 2 * 0.9 + 1;
export const IMPROVED_FERTILIZATION_MULTIPLIER = (CROSS_BREEDING_MULTIPLIER - 1) / 2 * 0.9 + 1;
export const IMPROVED_CROSS_BREEDING_MULTIPLIER = (IMPROVED_FERTILIZATION_MULTIPLIER - 1) * 0.9 + 1;
export const IMPROVED_SPECIALIZED_PICK_MULTIPLIER = (ACID_DISTILLATION_MULTIPLIER - 1) / 2 * 0.9 + 1;
export const IMPROVED_ACID_DISTILLATION_MULTIPLIER = (CUPELLATION_MULTIPLIER - 1) / 2 * 0.9 + 1;

const improvedDoubleBroadax: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_DOUBLE_BROADAX,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.DOUBLE_BROADAX)
            ? IMPROVED_DOUBLE_BROADAX_MULTIPLIER
            : DOUBLE_BROADAX_MULTIPLIER * IMPROVED_DOUBLE_BROADAX_MULTIPLIER;
        return {
            ...rates,
            wood: rates.wood * multiplier
        };
    },
    description: `wood * ${IMPROVED_DOUBLE_BROADAX_MULTIPLIER.toFixed(2)}/${(IMPROVED_DOUBLE_BROADAX_MULTIPLIER * DOUBLE_BROADAX_MULTIPLIER).toFixed(2)}`
};

const improvedLumberPreservation: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_LUMBER_PRESERVATION,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.LUMBER_PRESERVATION)
            ? IMPROVED_LUMBER_PRESERVATION_MULTIPLIER
            : LUMBER_PRESERVATION_MULTIPLIER * IMPROVED_LUMBER_PRESERVATION_MULTIPLIER;
        return {
            ...rates,
            wood: rates.wood * multiplier
        };
    },
    description: `wood * ${IMPROVED_LUMBER_PRESERVATION_MULTIPLIER.toFixed(2)}/${(IMPROVED_LUMBER_PRESERVATION_MULTIPLIER * LUMBER_PRESERVATION_MULTIPLIER).toFixed(2)}`
};

const improvedCrosscutSaw: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_CROSSCUT_SAW,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.CROSSCUT_SAW)
            ? IMPROVED_CROSSCUT_SAW_MULTIPLIER
            : CROSSCUT_SAW_MULTIPLIER * IMPROVED_CROSSCUT_SAW_MULTIPLIER;
        return {
            ...rates,
            wood: rates.wood * multiplier
        };
    },
    description: `wood * ${IMPROVED_CROSSCUT_SAW_MULTIPLIER.toFixed(2)}/${(IMPROVED_CROSSCUT_SAW_MULTIPLIER * CROSSCUT_SAW_MULTIPLIER).toFixed(2)}`
};

const improvedHorticulture: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_HORTICULTURE,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.HORTICULTURE)
            ? IMPROVED_HORTICULTURE_MULTIPLIER
            : HORTICULTURE_MULTIPLIER * IMPROVED_HORTICULTURE_MULTIPLIER;
        if ([FoodSource.SHEEP, FoodSource.CATTLE, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
            return ({...rates, food: rates.food * multiplier});
        } else {
            return rates;
        }
    },
    description: `[sheep, berry, farm, cattle] * ${IMPROVED_HORTICULTURE_MULTIPLIER.toFixed(2)}/${(IMPROVED_HORTICULTURE_MULTIPLIER * HORTICULTURE_MULTIPLIER).toFixed(2)}`
};

const improvedFertilization: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_FERTILIZATION,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.FERTILIZATION)
            ? IMPROVED_FERTILIZATION_MULTIPLIER
            : FERTILIZATION_MULTIPLIER * IMPROVED_FERTILIZATION_MULTIPLIER;
        if ([FoodSource.SHEEP, FoodSource.BERRY, FoodSource.FARM, FoodSource.CATTLE].includes(foodSource)) {
            return ({...rates, food: rates.food * multiplier});
        } else {
            return rates;
        }
    },
    description: `[sheep, berry, farm, cattle] * ${IMPROVED_FERTILIZATION_MULTIPLIER.toFixed(2)}/${(IMPROVED_FERTILIZATION_MULTIPLIER * FERTILIZATION_MULTIPLIER).toFixed(2)}`
};

const improvedCrossBreeding: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_CROSS_BREEDING,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.CROSS_BREEDING)
            ? IMPROVED_CROSS_BREEDING_MULTIPLIER
            : CROSS_BREEDING_MULTIPLIER * IMPROVED_CROSS_BREEDING_MULTIPLIER;
        if ([FoodSource.SHEEP, FoodSource.CATTLE, FoodSource.BERRY, FoodSource.FARM].includes(foodSource)) {
            return ({...rates, food: rates.food * multiplier});
        } else {
            return rates;
        }
    },
    description: `[sheep, berry, farm, cattle] * ${IMPROVED_CROSS_BREEDING_MULTIPLIER.toFixed(2)}/${(IMPROVED_CROSS_BREEDING_MULTIPLIER * CROSS_BREEDING_MULTIPLIER).toFixed(2)}`
};

const improvedSpecializedPick: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.SPECIALIZED_PICK)
            ? IMPROVED_SPECIALIZED_PICK_MULTIPLIER
            : SPECIALIZED_PICK_MULTIPLIER * IMPROVED_SPECIALIZED_PICK_MULTIPLIER;
        return {
            ...rates,
            gold: rates.gold * multiplier,
            stone: rates.stone * multiplier,
        };
    },
    description: `[gold, stone] * ${IMPROVED_SPECIALIZED_PICK_MULTIPLIER.toFixed(2)}/${(IMPROVED_SPECIALIZED_PICK_MULTIPLIER * SPECIALIZED_PICK_MULTIPLIER).toFixed(2)}`
};

const improvedAcidDistillation: GatheringRateModifier = {
    id: GatheringRateModifierId.IMPROVED_ACID_DISTILLATION,
    apply: (rates, foodSource, allSelectedModifiers) => {
        const multiplier = allSelectedModifiers.includes(GatheringRateModifierId.ACID_DISTILLATION)
            ? IMPROVED_ACID_DISTILLATION_MULTIPLIER
            : ACID_DISTILLATION_MULTIPLIER * IMPROVED_ACID_DISTILLATION_MULTIPLIER;
        return {
            ...rates,
            gold: rates.gold * multiplier,
            stone: rates.stone * multiplier,
        };
    },
    description: `[gold, stone] * ${IMPROVED_ACID_DISTILLATION_MULTIPLIER.toFixed(2)}/${(IMPROVED_ACID_DISTILLATION_MULTIPLIER * ACID_DISTILLATION_MULTIPLIER).toFixed(2)}`
};

const improvedCupellation: ResourceDropOffModifier = {
    id: ResourceDropOffModifierId.IMPROVED_CUPELLATION,
    getDropOffPercentage: allSelectedModifiers => {
        const dropOff = allSelectedModifiers.includes(ResourceDropOffModifierId.CUPELLATION)
            ? 7.5
            : 22.5;
        return {
            food: 0,
            gold: dropOff,
            wood: 0,
            stone: 0
        };
    }
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.STEPPE_REDOUBT]: steppeRedoubt,
    [GatheringRateModifierId.IMPROVED_DOUBLE_BROADAX]: improvedDoubleBroadax,
    [GatheringRateModifierId.IMPROVED_LUMBER_PRESERVATION]: improvedLumberPreservation,
    [GatheringRateModifierId.IMPROVED_CROSSCUT_SAW]: improvedCrosscutSaw,
    [GatheringRateModifierId.IMPROVED_HORTICULTURE]: improvedHorticulture,
    [GatheringRateModifierId.IMPROVED_FERTILIZATION]: improvedFertilization,
    [GatheringRateModifierId.IMPROVED_CROSS_BREEDING]: improvedCrossBreeding,
    [GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK]: improvedSpecializedPick,
    [GatheringRateModifierId.IMPROVED_ACID_DISTILLATION]: improvedAcidDistillation,
}

const RESOURCE_DROP_OFF_MODIFIERS = {
    [ResourceDropOffModifierId.IMPROVED_CUPELLATION]: improvedCupellation
}

const MONGOLS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.MONGOLS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: RESOURCE_DROP_OFF_MODIFIERS
}

export default MONGOLS_MODIFIERS;
