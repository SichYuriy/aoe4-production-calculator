import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId, {
    DOUBLE_BROADAX_MULTIPLIER,
    HORTICULTURE_MULTIPLIER,
    SPECIALIZED_PICK_MULTIPLIER
} from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";
import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import ResourceDropOffModifierId from "../resource-drop-off-modifiers/ResourceDropOffModifierId";
import ResourcesAmount from "../../model/ResourcesAmount";

const steppeRedoubt: ResourceDropOffModifier = {
    id: ResourceDropOffModifierId.STEPPE_REDOUBT,
    getDropOffPercentage: () => ResourcesAmount.of(0, 0, 50, 0)
};

export const IMPROVED_DOUBLE_BROADAX_MULTIPLIER = 1.16; // 20%
export const IMPROVED_HORTICULTURE_MULTIPLIER = 1.16; // 20%
export const IMPROVED_SPECIALIZED_PICK_MULTIPLIER = 1.16; //20%

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

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.IMPROVED_DOUBLE_BROADAX]: improvedDoubleBroadax,
    [GatheringRateModifierId.IMPROVED_HORTICULTURE]: improvedHorticulture,
    [GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK]: improvedSpecializedPick,
}

const RESOURCE_DROP_OFF_MODIFIERS = {
    [ResourceDropOffModifierId.STEPPE_REDOUBT]: steppeRedoubt
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
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: RESOURCE_DROP_OFF_MODIFIERS
}

export default MONGOLS_MODIFIERS;
