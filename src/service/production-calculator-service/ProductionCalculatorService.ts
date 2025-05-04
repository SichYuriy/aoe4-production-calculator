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
import PassiveIncomeFromGatheringVillagerModifier from "../../model/PassiveIncomeFromGatheringVillagerModifier";
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
                                    dynamicPassiveIncome: ResourcesAmount,
                                    limitedFoodGatheringSources: LimitedFoodGatheringSource[],
                                    passiveIncomeFromGatheringVillagerModifiers: PassiveIncomeFromGatheringVillagerModifier[],
                                    foodSource: FoodSource,
                                    minFoodVillagers: number,
                                    costModifiersPerUnit: CostModifiersPerUnitState): ProductionVillagerCost {
        let resourcesNeeded = this.calculateResourcesNeededForUnitProduction(unitsSelected, productionSpeedModifiers, costModifiers, costModifiersPerUnit);

        resourcesNeeded = resourcesNeeded.subtractToZero(passiveIncome);
        resourcesNeeded = resourcesNeeded.subtractToZero(dynamicPassiveIncome);

        let uniqueFoodSourceVillagers = this.limitedFoodGatheringSourceService.sendVillagersToUniqueSources(limitedFoodGatheringSources, resourcesNeeded);
        resourcesNeeded = resourcesNeeded.subtractToZero(uniqueFoodSourceVillagers.gatheringRate);

        let villagersCost = resourcesNeeded.divideByGatheringRate(gatheringRates);
        villagersCost.foodVillagers = Math.max(villagersCost.foodVillagers, minFoodVillagers);


        let passiveIncomeFromGatheringVillagers: ResourcesAmount = this.passiveIncomeService
            .getPassiveIncomeFromGatheringVillagers(villagersCost, passiveIncomeFromGatheringVillagerModifiers, foodSource);
        resourcesNeeded = resourcesNeeded.subtractToZero(passiveIncomeFromGatheringVillagers);
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
            .filter(modifier => modifier.canBeApplied(unit) && !unit.notAffectedByModifiers)
            .reduce(
                (previousCost, modifier) => modifier.apply(previousCost),
                unit.cost
            );
        let totalProductionSpeedBonus = productionSpeedModifiers
            .filter(modifier => modifier.canBeApplied(unit) && !unit.notAffectedByModifiers)
            .reduce(
                (total, modifier) => total * (1 + modifier.productionSpeedBonus),
                1
            );
        let effectiveProductionTime = unit.productionTime  / totalProductionSpeedBonus;

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
