import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";

const bounty100: GatheringRateModifier = {
    id: GatheringRateModifierId.BOUNTY_100,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.03
    })
}

const bounty250: GatheringRateModifier = {
    id: GatheringRateModifierId.BOUNTY_250,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.07
    })
}

const bounty500: GatheringRateModifier = {
    id: GatheringRateModifierId.BOUNTY_500,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.11
    })
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.BOUNTY_100]: bounty100,
    [GatheringRateModifierId.BOUNTY_250]: bounty250,
    [GatheringRateModifierId.BOUNTY_500]: bounty500,
}

const RUS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.RUS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: []
}

export default RUS_MODIFIERS;
