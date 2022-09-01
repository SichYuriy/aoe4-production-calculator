import CivilizationModifiers from "../../model/CivilizationModifiers";
import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {Building} from "../../model/Unit";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import FoodSource from "../../model/FoodSource";

const songDynasty: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.SONG_DYNASTY,
    canBeApplied: unit => unit.id === 'VILLAGER',
    apply: currentProductionTime => currentProductionTime * 0.65
}

const chineseDocks: ProductionSpeedModifier = {
    id: ProductionSpeedModifierId.CHINESE_DOCKS,
    canBeApplied: unit => unit.building === Building.DOCK,
    apply: currentProductionTime => currentProductionTime * 0.8
}

const foodImperialOfficial: GatheringRateModifier = {
    id: GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL,
    apply: gatheringRates => ({
        ...gatheringRates,
        food: gatheringRates.food * 1.2
    }),
    description: 'food * 1.2'
}

const woodImperialOfficial: GatheringRateModifier = {
    id: GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL,
    apply: gatheringRates => ({
        ...gatheringRates,
        wood: gatheringRates.wood * 1.2
    }),
    description: 'wood * 1.2'
}

const goldImperialOfficial: GatheringRateModifier = {
    id: GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL,
    apply: gatheringRates => ({
        ...gatheringRates,
        gold: gatheringRates.gold * 1.2
    }),
    description: 'gold * 1.2'
}

const stoneImperialOfficial: GatheringRateModifier = {
    id: GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL,
    apply: gatheringRates => ({
        ...gatheringRates,
        stone: gatheringRates.stone * 1.2
    }),
    description: 'stone * 1.2'
}

const granary: GatheringRateModifier = {
    id: GatheringRateModifierId.GRANARY,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.FARM
        ? {...gatheringRates, food: gatheringRates.food * 1.12}
        : gatheringRates,
    description: 'farm * 1.12'
}


const CHINESE_GATHERING_RATE_MODIFIERS = {
    [GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL]: foodImperialOfficial,
    [GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL]: woodImperialOfficial,
    [GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL]: goldImperialOfficial,
    [GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL]: stoneImperialOfficial,
    [GatheringRateModifierId.GRANARY]: granary
}

const CHINESE_PRODUCTION_SPEED_MODIFIERS = {
    [ProductionSpeedModifierId.SONG_DYNASTY]: songDynasty,
    [ProductionSpeedModifierId.CHINESE_DOCKS]: chineseDocks
}

const CHINESE_MODIFIERS: CivilizationModifiers = {
    civilization: CivilizationsEnum.CHINESE,
    allGatheringRateModifiers: CHINESE_GATHERING_RATE_MODIFIERS,
    defaultGatheringRateModifiers: [],
    allProductionSpeedModifiers: CHINESE_PRODUCTION_SPEED_MODIFIERS,
    defaultProductionSpeedModifiers: [ProductionSpeedModifierId.CHINESE_DOCKS],
    allCostModifiers: {},
    defaultCostModifiers: []
}

export default CHINESE_MODIFIERS;
