import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import LimitedFoodGatheringSourceModifier from "../../model/LimitedFoodGatheringSourceModifier";
import LimitedFoodGatheringSourceModifierId
    from "../limited-food-gathering-source-modifiers/LimitedFoodGatheringSourceModifierId";
import FoodSource from "../../model/FoodSource";

let anatolianHills: GatheringRateModifier = {
    id: GatheringRateModifierId.ANATOLIAN_HILLS,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.067,
        stone: gatheringRates.stone * 1.067,
    }),
    description: '[gold, stone] * 1.067'
}

let sultanhaniTradeNetwork: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK,
    food: 0,
    gold: 28,
    wood: 0,
    stone: 0,
    maxCount: 6
}

const BUSHES_COUNT = 4;
const FOOD_AMOUNT_PER_BUSH = 175;
const BUSH_RESTORE_TIME_IN_SECONDS = 120;
const MINUTE_IN_SECONDS = 60;
let twinMinaretMedrese: LimitedFoodGatheringSourceModifier = {
    id: LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE,
    gatheringRateLimit: ((BUSHES_COUNT - 1) * FOOD_AMOUNT_PER_BUSH) / (BUSH_RESTORE_TIME_IN_SECONDS / MINUTE_IN_SECONDS),
    foodSource: FoodSource.TWIN_MINARET_BERRY,
    baseGatheringRate: 50
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.ANATOLIAN_HILLS]: anatolianHills
}

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK]: sultanhaniTradeNetwork
}

const LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS = {
    [LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE]: twinMinaretMedrese
}

const OTTOMANS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.OTTOMANS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    allLimitedFoodGatheringSourceModifiers: LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS
}

export default OTTOMANS_MODIFIERS;
