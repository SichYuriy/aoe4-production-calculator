import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import PassiveIncomeFromGatheringVillagerModifier from "../../model/PassiveIncomeFromGatheringVillagerModifier";
import {ResourceType} from "../../model/ResourceType";
import ResourcesAmount from "../../model/ResourcesAmount";
import PassiveIncomeFromGatheringVillagerModifierId
    from "../passive-income-from-gathering-vilager-modifiers/PassiveIncomeFromGatheringVillagerModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";
import {UnitCost, UnitType} from "../../model/Unit";
import CostModifierId from "../cost-modifiers/CostModifierId";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import PassiveIncomeSource from "../passive-income-modifiers/PassiveIncomeSource";
import DynamicPassiveIncomeModifierId from "../dynamic-passive-income-modifiers/DynamicPassiveIncomeModifierId";
import DynamicPassiveIncomeModifier from "../../model/DynamicPassiveIncomeModifier";


// wood gathering rate test, 11/08/2025
// vils 6
// start wood: 100


// dark age:

// start at 00:15
// end at 04:15
// end wood: 860/ 879/ 883
// 774 / 24 = 32.25

// feudal age:
// start at 01:45
// end at 05:45
// start wood: 49950
// end wood: 50865
// 915 / 24 = 38.125

// castle age:
// start wood: 50865
// start at 08:30
// end at 12:30
// end wood: 51917
// 1052 / 24 = 43.8333

// imperial age:
// start wood: 51917
// start at 14:25
// end at 18:25
// end wood: 53117
// 1200 / 24 = 50

const darkAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.0403}),
    description: 'wood * 1.04'
}

const feudalAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_FEUDAL_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1822}),
    description: 'wood * 1.18'
}

const castleAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_CASTLE_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1497}),
    description: 'wood * 1.15'
}

const imperialAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_IMPERIAL_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1406}),
    description: 'wood * 1.1407'
}

const foodFromWoodDarkAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_DARK_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(6.45),
    foodSources:[]
}

const foodFromWoodFeudalAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_FEUDAL_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(7.625),
    foodSources:[]
}

const foodFromWoodCastleAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_CASTLE_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(8.7667),
    foodSources:[]
}

const foodFromWoodImperialAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_IMPERIAL_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(10),
    foodSources:[]
}

const siegeDiscount: UnitCostModifier = {
    id: CostModifierId.KNIGHTS_TEMPLAR_SIEGE,
    canBeApplied: unit => unit.types.some(unitType => unitType === UnitType.SIEGE),
    apply: (currentCost: UnitCost) => ({
        ...currentCost,
        wood: currentCost.wood * 0.75
    }),
    description: 'siegeCost.wood * 0.75'
}

const kingdomOfFranceProductionSpeed: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.KINGDOM_OF_FRANCE,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT, UnitType.MILITARY_SHIP].includes(unitType)),
    productionSpeedBonus: 0.15
}

const kingdomOfFranceUnitCost: UnitCostModifier = {
    id: CostModifierId.KINGDOM_OF_FRANCE,
    canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT, UnitType.MILITARY_SHIP].includes(unitType)),
    apply: currentCost => ({
        ...currentCost,
        gold: currentCost.gold * 0.95
    }),
    description: 'militaryUnit.gold * 0.95'
}

export const REPUBLIC_OF_GENOA_MODIFIER = 1.2;

const GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE]: darkAgeWoodBonus,
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_FEUDAL_AGE]: feudalAgeWoodBonus,
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_CASTLE_AGE]: castleAgeWoodBonus,
    [GatheringRateModifierId.KNIGHTS_TEMPLAR_IMPERIAL_AGE]: imperialAgeWoodBonus,
}

const PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS = {
    [PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_DARK_AGE]: foodFromWoodDarkAge,
    [PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_FEUDAL_AGE]: foodFromWoodFeudalAge,
    [PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_CASTLE_AGE]: foodFromWoodCastleAge,
    [PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_IMPERIAL_AGE]: foodFromWoodImperialAge,
}

const COST_MODIFIERS = {
    [CostModifierId.KNIGHTS_TEMPLAR_SIEGE]: siegeDiscount,
    [CostModifierId.KINGDOM_OF_FRANCE]: kingdomOfFranceUnitCost
}

const PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.KINGDOM_OF_FRANCE]: kingdomOfFranceProductionSpeed
}

let pilgrim: DynamicPassiveIncomeModifier = {
    id: DynamicPassiveIncomeModifierId.PILGRIM,
    default: { food: 0, gold: 40, wood: 0, stone: 0 },
    source: PassiveIncomeSource.PILGRIM,
}

const KNIGHTS_TEMPLAR_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.KNIGHTS_TEMPLAR,
    allGatheringRateModifiers: GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE],
    disabledGatheringRateModifiers: [GatheringRateModifierId.DOUBLE_BROADAX, GatheringRateModifierId.LUMBER_PRESERVATION,
        GatheringRateModifierId.CROSSCUT_SAW, GatheringRateModifierId.FORESTRY],
    allProductionSpeedModifiers: PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [],
    allCostModifiers: COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.KNIGHTS_TEMPLAR_SIEGE],
    passiveIncomeSources: [PassiveIncomeSource.PILGRIM],
    allPassiveIncomeModifiers: {},
    allDynamicPassiveIncomeModifiers: {[DynamicPassiveIncomeModifierId.PILGRIM]: pilgrim},
    defaultDynamicPassiveIncomeModifiers: [DynamicPassiveIncomeModifierId.PILGRIM],
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS,
    defaultPassiveIncomeFromGatheringVillagerModifiers: [PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_DARK_AGE],
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default KNIGHTS_TEMPLAR_MODIFIERS;