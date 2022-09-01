import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import {muslimBerries} from "./MuslimModifiers";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";

const tradersDiscount: UnitCostModifier = {
    id: CostModifierId.ABBASID_TRADER_DISCOUNT,
    canBeApplied: unit => unit.id === 'TRADER',
    apply: currentCost => ({
        food: currentCost.food * 0.67,
        wood: currentCost.wood * 0.67,
        gold: currentCost.gold * 0.67,
        stone: currentCost.stone * 0.67,
    })
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.MUSLIM_BERRIES]: muslimBerries
}

const COST_MODIFIERS = {
    [CostModifierId.ABBASID_TRADER_DISCOUNT]: tradersDiscount
}

const ABBASID_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.ABBASID,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.MUSLIM_BERRIES],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.ABBASID_TRADER_DISCOUNT]
}

export default ABBASID_MODIFIERS;
