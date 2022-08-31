import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "../cost-modifiers/CostModifierId";

const silverTreeProductionSpeed: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.SILVER_TREE,
    canBeApplied: unit => unit.id === 'TRADER',
    apply: currentProductionTime => currentProductionTime * 0.5
}

const silverTreeCost: UnitCostModifier = {
    id: CostModifierId.SILVER_TREE,
    canBeApplied: unit => unit.id === 'TRADER',
    apply: currentCost => ({
        ...currentCost,
        gold: currentCost.gold * 0.5
    })
}

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.SILVER_TREE]: silverTreeProductionSpeed
};

const COST_MODIFIERS = {
    [CostModifierId.SILVER_TREE]: silverTreeCost
}

const MONGOLS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.MONGOLS,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: []
}

export default MONGOLS_MODIFIERS;
