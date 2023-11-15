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
import PassiveIncomeModifierId from "../data/passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../data/passive-income-modifiers/PassiveIncomeSource";
import CostModifierPerUnit from "./CostModifierPerUnit";

interface CivilizationModifiers {
    civilization: CivilizationsEnum,
    allGatheringRateModifiers: { [key: string]: GatheringRateModifier },
    defaultGatheringRateModifiers: GatheringRateModifierId[],
    allProductionSpeedModifiers: { [key: string]: ProductionSpeedModifier },
    defaultProductionSpeedModifiers: ProductionSpeedModifierId[],
    allCostModifiers: { [key: string]: UnitCostModifier }
    defaultCostModifiers: CostModifierId[],
    passiveIncomeSources: PassiveIncomeSource[],
    allPassiveIncomeModifiers: { [key: string]: PassiveIncomeModifier },
    defaultPassiveIncomeModifiers: PassiveIncomeModifierId[]
    allLimitedFoodGatheringSourceModifiers: { [key: string]: LimitedFoodGatheringSourceModifier },
    allPassiveGoldFromFoodVillagerModifiers: { [key: string]: PassiveGoldFromFoodVillagerModifier },
    allCostModifiersPerUnit: { [key: string]: CostModifierPerUnit}
}

export default CivilizationModifiers;
