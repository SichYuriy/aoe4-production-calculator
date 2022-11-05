import foodSource from "./FoodSource";

export default interface LimitedFoodGatheringSourceModifier {
    id: string;
    gatheringRateLimit: number;
    foodSource: foodSource;
}
