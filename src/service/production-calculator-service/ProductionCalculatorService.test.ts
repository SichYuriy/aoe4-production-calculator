import ProductionCalculatorService from "./ProductionCalculatorService";
import LimitedFoodGatheringSourceService
    from "../limited-food-gathering-source-service/LimitedFoodGatheringSourceService";
import GatheringRatesService from "../GatheringRatesService";
import GatheringRates from "../../model/GatheringRates";
import ResourcesAmount from "../../model/ResourcesAmount";
import PRODUCTION_SPEED_MODIFIERS from "../../data/production-speed-modifiers/AllProductionSpeedModifiers";
import ProductionSpeedModifierId from "../../data/production-speed-modifiers/ProductionSpeedModifierId";
import COST_MODIFIERS from "../../data/cost-modifiers/AllCostModifiers";
import CostModifierId from "../../data/cost-modifiers/CostModifierId";
import LimitedFoodGatheringSource from "../../model/LimitedFoodGatheringSource";
import PassiveIncomeService from "../PassiveIncomeService";
import FoodSource from "../../model/FoodSource";
import PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS
    from "../../data/passive-income-from-gathering-vilager-modifiers/AllPassiveIncomeFromGatheringVillagerModifiers";
import PassiveIncomeFromGatheringVillagerModifierId
    from "../../data/passive-income-from-gathering-vilager-modifiers/PassiveIncomeFromGatheringVillagerModifierId";

describe('ProductionCalculatorService', () => {
    let subject: ProductionCalculatorService;

    beforeEach(() => {
        let limitedFoodGatheringSourceService = new LimitedFoodGatheringSourceService(new GatheringRatesService());
        let passiveIncomeService = new PassiveIncomeService();
        subject = new ProductionCalculatorService(limitedFoodGatheringSourceService, passiveIncomeService);
    });

    describe('modifiers', () => {
        let gatheringRates: GatheringRates;
        let unitsSelected: { [key: string]: number };
        beforeEach(() => {
            gatheringRates = {
                food: 40,
                gold: 40,
                wood: 40,
                stone: 40
            };
            unitsSelected = {
                'VILLAGER': 1,
                'ARCHER': 1,
                'SPEARMAN': 1,
                'KNIGHT': 1,
            };

        });

        it('no modifiers', () => {
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [], new ResourcesAmount(), new ResourcesAmount(), [], [], FoodSource.FARM, 0, {});
            expect(actual.foodVillagers).toBeCloseTo(18.75);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(4.2857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one productionSpeedModifier', () => {
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]], [], new ResourcesAmount(), new ResourcesAmount(), [], [], FoodSource.FARM, 0, {})
            expect(actual.foodVillagers).toBeCloseTo(19.95);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(5.1428);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('multiple productionSpeedModifier should be multiplicative', () => {
            let actual = subject.calculateProductionVillagerCost(
                gatheringRates,
                {'WHITE_TOWER_MAN_AT_ARMS': 1},
                [
                    PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.ENGLISH_MMA],
                    PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.WHITE_TOWER],
                    PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.MILITARY_ACADEMY]
                ],
                [], new ResourcesAmount(), new ResourcesAmount(), [], [], FoodSource.FARM, 0, {})
            expect(actual.foodVillagers).toBeCloseTo(23.275);
            expect(actual.woodVillagers).toBeCloseTo(0);
            expect(actual.goldVillagers).toBeCloseTo(4.655);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one costModifier', () => {
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [COST_MODIFIERS[CostModifierId.FRENCH_CASTLE]], new ResourcesAmount(), new ResourcesAmount(), [], [], FoodSource.FARM, 0, {})
            expect(actual.foodVillagers).toBeCloseTo(16.95);
            expect(actual.woodVillagers).toBeCloseTo(6);
            expect(actual.goldVillagers).toBeCloseTo(3.4285);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one passiveIncomeModifier', () => {
            let passiveIncome = ResourcesAmount.of(0, 0, 100, 0);
            let dynamicPassiveIncome = ResourcesAmount.of(0, 0, 0, 0);
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [], passiveIncome, dynamicPassiveIncome, [], [], FoodSource.FARM, 0, {})
            expect(actual.foodVillagers).toBeCloseTo(18.75);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(1.7857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one limitedFoodGatheringSource', () => {
            let limitedFoodGatheringSource: LimitedFoodGatheringSource = {
                maxVillagers: 5,
                effectiveGatheringRate: 50
            };

            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [], new ResourcesAmount(), new ResourcesAmount(), [limitedFoodGatheringSource], [], FoodSource.FARM, 0, {});
            expect(actual.foodVillagers).toBeCloseTo(17.5);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(4.2857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one passiveIncomeFromGatheringVillager', () => {
            unitsSelected = {
                'VILLAGER': 1,
                'KNIGHT': 1
            }
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [], new ResourcesAmount(), new ResourcesAmount(), [],
                [PASSIVE_INCOME_FROM_GATHERING_VILLAGER_MODIFIERS[PassiveIncomeFromGatheringVillagerModifierId.ENCLOSURES]], FoodSource.FARM, 0, {});

            expect(actual.foodVillagers).toBeCloseTo(9.75);
            expect(actual.woodVillagers).toBeCloseTo(0);
            expect(actual.goldVillagers).toBeCloseTo(1.7857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('all together', () => {
            let passiveIncome = ResourcesAmount.of(0, 0, 100, 0);
            let dynamicPassiveIncome = ResourcesAmount.of(0, 0, 0, 0);
            let limitedFoodGatheringSource: LimitedFoodGatheringSource = {
                maxVillagers: 5,
                effectiveGatheringRate: 50
            };
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]],
                [COST_MODIFIERS[CostModifierId.FRENCH_CASTLE]],
                passiveIncome,
                dynamicPassiveIncome,
                [limitedFoodGatheringSource],
                [], FoodSource.FARM, 0, {});
            expect(actual.foodVillagers).toBeCloseTo(16.66);
            expect(actual.woodVillagers).toBeCloseTo(6);
            expect(actual.goldVillagers).toBeCloseTo(1.61161);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });
    });
});
