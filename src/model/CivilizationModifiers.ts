import GatheringRateModifier from "./GatheringRateModifier";
import ProductionSpeedModifier from "./ProductionSpeedModifier";
import ProductionSpeedModifierId from "../data/production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "./UnitCostModifier";
import CostModifierId from "../data/cost-modifiers/CostModifierId";
import CivilizationsEnum from "../data/CivilizationsEnum";
import GatheringRateModifierId from "../data/gathering-rate-modifiers/GatheringRateModifierId";
import PassiveIncomeModifier from "./PassiveIncomeModifier";
import LimitedFoodGatheringSourceModifier from "./LimitedFoodGatheringSourceModifier";
import PassiveIncomeFromGatheringVillagerModifier from "./PassiveIncomeFromGatheringVillagerModifier";
import PassiveIncomeModifierId from "../data/passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../data/passive-income-modifiers/PassiveIncomeSource";
import CostModifierPerUnit from "./CostModifierPerUnit";
import ResourceDropOffModifier from "./ResourceDropOffModifier";
import PassiveIncomeFromGatheringVillagerModifierId
    from "../data/passive-income-from-gathering-vilager-modifiers/PassiveIncomeFromGatheringVillagerModifierId";
import DynamicPassiveIncomeModifier from "./DynamicPassiveIncomeModifier";
import DynamicPassiveIncomeModifierId from "../data/dynamic-passive-income-modifiers/DynamicPassiveIncomeModifierId";

interface CivilizationModifiers {
    civilization: CivilizationsEnum,
    allGatheringRateModifiers: { [key: string]: GatheringRateModifier },
    defaultGatheringRateModifiers: GatheringRateModifierId[],
    disabledGatheringRateModifiers?: GatheringRateModifierId[],
    allProductionSpeedModifiers: { [key: string]: ProductionSpeedModifier },
    defaultProductionSpeedModifiers: ProductionSpeedModifierId[],
    allCostModifiers: { [key: string]: UnitCostModifier }
    defaultCostModifiers: CostModifierId[],
    passiveIncomeSources: PassiveIncomeSource[],
    allPassiveIncomeModifiers: { [key: string]: PassiveIncomeModifier },
    defaultPassiveIncomeModifiers: PassiveIncomeModifierId[],
    allDynamicPassiveIncomeModifiers?: { [key: string]: DynamicPassiveIncomeModifier },
    defaultDynamicPassiveIncomeModifiers?: DynamicPassiveIncomeModifierId[],
    allLimitedFoodGatheringSourceModifiers: { [key: string]: LimitedFoodGatheringSourceModifier },
    allPassiveIncomeFromGatheringVillagerModifiers: { [key: string]: PassiveIncomeFromGatheringVillagerModifier },
    defaultPassiveIncomeFromGatheringVillagerModifiers?: PassiveIncomeFromGatheringVillagerModifierId[],
    allCostModifiersPerUnit: { [key: string]: CostModifierPerUnit},
    allResourceDropOffModifiers: { [key: string]: ResourceDropOffModifier}
}

export default CivilizationModifiers;
