import GatheringRates from "../../model/GatheringRates";
import ProductionSpeedModifier from "../../model/ProductionSpeedModifier";
import ProductionVillagerCost from "../../model/ProductionVillagerCost";
import Unit, {UnitCost} from "../../model/Unit";
import UnitCostModifier from "../../model/UnitCostModifier";
import UNITS from "../../data/unit/Units";
import ResourcesAmount from "../../model/ResourcesAmount";
import LimitedFoodGatheringSource from "../../model/LimitedFoodGatheringSource";
import LimitedFoodGatheringSourceService
    from "../limited-food-gathering-source-service/LimitedFoodGatheringSourceService";
import PassiveIncomeService from "../PassiveIncomeService";
import FoodSource from "../../model/FoodSource";
import PassiveGoldFromFoodVillagerModifier from "../../model/PassiveGoldFromFoodVillagerModifier";
import {CostModifiersPerUnitState} from "../../state/CostModifiersPerUnitSlice";
import ALL_COST_MODIFIERS_PER_UNIT from "../../data/cost-modifiers-per-unit/AllCostModifiersPerUnit";

class ProductionCalculatorService {
    private limitedFoodGatheringSourceService: LimitedFoodGatheringSourceService;
    private passiveIncomeService: PassiveIncomeService;

    constructor(limitedFoodGatheringSourceService: LimitedFoodGatheringSourceService,
                passiveIncomeService: PassiveIncomeService) {
        this.limitedFoodGatheringSourceService = limitedFoodGatheringSourceService;
        this.passiveIncomeService = passiveIncomeService;
    }

    calculateProductionVillagerCost(gatheringRates: GatheringRates,
                                    unitsSelected: { [key: string]: number },
                                    productionSpeedModifiers: ProductionSpeedModifier[],
                                    costModifiers: UnitCostModifier[],
                                    passiveIncome: ResourcesAmount,
                                    limitedFoodGatheringSources: LimitedFoodGatheringSource[],
                                    passiveGoldFromFoodVillagerModifiers: PassiveGoldFromFoodVillagerModifier[],
                                    foodSource: FoodSource,
                                    minFoodVillagers: number,
                                    costModifiersPerUnit: CostModifiersPerUnitState): ProductionVillagerCost {
        let resourcesNeeded = this.calculateResourcesNeededForUnitProduction(unitsSelected, productionSpeedModifiers, costModifiers, costModifiersPerUnit);

        resourcesNeeded = resourcesNeeded.subtractToZero(passiveIncome);

        let uniqueFoodSourceVillagers = this.limitedFoodGatheringSourceService.sendVillagersToUniqueSources(limitedFoodGatheringSources, resourcesNeeded);
        resourcesNeeded = resourcesNeeded.subtractToZero(uniqueFoodSourceVillagers.gatheringRate);

        let villagersCost = resourcesNeeded.divideByGatheringRate(gatheringRates);
        villagersCost.foodVillagers = Math.max(villagersCost.foodVillagers, minFoodVillagers);

        let passiveGoldFromFoodVillagers = this.passiveIncomeService.getPassiveGoldIncome(Math.ceil(villagersCost.foodVillagers), passiveGoldFromFoodVillagerModifiers, foodSource);
        resourcesNeeded = resourcesNeeded.subtractToZero(ResourcesAmount.of(0 , 0, passiveGoldFromFoodVillagers, 0));
        villagersCost = resourcesNeeded.divideByGatheringRate(gatheringRates);
        villagersCost.foodVillagers = Math.max(villagersCost.foodVillagers, minFoodVillagers);

        villagersCost.foodVillagers += uniqueFoodSourceVillagers.villagersCount;

        return villagersCost;
    }

    private calculateResourcesNeededForUnitProduction(unitsSelected: { [key: string]: number }, productionSpeedModifiers: ProductionSpeedModifier[], costModifiers: UnitCostModifier[], costModifiersPerUnit: CostModifiersPerUnitState): ResourcesAmount {
        return Object.keys(unitsSelected)
            .map(unitId => this.calculateUnitCostPerMinute(UNITS.get(unitId)!, unitsSelected[unitId], productionSpeedModifiers, costModifiers, costModifiersPerUnit))
            .reduce(
                (total: ResourcesAmount, unitCost: UnitCost) => total.add(ResourcesAmount.ofObj(unitCost)),
                new ResourcesAmount()
            );
    }

    private calculateUnitCostPerMinute(unit: Unit, count: number, productionSpeedModifiers: ProductionSpeedModifier[], costModifiers: UnitCostModifier[], costModifiersPerUnit: CostModifiersPerUnitState): UnitCost {
        let effectiveCost = costModifiers
            .filter(modifier => modifier.canBeApplied(unit))
            .reduce(
                (previousCost, modifier) => modifier.apply(previousCost),
                unit.cost
            );
        let effectiveProductionTime = productionSpeedModifiers
            .filter(modifier => modifier.canBeApplied(unit))
            .reduce(
                (previousTime, modifier) => previousTime - (unit.productionTime - modifier.apply(unit.productionTime)),
                unit.productionTime
            );

        let totalCost = new ResourcesAmount();
        for (let i = 0; i < count; i++) {
            let effectiveCostPerUnit = Object.keys(costModifiersPerUnit)
                .filter(modifierId => costModifiersPerUnit[modifierId][unit.id] > i)
                .reduce((previousCost, modifierId) => ALL_COST_MODIFIERS_PER_UNIT[modifierId].apply(previousCost),
                    effectiveCost);
            totalCost = totalCost.add(ResourcesAmount.ofObj(effectiveCostPerUnit));
        }

        return {
            food: totalCost.food * 60 / effectiveProductionTime,
            wood: totalCost.wood * 60 / effectiveProductionTime,
            gold: totalCost.gold * 60 / effectiveProductionTime,
            stone: totalCost.stone * 60 / effectiveProductionTime
        }
    }
}

export default ProductionCalculatorService;
