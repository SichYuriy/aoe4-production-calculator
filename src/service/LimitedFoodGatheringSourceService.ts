import {LimitedFoodGatheringSourceModifierState} from "../state/LimitedFoodGatheringSourceModifiersSlice";
import GatheringRateModifier from "../model/GatheringRateModifier";
import LimitedFoodGatheringSource from "../model/LimitedFoodGatheringSource";
import LimitedFoodGatheringSourceModifier from "../model/LimitedFoodGatheringSourceModifier";
import LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS
    from "../data/limited-food-gathering-source-modifiers/AllLimitedFoodGatheringSourceModifiers";
import ResourcesAmount from "../model/ResourcesAmount";
import {VillagersGathering} from "../model/VillagersGathering";
import {Utils} from "../utils/Utils";
import GatheringRatesService from "./GatheringRatesService";

class LimitedFoodGatheringSourceService {
    private gatheringRatesService: GatheringRatesService;

    constructor(gatheringRatesService: GatheringRatesService) {
        this.gatheringRatesService = gatheringRatesService;
    }

    public getAvailableGatheringSources(sourcesState: LimitedFoodGatheringSourceModifierState[],
                                        gatheringRateModifiers: GatheringRateModifier[]): LimitedFoodGatheringSource[] {
        return sourcesState
            .map(sourceState => LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS[sourceState.id])
            .map(modifier => {
                let effectiveGatheringRate = this.calculateGatheringRate(modifier, gatheringRateModifiers);
                return {
                    effectiveGatheringRate: effectiveGatheringRate,
                    maxVillagers: Math.floor(modifier.gatheringRateLimit / effectiveGatheringRate)
                };
            });
    }

    public sendVillagersToUniqueSources(sources: LimitedFoodGatheringSource[],
                                        neededResourcePerMinute: ResourcesAmount): VillagersGathering {
        let sortedSources = sources.sort(Utils.sortDescByProperty(a => a.effectiveGatheringRate));
        let neededFood = neededResourcePerMinute;
        let currentSourceIndex = 0;
        let result: VillagersGathering = {
            villagersCount: 0,
            gatheringRate: new ResourcesAmount()
        }
        while (neededFood.food > 0 && currentSourceIndex < sortedSources.length) {
            let source = sortedSources[0];
            let takenVillagers = this.getTakenVillagers(source, neededFood);
            let resourcesGathered = source.effectiveGatheringRate * takenVillagers;
            result = {
                villagersCount: result.villagersCount + takenVillagers,
                gatheringRate: result.gatheringRate.add(ResourcesAmount.of(resourcesGathered, 0, 0, 0))
            };
            neededFood = neededFood.subtractToZero(ResourcesAmount.of(resourcesGathered, 0, 0, 0));
            currentSourceIndex++;
        }
        return result;
    }

    private getTakenVillagers(source: LimitedFoodGatheringSource, neededResourcePerMinute: ResourcesAmount): number {
        let villagersNeeded = Math.ceil(neededResourcePerMinute.food / source.effectiveGatheringRate);
        return Math.min(villagersNeeded, source.maxVillagers);
    }

    private calculateGatheringRate(source: LimitedFoodGatheringSourceModifier,
                                   gatheringRateModifiers: GatheringRateModifier[]): number {
        return this.gatheringRatesService.getCalculatedGatheringRates(source.foodSource, gatheringRateModifiers).food;
    }
}

export default LimitedFoodGatheringSourceService;