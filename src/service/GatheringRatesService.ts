import GatheringRates from "../model/GatheringRates";
import FoodSource from "../model/FoodSource";
import {
    BASE_BERRY_GATHERING_RATE,
    BASE_DEER_GATHERING_RATE, BASE_FARM_GATHERING_RATE, BASE_GOLD_GATHERING_RATE,
    BASE_SHEEP_GATHERING_RATE, BASE_STONE_GATHERING_RATE, BASE_WOOD_GATHERING_RATE
} from "../data/BaseGatheringRates";

class GatheringRatesService {
    getGatheringRates(foodSource: FoodSource): GatheringRates {
        return {
            food: this.getFoodGatheringRate(foodSource),
            gold: BASE_GOLD_GATHERING_RATE,
            wood: BASE_WOOD_GATHERING_RATE,
            stone: BASE_STONE_GATHERING_RATE
        }
    }

    private getFoodGatheringRate(foodSource: FoodSource): number {
        if (foodSource === FoodSource.SHEEP) {
            return BASE_SHEEP_GATHERING_RATE;
        } else if (foodSource === FoodSource.BERRY) {
            return BASE_BERRY_GATHERING_RATE;
        } else if (foodSource === FoodSource.DEER) {
            return BASE_DEER_GATHERING_RATE;
        } else {
            return BASE_FARM_GATHERING_RATE;
        }
    }
}

export default GatheringRatesService;
