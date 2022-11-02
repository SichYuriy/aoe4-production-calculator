import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";

let anatolianHills: GatheringRateModifier = {
    id: GatheringRateModifierId.ANATOLIAN_HILLS,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.067,
        stone: gatheringRates.stone * 1.067,
    }),
    description: '[gold, stone] * 1.067'
}

let sultanhaniTradeNetwork: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK,
    food: 0,
    gold: 28,
    wood: 0,
    stone: 0,
    maxCount: 6
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.ANATOLIAN_HILLS]: anatolianHills
}

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK]: sultanhaniTradeNetwork
}

const OTTOMANS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.OTTOMANS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS
}

export default OTTOMANS_MODIFIERS;
