import GatheringRates from "../model/GatheringRates";
import ProductionSpeedModifier from "../model/ProductionSpeedModifier";
import ProductionVillagerCost from "../model/ProductionVillagerCost";
import Unit from "../model/Unit";
import UnitCostModifier from "../model/UnitCostModifier";
import UNITS from "../data/unit/Units";

class ProductionCalculatorService {
    calculateProductionVillagerCost(gatheringRates: GatheringRates,
                                    unitsSelected: { [key: string]: number },
                                    productionSpeedModifiers: ProductionSpeedModifier[],
                                    costModifiers: UnitCostModifier[]): ProductionVillagerCost {

        let villagersCost = Object.entries(unitsSelected)
            .map(([unit, count]) => this.calculateProductionVillagerCostForUnit(gatheringRates, UNITS.get(unit)!, count, productionSpeedModifiers, costModifiers))
            .reduce(
                (previousValue, currentValue) => ({
                    foodVillagers: previousValue.foodVillagers + currentValue.foodVillagers,
                    goldVillagers: previousValue.goldVillagers + currentValue.goldVillagers,
                    woodVillagers: previousValue.woodVillagers + currentValue.woodVillagers,
                    stoneVillagers: previousValue.stoneVillagers + currentValue.stoneVillagers,
                }),
                {foodVillagers: 0, goldVillagers: 0, woodVillagers: 0, stoneVillagers: 0}
            );

        return {
            foodVillagers: Math.ceil(villagersCost.foodVillagers),
            goldVillagers: Math.ceil(villagersCost.goldVillagers),
            woodVillagers: Math.ceil(villagersCost.woodVillagers),
            stoneVillagers: Math.ceil(villagersCost.stoneVillagers),
        };
    }

    private calculateProductionVillagerCostForUnit(gatheringRates: GatheringRates,
                                                   unit: Unit,
                                                   unitCount: number,
                                                   productionSpeedModifiers: ProductionSpeedModifier[],
                                                   unitsCostModifiers: UnitCostModifier[]): ProductionVillagerCost {
        let effectiveProductionTime = productionSpeedModifiers
            .filter(modifier => modifier.canBeApplied(unit))
            .reduce(
                (previousTime, modifier) => modifier.apply(previousTime, unit),
                unit.productionTime
            );

        let effectiveCost = unitsCostModifiers
            .filter(modifier => modifier.canBeApplied(unit))
            .reduce(
                (previousCost, modifier) => modifier.apply(previousCost, unit),
                unit.cost
            );

        return {
            foodVillagers: this.calculateVillagersCost(gatheringRates.food, effectiveProductionTime, effectiveCost.food) * unitCount,
            goldVillagers: this.calculateVillagersCost(gatheringRates.gold, effectiveProductionTime, effectiveCost.gold) * unitCount,
            woodVillagers: this.calculateVillagersCost(gatheringRates.wood, effectiveProductionTime, effectiveCost.wood) * unitCount,
            stoneVillagers: this.calculateVillagersCost(gatheringRates.stone, effectiveProductionTime, effectiveCost.stone) * unitCount
        };
    }

    private calculateVillagersCost(gatheringRate: number, productionTime: number, cost: number): number {
        let needResourcesPerMinute = cost * 60 / productionTime;
        return needResourcesPerMinute / gatheringRate;
    }
}

export default ProductionCalculatorService;
