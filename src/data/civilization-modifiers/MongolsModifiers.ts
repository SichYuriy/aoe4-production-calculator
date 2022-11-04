import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";

const silverTreeProductionSpeed: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.SILVER_TREE,
    canBeApplied: unit => unit.id === 'TRADER',
    apply: currentProductionTime => currentProductionTime * 0.5,
    description: 'traderTime * 0.5'
}

const silverTreeCost: UnitCostModifier = {
    id: CostModifierId.SILVER_TREE,
    canBeApplied: unit => unit.id === 'TRADER',
    apply: currentCost => ({
        ...currentCost,
        gold: currentCost.gold * 0.5
    }),
    description: 'traderCost.gold * 0.5'
}

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

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.SILVER_TREE]: silverTreeProductionSpeed
};

const COST_MODIFIERS = {
    [CostModifierId.SILVER_TREE]: silverTreeCost
}

const MONGOLS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.MONGOLS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [],
    allPassiveIncomeModifiers: {},
    allLimitedFoodGatheringSourceModifiers: {}
}

export default MONGOLS_MODIFIERS;
