import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";

const darkAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.2419}),
    description: 'wood * 1.24'
}

const feudalAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_FEUDAL_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1429}),
    description: 'wood * 1.14'
}

const castleAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_CASTLE_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1477}),
    description: 'wood * 1.14'
}

const imperialAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_IMPERIAL_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1089}),
    description: 'wood * 1.1'
}

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE]: darkAgeWoodBonus,
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_FEUDAL_AGE]: feudalAgeWoodBonus,
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_CASTLE_AGE]: castleAgeWoodBonus,
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_IMPERIAL_AGE]: imperialAgeWoodBonus,
}

const KNIGHTS_TEMPLAR_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.KNIGHTS_TEMPLAR,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE],
    disabledGatheringRateModifiers: [GatheringRateModifierId.DOUBLE_BROADAX, GatheringRateModifierId.LUMBER_PRESERVATION,
        GatheringRateModifierId.CROSSCUT_SAW, GatheringRateModifierId.FORESTRY
    ],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: {},
    defaultCostModifiers: [],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default KNIGHTS_TEMPLAR_MODIFIERS;