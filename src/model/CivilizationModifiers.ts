import GatheringRateModifier from "./GatheringRateModifier";
import ProductionSpeedModifier from "./ProductionSpeedModifier";
import ProductionSpeedModifierId from "../data/production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "./UnitCostModifier";
import CostModifierId from "../data/cost-modifiers/CostModifierId";
import CivilizationsEnum from "../data/CivilizationsEnum";
import GatheringRateModifierId from "../data/gathering-rate-modifiers/GatheringRateModifierId";
import PassiveIncomeModifier from "./PassiveIncomeModifier";
import LimitedFoodGatheringSourceModifier from "./LimitedFoodGatheringSourceModifier";
import PassiveGoldFromFoodVillagerModifier from "./PassiveGoldFromFoodVillagerModifier";

interface CivilizationModifiers {
    civilization: CivilizationsEnum,
    allGatheringRateModifiers: { [key: string]: GatheringRateModifier },
    defaultGatheringRateModifiers: GatheringRateModifierId[],
    allProductionSpeedModifiers: { [key: string]: ProductionSpeedModifier },
    defaultProductionSpeedModifiers: ProductionSpeedModifierId[],
    allCostModifiers: { [key: string]: UnitCostModifier }
    defaultCostModifiers: CostModifierId[],
    allPassiveIncomeModifiers: { [key: string]: PassiveIncomeModifier },
    allLimitedFoodGatheringSourceModifiers: { [key: string]: LimitedFoodGatheringSourceModifier },
    allPassiveGoldFromFoodVillagerModifiers: { [key: string]: PassiveGoldFromFoodVillagerModifier }
}

export default CivilizationModifiers;
