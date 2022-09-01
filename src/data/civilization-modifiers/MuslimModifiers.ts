import GatheringRateModifierId from "../gathering-rate-modifiers/GatheringRateModifierId";
import GatheringRateModifier from "../../model/GatheringRateModifier";
import FoodSource from "../../model/FoodSource";

export const muslimBerries: GatheringRateModifier = {
    id: GatheringRateModifierId.MUSLIM_BERRIES,
    apply: (gatheringRates, foodSource) => foodSource === FoodSource.BERRY
        ? {...gatheringRates, food: gatheringRates.food * 1.292}
        : gatheringRates,
    description: 'berries * 1.292'
}
