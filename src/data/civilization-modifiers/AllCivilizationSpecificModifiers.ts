import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import CostModifierId from "../cost-modifiers/CostModifierId";
import allCivilizationModifiers from "./AllCivilizationModifiersRegistry";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";

export const GATHERING_RATE_MODIFIERS_DEFAULT: {[key:string]: GatheringRateModifierId[]} = {};
export const ALL_CIVILIZATIONS_GATHERING_RATE_MODIFIERS: GatheringRateModifierId[] = [];
export const PRODUCTION_SPEED_MODIFIERS_DEFAULT: {[key:string]: ProductionSpeedModifierId[]} = {};
export const ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS: ProductionSpeedModifierId[] = [];
export const COST_MODIFIERS_DEFAULT: {[key:string]: CostModifierId[]} = {};
export const ALL_CIVILIZATIONS_COST_MODIFIERS: CostModifierId[] = [];
export const ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS: PassiveIncomeModifierId[] = [];

allCivilizationModifiers.forEach(civilizationModifiers => {
    GATHERING_RATE_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultGatheringRateModifiers;
    // @ts-ignore
    ALL_CIVILIZATIONS_GATHERING_RATE_MODIFIERS.push(...Object.keys(civilizationModifiers.allGatheringRateModifiers));

    PRODUCTION_SPEED_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultProductionSpeedModifiers;
    // @ts-ignore
    ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS.push(...Object.keys(civilizationModifiers.allProductionSpeedModifiers));

    COST_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultCostModifiers;
    // @ts-ignore
    ALL_CIVILIZATIONS_COST_MODIFIERS.push(...Object.keys(civilizationModifiers.allCostModifiers));

    // @ts-ignore
    ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS.push(...Object.keys(civilizationModifiers.allPassiveIncomeModifiers));
})
