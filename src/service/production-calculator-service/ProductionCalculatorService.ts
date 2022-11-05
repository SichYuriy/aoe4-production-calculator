import GatheringRates from "../../model/GatheringRates";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionVillagerCost from "../../model/ProductionVillagerCost";
import Unit, {UnitCost} from "../../model/Unit";
import UnitCostModifier from "../../model/UnitCostModifier";
import UNITS from "../../data/unit/Units";
import ResourcesAmount from "../../model/ResourcesAmount";
import LimitedFoodGatheringSource from "../../model/LimitedFoodGatheringSource";
import LimitedFoodGatheringSourceService from "../limited-food-gathering-source-service/LimitedFoodGatheringSourceService";

class ProductionCalculatorService {
    private limitedFoodGatheringSourceService: LimitedFoodGatheringSourceService;

    constructor(limitedFoodGatheringSourceService: LimitedFoodGatheringSourceService) {
        this.limitedFoodGatheringSourceService = limitedFoodGatheringSourceService;
    }

    calculateProductionVillagerCost(gatheringRates: GatheringRates,
                                    unitsSelected: { [key: string]: number },
                                    productionSpeedModifiers: ProductionSpeedModifier[],
                                    costModifiers: UnitCostModifier[],
                                    passiveIncome: ResourcesAmount,
                                    limitedFoodGatheringSources: LimitedFoodGatheringSource[]): ProductionVillagerCost {
        let resourcesNeeded = this.calculateResourcesNeededForUnitProduction(unitsSelected, productionSpeedModifiers, costModifiers);

        resourcesNeeded = resourcesNeeded.subtractToZero(passiveIncome);

        let uniqueFoodSourceVillagers = this.limitedFoodGatheringSourceService.sendVillagersToUniqueSources(limitedFoodGatheringSources, resourcesNeeded);
        resourcesNeeded = resourcesNeeded.subtractToZero(uniqueFoodSourceVillagers.gatheringRate);

        let villagersCost = resourcesNeeded.divideByGatheringRate(gatheringRates);
        villagersCost.foodVillagers += uniqueFoodSourceVillagers.villagersCount;

        return villagersCost;
    }

    private calculateResourcesNeededForUnitProduction(unitsSelected: { [key: string]: number }, productionSpeedModifiers: ProductionSpeedModifier[], costModifiers: UnitCostModifier[]): ResourcesAmount {
        return Object.keys(unitsSelected)
            .map(unitId => this.calculateUnitCostPerMinute(UNITS.get(unitId)!, unitsSelected[unitId], productionSpeedModifiers, costModifiers))
            .reduce(
                (total: ResourcesAmount, unitCost: UnitCost) => total.add(ResourcesAmount.ofObj(unitCost)),
                new ResourcesAmount()
            );
    }

    private calculateUnitCostPerMinute(unit: Unit, count: number, productionSpeedModifiers: ProductionSpeedModifier[], costModifiers: UnitCostModifier[]): UnitCost {
        let effectiveCost = costModifiers
            .filter(modifier => modifier.canBeApplied(unit))
            .reduce(
                (previousCost, modifier) => modifier.apply(previousCost),
                unit.cost
            );
        let effectiveProductionTime = productionSpeedModifiers
            .filter(modifier => modifier.canBeApplied(unit))
            .reduce(
                (previousTime, modifier) => modifier.apply(previousTime),
                unit.productionTime
            );

        return {
            food: effectiveCost.food * 60 / effectiveProductionTime * count,
            wood: effectiveCost.wood * 60 / effectiveProductionTime * count,
            gold: effectiveCost.gold * 60 / effectiveProductionTime * count,
            stone: effectiveCost.stone * 60 / effectiveProductionTime * count
        }
    }
}

export default ProductionCalculatorService;
