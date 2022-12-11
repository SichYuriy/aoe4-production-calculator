import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";

const steppeRedoubt: GatheringRateModifier = {
    id: GatheringRateModifierId.STEPPE_REDOUBT,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.5
    }),
    description: 'gold * 1.5'
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.STEPPE_REDOUBT]: steppeRedoubt
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
    allPassiveGoldFromFoodVillagerModifiers: {}
}

export default MONGOLS_MODIFIERS;
