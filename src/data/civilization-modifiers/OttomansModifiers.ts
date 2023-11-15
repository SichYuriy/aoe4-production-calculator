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
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {UnitType} from "../../model/Unit";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";

let anatolianHills: GatheringRateModifier = {
    id: GatheringRateModifierId.ANATOLIAN_HILLS,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.1,
        stone: gatheringRates.stone * 1.1,
    }),
    description: '[gold, stone] * 1.1'
}

let sultanhaniTradeNetwork: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK,
    food: 0,
    gold: 28,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.SULTANHANI_TRADE_NETWORK
}

const BUSHES_COUNT = 4;
const FOOD_AMOUNT_PER_BUSH = 175;
const BUSH_RESTORE_TIME_IN_SECONDS = 120;
const MINUTE_IN_SECONDS = 60;
export const TWIN_MINARET_BASE_GATHERING_RATE = 50;
let twinMinaretMedrese: LimitedFoodGatheringSourceModifier = {
    id: LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE,
    gatheringRateLimit: ((BUSHES_COUNT - 1) * FOOD_AMOUNT_PER_BUSH) / (BUSH_RESTORE_TIME_IN_SECONDS / MINUTE_IN_SECONDS),
    foodSource: FoodSource.TWIN_MINARET_BERRY,
    description: 'base gathering rate: 50'
}

const BLACKSMITH_AGE_2 = 1 / 1.2;
let age2Blacksmith: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_2,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    apply: (currentProductionTime: number) => currentProductionTime * BLACKSMITH_AGE_2,
    description: 'militaryTime * ' + BLACKSMITH_AGE_2.toFixed(2)
}

const BLACKSMITH_AGE_3 = 1 / 1.3;
let age3Blacksmith: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_3,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    apply: (currentProductionTime: number) => currentProductionTime * BLACKSMITH_AGE_3,
    description: 'militaryTime * ' + BLACKSMITH_AGE_3.toFixed(2)
}

const BLACKSMITH_AGE_4 = 1 / 1.4;
let age4Blacksmith: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_4,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    apply: (currentProductionTime: number) => currentProductionTime * BLACKSMITH_AGE_4,
    description: 'militaryTime * ' + BLACKSMITH_AGE_4.toFixed(2)
}

const ISTANBUL_OBSERVATORY = 1 / 2;
let istanbulObservatory: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.ISTANBUL_OBSERVATORY,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
    apply: (currentProductionTime: number) => currentProductionTime * ISTANBUL_OBSERVATORY,
    description: 'militaryTime * ' + ISTANBUL_OBSERVATORY.toFixed(2)
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

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_2]: age2Blacksmith,
    [ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_3]: age3Blacksmith,
    [ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_4]: age4Blacksmith,
    [ProductionSpeedModifierId.ISTANBUL_OBSERVATORY]: istanbulObservatory,
}

const OTTOMANS_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.OTTOMANS,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [PassiveIncomeSource.SULTANHANI_TRADE_NETWORK],
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers: [PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK],
    allLimitedFoodGatheringSourceModifiers: LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS,
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default OTTOMANS_MODIFIERS;
