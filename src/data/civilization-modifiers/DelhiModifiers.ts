import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import {muslimBerries} from "./MuslimModifiers";
import PassiveIncomeModifier from "../../model/PassiveIncomeModifier";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import PassiveIncomeModifierId from "../passive-income-modifiers/PassiveIncomeModifierId";

let sanctity: PassiveIncomeModifier = {
    id: PassiveIncomeModifierId.SANCTITY,
    food: 0,
    gold: 25,
    wood: 0,
    stone: 0,
    source: PassiveIncomeSource.SACRED_SITES
};

const PASSIVE_INCOME_MODIFIERS = {
    [PassiveIncomeModifierId.SANCTITY]: sanctity
};

const DELHI_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.DELHI,
    allGatheringRateModifiers: {
        [GatheringRateModifierId.MUSLIM_BERRIES]: muslimBerries
    },
    defaultGatheringRateModifiers: [GatheringRateModifierId.MUSLIM_BERRIES],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: PASSIVE_INCOME_MODIFIERS,
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default DELHI_MODIFIERS;
