import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";

const dragonVillagers: GatheringRateModifier = {
    id: GatheringRateModifierId.DRAGON_VILLAGER,
    apply: (rates, foodSource) => {
        let foodMultiplier = 1;
        if ([FoodSource.BERRY, FoodSource.DEER].includes(foodSource)) {
            foodMultiplier = 1.045;
        } else if ([FoodSource.SHEEP, FoodSource.FARM].includes(foodSource)) {
            foodMultiplier = 1.015;
        }

        return {
            food: rates.food * (foodMultiplier + 0.2),
            wood: rates.wood * (1.035 + 0.17),
            gold: rates.gold * (1.035 + 0.2),
            stone: rates.stone * (1.035 + 0.2)
        };
    },
    description: '[berries, deer] * 1.245, [sheep, farm] * 1.215, [wood] * 1.205, [gold, stone] * 1.235'
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.DRAGON_VILLAGER]: dragonVillagers
}

const DRAGON_ORDER_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.DRAGON_ORDER,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.DRAGON_VILLAGER],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default DRAGON_ORDER_MODIFIERS;