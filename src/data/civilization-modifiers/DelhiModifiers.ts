import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import {muslimBerries} from "./MuslimModifiers";

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
    allPassiveIncomeModifiers: {},
    allLimitedFoodGatheringSourceModifiers: {}
}

export default DELHI_MODIFIERS;
