import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import ResourceDropOffModifierId from "../resource-drop-off-modifiers/ResourceDropOffModifierId";
import ResourceDropOffModifier from "../../model/ResourceDropOffModifier";
import ResourcesAmount from "../../model/ResourcesAmount";

const bounty100: GatheringRateModifier = {
    id: GatheringRateModifierId.BOUNTY_100,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.03
    }),
    description: 'food * 1.03'
}

const bounty250: GatheringRateModifier = {
    id: GatheringRateModifierId.BOUNTY_250,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.07
    }),
    description: 'food * 1.07'
}

const bounty500: GatheringRateModifier = {
    id: GatheringRateModifierId.BOUNTY_500,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.11
    }),
    description: 'food * 1.11'
}

const woodenFortress: ResourceDropOffModifier = {
    id: ResourceDropOffModifierId.WOODEN_FORTRESS,
    getDropOffPercentage: () => ResourcesAmount.of(0, 20, 0, 0)
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.BOUNTY_100]: bounty100,
    [GatheringRateModifierId.BOUNTY_250]: bounty250,
    [GatheringRateModifierId.BOUNTY_500]: bounty500,

}

const RESOURCE_DROP_OFF_MODIFIERS = {
    [ResourceDropOffModifierId.WOODEN_FORTRESS]: woodenFortress
}

const RUS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.RUS,
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

export default RUS_MODIFIERS;
