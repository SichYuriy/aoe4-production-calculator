import FoodSource from "./FoodSource";
import GatheringRates from "./GatheringRates";
import {ResourceType} from "./ResourceType";

export default interface PassiveIncomeFromGatheringVillagerModifier {
    id: string;
    gatheringResource: ResourceType;
    incomeAmount: GatheringRates;
    foodSources: FoodSource[];
}
