import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import CostModifierId from "../cost-modifiers/CostModifierId";
import allCivilizationModifiers from "./AllCivilizationModifiersRegistry";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeFromGatheringVillagerModifierId
    from "../passive-income-from-gathering-vilager-modifiers/PassiveIncomeFromGatheringVillagerModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import ResourceDropOffModifierId from "../resource-drop-off-modifiers/ResourceDropOffModifierId";

export const GATHERING_RATE_MODIFIERS_DEFAULT: { [key: string]: GatheringRateModifierId[] } = {};
export const DISABLED_GATHERING_RATE_MODIFIERS: { [key: string]: GatheringRateModifierId[] } = {};
export const ALL_CIVILIZATIONS_GATHERING_RATE_MODIFIERS: GatheringRateModifierId[] = [];
export const PRODUCTION_SPEED_MODIFIERS_DEFAULT: { [key: string]: ProductionSpeedModifierId[] } = {};
export const ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS: ProductionSpeedModifierId[] = [];
export const COST_MODIFIERS_DEFAULT: { [key: string]: CostModifierId[] } = {};
export const ALL_CIVILIZATIONS_COST_MODIFIERS: CostModifierId[] = [];
export const ALL_CIVILIZATIONS_PASSIVE_INCOME_SOURCES: PassiveIncomeSource[] = [];
export const ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS: PassiveIncomeModifierId[] = [];
export const PASSIVE_INCOME_MODIFIERS_DEFAULT: { [key: string]: PassiveIncomeModifierId[]} = {};
export const ALL_CIVILIZATIONS_LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS: PassiveIncomeModifierId[] = [];
export const ALL_CIVILIZATIONS_PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS: PassiveIncomeFromGatheringVillagerModifierId[] = [];
export const ALL_CIVILIZATIONS_RESOURCE_DROP_OFF_MODIFIERS: ResourceDropOffModifierId[] = [];

allCivilizationModifiers.forEach(civilizationModifiers => {
    GATHERING_RATE_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultGatheringRateModifiers;
    DISABLED_GATHERING_RATE_MODIFIERS[civilizationModifiers.civilization] = civilizationModifiers.disabledGatheringRateModifiers || [];
    // @ts-ignore
    ALL_CIVILIZATIONS_GATHERING_RATE_MODIFIERS.push(...Object.keys(civilizationModifiers.allGatheringRateModifiers));

    PRODUCTION_SPEED_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultProductionSpeedModifiers;
    // @ts-ignore
    ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS.push(...Object.keys(civilizationModifiers.allProductionSpeedModifiers));

    COST_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultCostModifiers;
    // @ts-ignore
    ALL_CIVILIZATIONS_COST_MODIFIERS.push(...Object.keys(civilizationModifiers.allCostModifiers));

    ALL_CIVILIZATIONS_PASSIVE_INCOME_SOURCES.push(...civilizationModifiers.passiveIncomeSources);

    PASSIVE_INCOME_MODIFIERS_DEFAULT[civilizationModifiers.civilization] = civilizationModifiers.defaultPassiveIncomeModifiers;
    // @ts-ignore
    ALL_CIVILIZATIONS_PASSIVE_INCOME_MODIFIERS.push(...Object.keys(civilizationModifiers.allPassiveIncomeModifiers));

    // @ts-ignore
    ALL_CIVILIZATIONS_LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS.push(...Object.keys(civilizationModifiers.allLimitedFoodGatheringSourceModifiers));

    // @ts-ignore
    ALL_CIVILIZATIONS_PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS.push(...Object.keys(civilizationModifiers.allPassiveIncomeFromGatheringVillagerModifiers));

    // @ts-ignore
    ALL_CIVILIZATIONS_RESOURCE_DROP_OFF_MODIFIERS.push(...Object.keys(civilizationModifiers.allResourceDropOffModifiers));
})
