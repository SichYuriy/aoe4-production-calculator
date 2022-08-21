import GatheringRates from "./GatheringRates";
import FoodSource from "./FoodSource";

export default interface GatheringRateModifier {
    id: string;
    apply: (gatheringRates: GatheringRates, foodSource: FoodSource) => GatheringRates;
}
