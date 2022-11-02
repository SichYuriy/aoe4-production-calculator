import GatheringRateModifier from "./GatheringRateModifier";
import ProductionSpeedModifier from "./ProductionSpeedModifier";
import ProductionSpeedModifierId from "../data/production-speed-modifiers/ProductionSpeedModifierId";
import UnitCostModifier from "./UnitCostModifier";
import CostModifierId from "../data/cost-modifiers/CostModifierId";
import CivilizationsEnum from "../data/CivilizationsEnum";
import GatheringRateModifierId from "../data/gathering-rate-modifiers/GatheringRateModifierId";
import PassiveIncomeModifier from "./PassiveIncomeModifier";

interface CivilizationModifiers {
    civilization: CivilizationsEnum,
    allGatheringRateModifiers: { [key: string]: GatheringRateModifier },
    defaultGatheringRateModifiers: GatheringRateModifierId[],
    allProductionSpeedModifiers: { [key: string]: ProductionSpeedModifier },
    defaultProductionSpeedModifiers: ProductionSpeedModifierId[],
    allCostModifiers: { [key: string]: UnitCostModifier }
    defaultCostModifiers: CostModifierId[],
    allPassiveIncomeModifiers: { [key: string]: PassiveIncomeModifier }
}

export default CivilizationModifiers;
