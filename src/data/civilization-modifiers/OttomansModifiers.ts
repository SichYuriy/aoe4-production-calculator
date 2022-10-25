import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";

let anatolianHills: GatheringRateModifier = {
    id: GatheringRateModifierId.ANATOLIAN_HILLS,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.067,
        stone: gatheringRates.stone * 1.067,
    }),
    description: '[gold, stone] * 1.067'
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.ANATOLIAN_HILLS]: anatolianHills
}

const OTTOMANS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.OTTOMANS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: []
}

export default OTTOMANS_MODIFIERS;
