import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import CostModifierId from "../cost-modifiers/CostModifierId";
import {englishDocks} from "./EnglishModifiers";

const sheepGatheringRateBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.HOUSE_OF_LANCASTER_SHEEP,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.SHEEP
        ? ({...gatheringRates, food: gatheringRates.food * 1.2})
        : gatheringRates,
    description: 'sheep * 1.2'
};

const manor: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MANOR,
    food: 60,
    gold: 0,
    wood: 45,
    stone: 0,
    source: PassiveIncomeSource.MANOR
}

const scutage: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.SCUTAGE,
    food: 0,
    gold: 40,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.MANOR
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.HOUSE_OF_LANCASTER_SHEEP]: sheepGatheringRateBonus,
}

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.MANOR]: manor,
    [PassiveIncomeModifierId.SCUTAGE]: scutage
}

const COST_MODIFIERS = {
    [CostModifierId.ENGLISH_DOCKS]: englishDocks
}

const HOUSE_OF_LANCASTER_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.HOUSE_OF_LANCASTER,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.HOUSE_OF_LANCASTER_SHEEP],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.ENGLISH_DOCKS],
    passiveIncomeSources: [PassiveIncomeSource.MANOR],
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers: [PassiveIncomeModifierId.MANOR],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default HOUSE_OF_LANCASTER_MODIFIERS;