import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";

const cisternGatheringRateLevel1: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_1,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.034,
        wood: gatheringRates.wood * 1.034,
        gold: gatheringRates.gold * 1.034,
        stone: gatheringRates.stone * 1.034,
    }),
    description: 'gatheringRate * 1.034'
}

const cisternGatheringRateLevel2: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_2,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.067,
        wood: gatheringRates.wood * 1.067,
        gold: gatheringRates.gold * 1.067,
        stone: gatheringRates.stone * 1.067,
    }),
    description: 'gatheringRate * 1.067'
}

const cisternGatheringRateLevel3: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_3,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.1,
        wood: gatheringRates.wood * 1.1,
        gold: gatheringRates.gold * 1.1,
        stone: gatheringRates.stone * 1.1,
    }),
    description: 'gatheringRate * 1.1'
}

const cisternGatheringRateLevel4: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_4,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.134,
        wood: gatheringRates.wood * 1.134,
        gold: gatheringRates.gold * 1.134,
        stone: gatheringRates.stone * 1.134,
    }),
    description: 'gatheringRate * 1.134'
}

const cisternGatheringRateLevel5: GatheringRateModifier = {
    id: GatheringRateModifierId.CISTERN_LEVEL_5,
    apply: gatheringRates => ({
        food: gatheringRates.food * 1.167,
        wood: gatheringRates.wood * 1.167,
        gold: gatheringRates.gold * 1.167,
        stone: gatheringRates.stone * 1.167,
    }),
    description: 'gatheringRate * 1.167'
}

const BYZANTINES_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.CISTERN_LEVEL_1]: cisternGatheringRateLevel1,
    [GatheringRateModifierId.CISTERN_LEVEL_2]: cisternGatheringRateLevel2,
    [GatheringRateModifierId.CISTERN_LEVEL_3]: cisternGatheringRateLevel3,
    [GatheringRateModifierId.CISTERN_LEVEL_4]: cisternGatheringRateLevel4,
    [GatheringRateModifierId.CISTERN_LEVEL_5]: cisternGatheringRateLevel5
}

const BYZANTINES_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.BYZANTINES,
    allGatheringRateModifiers: BYZANTINES_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
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

export default BYZANTINES_MODIFIERS;