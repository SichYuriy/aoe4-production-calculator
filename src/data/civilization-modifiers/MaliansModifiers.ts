import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";

let mansaQueryGold: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MANSA_QUERY_GOLD,
    food: 0,
    gold: 75,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.MANSA_QUERY_GOLD,
};

let mansaQueryStone: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MANSA_QUERY_STONE,
    food: 0,
    gold: 0,
    wood: 0,
    stone: 75,
    source: PassiveIncomeSource.MANSA_QUERY_STONE,
};

let pitMine: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.PIT_MINE,
    food: 0,
    gold: 35,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.PIT_MINE,
};

let pitMineHouse: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.PIT_MINE_HOUSE,
    food: 0,
    gold: 7.5,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.PIT_MINE_HOUSE,
};

let pitMineMiningCamp: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.PIT_MINE_MINING_CAMP,
    food: 0,
    gold: 7.5,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.PIT_MINE_MINING_CAMP,
};

let cattleRanchCattle: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.CATTLE_RANCH_CATTLE,
    food: 28,
    gold: 0,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.CATTLE_RANCH_CATTLE,
}

let fulaniCarrolCattle: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.FULANI_CARROL_CATTLE,
    food: 20,
    gold: 0,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.FULANI_CARROL_CATTLE,
}

let PASSIVE_INCOME_SOURCES = [
    PassiveIncomeSource.MANSA_QUERY_GOLD,
    PassiveIncomeSource.MANSA_QUERY_STONE,
    PassiveIncomeSource.PIT_MINE,
    PassiveIncomeSource.PIT_MINE_HOUSE,
    PassiveIncomeSource.PIT_MINE_MINING_CAMP,
    PassiveIncomeSource.CATTLE_RANCH_CATTLE,
    PassiveIncomeSource.FULANI_CARROL_CATTLE,
]

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.MANSA_QUERY_GOLD]: mansaQueryGold,
    [PassiveIncomeModifierId.MANSA_QUERY_STONE]: mansaQueryStone,
    [PassiveIncomeModifierId.PIT_MINE]: pitMine,
    [PassiveIncomeModifierId.PIT_MINE_HOUSE]: pitMineHouse,
    [PassiveIncomeModifierId.PIT_MINE_MINING_CAMP]: pitMineMiningCamp,
    [PassiveIncomeModifierId.CATTLE_RANCH_CATTLE]: cattleRanchCattle,
    [PassiveIncomeModifierId.FULANI_CARROL_CATTLE]: fulaniCarrolCattle,
}

const DEFAULT_PASSIVE_INCOME_MODIFIERS = [
    PassiveIncomeModifierId.MANSA_QUERY_GOLD,
    PassiveIncomeModifierId.MANSA_QUERY_STONE,
    PassiveIncomeModifierId.PIT_MINE,
    PassiveIncomeModifierId.PIT_MINE_HOUSE,
    PassiveIncomeModifierId.PIT_MINE_MINING_CAMP,
    PassiveIncomeModifierId.CATTLE_RANCH_CATTLE,
    PassiveIncomeModifierId.FULANI_CARROL_CATTLE
]

const MALIANS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.MALIANS,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: PASSIVE_INCOME_SOURCES,
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers: DEFAULT_PASSIVE_INCOME_MODIFIERS,
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {}
}

export default MALIANS_MODIFIERS;
