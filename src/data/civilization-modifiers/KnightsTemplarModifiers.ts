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

const darkAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.0861}),
    description: 'wood * 1.08'
}

const feudalAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_FEUDAL_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1402}),
    description: 'wood * 1.14'
}

const castleAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_CASTLE_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1141}),
    description: 'wood * 1.11'
}

const imperialAgeWoodBonus: GatheringRateModifier = {
    id: GatheringRateModifierId.KNIGHTS_TEMPLAR_IMPERIAL_AGE,
    apply: gatheringRates => ({...gatheringRates, wood: gatheringRates.wood * 1.1379}),
    description: 'wood * 1.14'
}

const foodFromWoodDarkAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_DARK_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(6.73),
    foodSources:[]
}

const foodFromWoodFeudalAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_FEUDAL_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(7.68),
    foodSources:[]
}

const foodFromWoodCastleAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_CASTLE_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(8.55),
    foodSources:[]
}

const foodFromWoodImperialAge: PassiveIncomeFromGatheringVillagerModifier = {
    id: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_IMPERIAL_AGE,
    gatheringResource: ResourceType.WOOD,
    incomeAmount: ResourcesAmount.ofFood(9.73),
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
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveIncomeFromGatheringVillagerModifiers: PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS,
    defaultPassiveIncomeFromGatheringVillagerModifiers: [PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_DARK_AGE],
    allCostModifiersPerUnit: {},
    allResourceDropOffModifiers: {}
}

export default KNIGHTS_TEMPLAR_MODIFIERS;