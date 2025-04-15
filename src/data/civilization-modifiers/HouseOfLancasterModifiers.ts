import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";

const sheepGatheringRateBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.HOUSE_OF_LANCASTER_SHEEP,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.SHEEP
        ? ({...gatheringRates, food: gatheringRates.food * 1.2})
        : gatheringRates,
    description: 'sheep * 1.2'
};

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.HOUSE_OF_LANCASTER_SHEEP]: sheepGatheringRateBonus,
}

const HOUSE_OF_LANCASTER_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.HOUSE_OF_LANCASTER,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.HOUSE_OF_LANCASTER_SHEEP],
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
    allResourceDropOffModifiers: {}
}

export default HOUSE_OF_LANCASTER_MODIFIERS;