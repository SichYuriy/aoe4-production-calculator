import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId, {RELIC_INCOME} from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";

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
            food: rates.food * (foodMultiplier + 0.21),
            wood: rates.wood * (1.035 + 0.18),
            gold: rates.gold * (1.035 + 0.21),
            stone: rates.stone * (1.035 + 0.21)
        };
    },
    description: '[berries, deer] * 1.255, [sheep, farm] * 1.225, [wood] * 1.215, [gold, stone] * 1.245'
}

const regnitzCathedral: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.REGNITZ_CATHEDRAL,
    food: 0,
    gold: RELIC_INCOME,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.RELICS,
};

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.REGNITZ_CATHEDRAL]: regnitzCathedral
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
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default DRAGON_ORDER_MODIFIERS;