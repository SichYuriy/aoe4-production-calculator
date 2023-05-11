import GatheringRates from "../model/GatheringRates";
import FoodSource from "../model/FoodSource";
import {
    BASE_BERRY_GATHERING_RATE, BASE_CATTLE_GATHERING_RATE,
    BASE_DEER_GATHERING_RATE,
    BASE_FARM_GATHERING_RATE,
    BASE_GOLD_GATHERING_RATE,
    BASE_SHEEP_GATHERING_RATE,
    BASE_STONE_GATHERING_RATE,
    BASE_WOOD_GATHERING_RATE
} from "../data/BaseGatheringRates";
import GatheringRateModifier from "../model/GatheringRateModifier";
import {TWIN_MINARET_BASE_GATHERING_RATE} from "../data/civilization-modifiers/OttomansModifiers";

class GatheringRatesService {
    getGatheringRates(foodSource: FoodSource, useCustomGatheringRates: boolean, customGatheringRates: GatheringRates, modifiers: GatheringRateModifier[]): GatheringRates {
        if (useCustomGatheringRates) {
            return customGatheringRates;
        }
        return this.getCalculatedGatheringRates(foodSource, modifiers);
    }

    getCalculatedGatheringRates(foodSource: FoodSource, modifiers: GatheringRateModifier[]) {
        let baseGatheringRates = {
            food: this.getFoodGatheringRate(foodSource),
            gold: BASE_GOLD_GATHERING_RATE,
            wood: BASE_WOOD_GATHERING_RATE,
            stone: BASE_STONE_GATHERING_RATE
        };
        return modifiers.reduce(
            (previousRates, modifier) => modifier.apply(previousRates, foodSource, modifiers.map(modifier => modifier.id)),
            baseGatheringRates
        );
    }

    private getFoodGatheringRate(foodSource: FoodSource): number {
        if (foodSource === FoodSource.SHEEP) {
            return BASE_SHEEP_GATHERING_RATE;
        } else if (foodSource === FoodSource.CATTLE) {
            return BASE_CATTLE_GATHERING_RATE;
        } else if (foodSource === FoodSource.BERRY) {
            return BASE_BERRY_GATHERING_RATE;
        } else if (foodSource === FoodSource.DEER) {
            return BASE_DEER_GATHERING_RATE;
        } else if (foodSource === FoodSource.TWIN_MINARET_BERRY) {
            return TWIN_MINARET_BASE_GATHERING_RATE;
        } else {
            return BASE_FARM_GATHERING_RATE;
        }
    }
}

export default GatheringRatesService;
