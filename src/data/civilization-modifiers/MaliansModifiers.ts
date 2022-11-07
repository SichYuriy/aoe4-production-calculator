import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";

let mansaQueryGold: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MANSA_QUERY_GOLD,
    food: 0,
    gold: 75,
    wood: 0,
    stone: 0,
    maxCount: 1
};

let mansaQueryStone: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.MANSA_QUERY_STONE,
    food: 0,
    gold: 0,
    wood: 0,
    stone: 75,
    maxCount: 1
};

let pitMine: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.PIT_MINE,
    food: 0,
    gold: 30,
    wood: 0,
    stone: 0
}

let pitMineHouse: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.PIT_MINE_HOUSE,
    food: 0,
    gold: 7.5,
    wood: 0,
    stone: 0
}

let pitMineMiningCamp: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.PIT_MINE_MINING_CAMP,
    food: 0,
    gold: 7.5,
    wood: 0,
    stone: 0
}

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.MANSA_QUERY_GOLD]: mansaQueryGold,
    [PassiveIncomeModifierId.MANSA_QUERY_STONE]: mansaQueryStone,
    [PassiveIncomeModifierId.PIT_MINE]: pitMine,
    [PassiveIncomeModifierId.PIT_MINE_HOUSE]: pitMineHouse,
    [PassiveIncomeModifierId.PIT_MINE_MINING_CAMP]: pitMineMiningCamp
}

const MALIANS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.MALIANS,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    allLimitedFoodGatheringSourceModifiers: {}
}

export default MALIANS_MODIFIERS;
