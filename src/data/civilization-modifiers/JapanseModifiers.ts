import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import CostModifierId from "../cost-modifiers/CostModifierId";
import UnitCostModifier from "../../model/UnitCostModifier";

const japaneseFishingBoats: UnitCostModifier = {
    id: CostModifierId.JAPANESE_FISHING_BOATS,
    canBeApplied: unit => unit.id === 'FISHING_BOAT',
    apply: currentCost => ({
        food: currentCost.food * 0.7,
        wood: currentCost.wood * 0.7,
        gold: currentCost.gold * 0.7,
        stone: currentCost.stone * 0.7
    }),
    description: 'fishingBoatCost * 0.7'
}

const JAPANESE_COST_MODIFIERS = {
    [CostModifierId.JAPANESE_FISHING_BOATS]: japaneseFishingBoats
}

const JAPANESE_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.JAPANESE,
    allGatheringRateModifiers: {},
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: {},
    defaultProductionSpeedModifiers: [],
    allCostModifiers: JAPANESE_COST_MODIFIERS,
    defaultCostModifiers: [CostModifierId.JAPANESE_FISHING_BOATS],
    passiveIncomeSources: [],
    allPassiveIncomeModifiers: {},
    defaultPassiveIncomeModifiers: [],
    allLimitedFoodGatheringSourceModifiers: {},
    allPassiveGoldFromFoodVillagerModifiers: {},
    allCostModifiersPerUnit: {}
}

export default JAPANESE_MODIFIERS;