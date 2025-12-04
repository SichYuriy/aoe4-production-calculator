import GatheringRates from "../model/GatheringRates";
import FoodSource from "../model/FoodSource";
import {
    BASE_BERRY_GATHERING_RATE,
    BASE_CATTLE_GATHERING_RATE,
    BASE_DEER_GATHERING_RATE,
    BASE_FARM_GATHERING_RATE,
    BASE_GOLD_GATHERING_RATE,
    BASE_SHEEP_GATHERING_RATE,
    BASE_STONE_GATHERING_RATE,
    BASE_WOOD_GATHERING_RATE, STOCKYARD_GATHERING_RATE
} from "../data/BaseGatheringRates";
import GatheringRateModifier from "../model/GatheringRateModifier";
import {TWIN_MINARET_BASE_GATHERING_RATE} from "../data/civilization-modifiers/OttomansModifiers";
import ResourceDropOffModifier from "../model/ResourceDropOffModifier";
import ResourcesAmount from "../model/ResourcesAmount";

class GatheringRatesService {
    getGatheringRates(foodSource: FoodSource,
                      useCustomGatheringRates: boolean,
                      customGatheringRates: GatheringRates,
                      modifiers: GatheringRateModifier[],
                      resourceDropOffModifiers: ResourceDropOffModifier[]): GatheringRates {
        if (useCustomGatheringRates) {
            return customGatheringRates;
        }
        return this.getCalculatedGatheringRates(foodSource, modifiers, resourceDropOffModifiers);
    }

    getCalculatedGatheringRates(foodSource: FoodSource,
                                modifiers: GatheringRateModifier[],
                                resourceDropOffModifiers: ResourceDropOffModifier[]): GatheringRates {
        let baseGatheringRates = {
            food: this.getFoodGatheringRate(foodSource),
            gold: BASE_GOLD_GATHERING_RATE,
            wood: BASE_WOOD_GATHERING_RATE,
            stone: BASE_STONE_GATHERING_RATE
        };
        let modifiedGatheringRates = modifiers.reduce(
            (previousRates, modifier) => modifier.apply(previousRates, foodSource, modifiers.map(modifier => modifier.id)),
            baseGatheringRates
        );
        let resourceDropOffPercentageBonus = resourceDropOffModifiers
            .map(modifier => modifier.getDropOffPercentage(resourceDropOffModifiers.map(modifier => modifier.id)))
            .map(ResourcesAmount.ofObj)
            .reduce((prevValue, currentValue) => prevValue.add(currentValue),
                new ResourcesAmount());

        let dropOffMultiplier = resourceDropOffPercentageBonus.divideByNumber(100).addNumber(1);
        return ResourcesAmount.ofObj(modifiedGatheringRates).multiply(dropOffMultiplier);
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
        } else if (foodSource === FoodSource.STOCKYARD) {
            return STOCKYARD_GATHERING_RATE;
        } else {
            return BASE_FARM_GATHERING_RATE;
        }
    }
}

export default GatheringRatesService;
