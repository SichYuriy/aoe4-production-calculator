import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import ResourcesAmount from "../../model/ResourcesAmount";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";
import CostModifierId from "../cost-modifiers/CostModifierId";
import {japaneseFishingBoats} from "./JapaneseModifiers";

export const SINGLE_YATAI_MAX_INCOME = 60;
export const BOAR_YATAI_INCOME = 60;
export const DEER_YATAI_INCOME = 48;
export const BERRY_YATAI_INCOME = 36;
export const SHEEP_YATAI_INCOME = 2;
export const FARM_YATAI_INCOME = 4;

const boarYatai: PassiveIncomeModifier = {
    id: PassiveIncomeSource.BOAR_YATAI,
    ...ResourcesAmount.ofFood(BOAR_YATAI_INCOME),
    source: PassiveIncomeSource.BOAR_YATAI
}

const deerYatai: PassiveIncomeModifier = {
    id: PassiveIncomeSource.DEER_YATAI,
    ...ResourcesAmount.ofFood(DEER_YATAI_INCOME),
    source: PassiveIncomeSource.DEER_YATAI
}

const berryYatai: PassiveIncomeModifier = {
    id: PassiveIncomeSource.BERRY_YATAI,
    ...ResourcesAmount.ofFood(BERRY_YATAI_INCOME),
    source: PassiveIncomeSource.BERRY_YATAI
}

const sheepYatai: PassiveIncomeModifier = {
    id: PassiveIncomeSource.SHEEP_YATAI,
    ...ResourcesAmount.ofFood(SHEEP_YATAI_INCOME),
    source: PassiveIncomeSource.SHEEP_YATAI
}

const farmYatai: PassiveIncomeModifier = {
    id: PassiveIncomeSource.FARM_YATAI,
    ...ResourcesAmount.ofFood(FARM_YATAI_INCOME),
    source: PassiveIncomeSource.FARM_YATAI
}

const SENGOKU_DAIMYO_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.SENGOKU_DAIMYO,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {
        [CostModifierId.JAPANESE_FISHING_BOATS]: japaneseFishingBoats
    },
    defaultCostModifiers: [CostModifierId.JAPANESE_FISHING_BOATS],
    passiveIncomeSources: [
        PassiveIncomeSource.BOAR_YATAI,
        PassiveIncomeSource.DEER_YATAI,
        PassiveIncomeSource.BERRY_YATAI,
        PassiveIncomeSource.SHEEP_YATAI,
        PassiveIncomeSource.FARM_YATAI
    ],
    allPassiveIncomeModifiers: {
        [PassiveIncomeModifierId.BOAR_YATAI]: boarYatai,
        [PassiveIncomeModifierId.DEER_YATAI]: deerYatai,
        [PassiveIncomeModifierId.BERRY_YATAI]: berryYatai,
        [PassiveIncomeModifierId.SHEEP_YATAI]: sheepYatai,
        [PassiveIncomeModifierId.FARM_YATAI]: farmYatai
    },
    defaultPassiveIncomeModifiers: [
        PassiveIncomeModifierId.BOAR_YATAI,
        PassiveIncomeModifierId.DEER_YATAI,
        PassiveIncomeModifierId.BERRY_YATAI,
        PassiveIncomeModifierId.SHEEP_YATAI,
        PassiveIncomeModifierId.FARM_YATAI
    ],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default SENGOKU_DAIMYO_MODIFIERS;
