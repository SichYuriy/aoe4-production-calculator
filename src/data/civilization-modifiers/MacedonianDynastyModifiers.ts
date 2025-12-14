import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";

const grandWinery: GatheringRateModifier = {
    id: GatheringRateModifierId.MACEDONIAN_DYNASTY_GRAND_WINERY,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.23
    }),
    description: 'food * 1.23'
}

const MACEDONIAN_DYNASTY_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.MACEDONIAN_DYNASTY,
    allGatheringRateModifiers: {
        [GatheringRateModifierId.MACEDONIAN_DYNASTY_GRAND_WINERY]: grandWinery
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
    allResourceDropOffModifiers: {}
}

export default MACEDONIAN_DYNASTY_MODIFIERS;
