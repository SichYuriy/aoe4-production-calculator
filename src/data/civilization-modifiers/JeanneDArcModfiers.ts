import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {schoolOfCavalry} from "./FrenchModifiers";

const PRODUCTION_SPEED_MODIFIERS: {[key:string]: ProductionSpeedModifier} = {
    [ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]: schoolOfCavalry
}

const JEANNE_D_ARC_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.JEANNE_D_ARC,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {}
}

export default JEANNE_D_ARC_MODIFIERS;