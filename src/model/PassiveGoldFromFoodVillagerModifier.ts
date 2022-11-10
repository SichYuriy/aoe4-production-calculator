import FoodSource from "./FoodSource";

export default interface PassiveGoldFromFoodVillagerModifier {
    id: string;
    gold: number;
    foodSources: FoodSource[];
}
