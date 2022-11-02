import GatheringRates from "../model/GatheringRates";
import ProductionSpeedModifier from "../model/ProductionSpeedModifier";
import ProductionVillagerCost from "../model/ProductionVillagerCost";
import Unit, {UnitCost} from "../model/Unit";
import UnitCostModifier from "../model/UnitCostModifier";
import UNITS from "../data/unit/Units";
import ResourcesAmount from "../model/ResourcesAmount";

class ProductionCalculatorService {
    calculateProductionVillagerCost(gatheringRates: GatheringRates,
                                    unitsSelected: { [key: string]: number },
                                    productionSpeedModifiers: ProductionSpeedModifier[],
                                    costModifiers: UnitCostModifier[],
                                    passiveIncome: ResourcesAmount): ProductionVillagerCost {
        let resourcesNeededPerMinute = this.calculateResourcesNeededPerMinute(unitsSelected, productionSpeedModifiers, costModifiers);
        return resourcesNeededPerMinute
            .subtractToZero(passiveIncome)
            .divideByGatheringRate(gatheringRates)
    }

    private calculateResourcesNeededPerMinute(unitsSelected: { [key: string]: number }, productionSpeedModifiers: ProductionSpeedModifier[], costModifiers: UnitCostModifier[]): ResourcesAmount {
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
