import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import ResourceDropOffModifierId from "../resource-drop-off-modifiers/ResourceDropOffModifierId";
import ResourcesAmount from "../../model/ResourcesAmount";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRates from "../../model/GatheringRates";

const eco0ResourceDropOff: ResourceDropOffModifier = {
    id: ResourceDropOffModifierId.TUGHLAQ_ECO_0,
    getDropOffPercentage: () => ResourcesAmount.of(5, 5, 5, 5)
}

const eco1ResourceDropOff: ResourceDropOffModifier = {
    ...eco0ResourceDropOff,
    id: ResourceDropOffModifierId.TUGHLAQ_ECO_1,
}

const eco2ResourceDropOff: ResourceDropOffModifier = {
    ...eco0ResourceDropOff,
    id: ResourceDropOffModifierId.TUGHLAQ_ECO_2,
}

const eco3ResourceDropOff: ResourceDropOffModifier = {
    ...eco0ResourceDropOff,
    id: ResourceDropOffModifierId.TUGHLAQ_ECO_3,
}

const eco1GatheringRate: GatheringRateModifier = {
    id: GatheringRateModifierId.TUGHLAQ_ECO_1,
    apply: (gatheringRates: GatheringRates) => ({
        food: gatheringRates.food * 1.0385,
        wood: gatheringRates.wood * 1.032,
        gold: gatheringRates.gold * 1.0385,
        stone: gatheringRates.stone * 1.0385
    }),
    description: "food * 1.04, wood * 1.03, gold * 1.04, stone * 1.04"
}

const eco2GatheringRate: GatheringRateModifier = {
    ...eco1GatheringRate,
    id: GatheringRateModifierId.TUGHLAQ_ECO_2,
}

const eco3GatheringRate: GatheringRateModifier = {
    ...eco1GatheringRate,
    id: GatheringRateModifierId.TUGHLAQ_ECO_3,
}


const TUGHLAQ_DYNASTY_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.TUGHLAQ_DYNASTY,
    allGatheringRateModifiers: {
        [GatheringRateModifierId.TUGHLAQ_ECO_1]: eco1GatheringRate,
        [GatheringRateModifierId.TUGHLAQ_ECO_2]: eco2GatheringRate,
        [GatheringRateModifierId.TUGHLAQ_ECO_3]: eco3GatheringRate,
    },
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
    allResourceDropOffModifiers: {
        [ResourceDropOffModifierId.TUGHLAQ_ECO_0]: eco0ResourceDropOff,
        [ResourceDropOffModifierId.TUGHLAQ_ECO_1]: eco1ResourceDropOff,
        [ResourceDropOffModifierId.TUGHLAQ_ECO_2]: eco2ResourceDropOff,
        [ResourceDropOffModifierId.TUGHLAQ_ECO_3]: eco3ResourceDropOff,
    },
    defaultResourceDropOffModifiers: [ResourceDropOffModifierId.TUGHLAQ_ECO_0]
}

export default TUGHLAQ_DYNASTY_MODIFIERS;
