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

describe('ProductionCalculatorService', () => {
    let subject: ProductionCalculatorService;

    beforeEach(() => {
        let limitedFoodGatheringSourceService = new LimitedFoodGatheringSourceService(new GatheringRatesService());
        subject = new ProductionCalculatorService(limitedFoodGatheringSourceService);
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
                ['VILLAGER']: 1,
                ['ARCHER']: 1,
                ['SPEARMAN']: 1,
                ['KNIGHT']: 1,
            };

        });

        it('no modifiers', () => {
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [], new ResourcesAmount(), []);
            expect(actual.foodVillagers).toBeCloseTo(18.75);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(4.2857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one productionSpeedModifier', () => {
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]], [], new ResourcesAmount(), [])
            expect(actual.foodVillagers).toBeCloseTo(20.25);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(5.3571);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one costModifier', () => {
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [COST_MODIFIERS[CostModifierId.FRENCH_CASTLE]], new ResourcesAmount(), [])
            expect(actual.foodVillagers).toBeCloseTo(16.95);
            expect(actual.woodVillagers).toBeCloseTo(6);
            expect(actual.goldVillagers).toBeCloseTo(3.4285);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('one passiveIncomeModifier', () => {
            let passiveIncome = ResourcesAmount.of(0, 0, 100, 0);
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [], [], passiveIncome, [])
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
                [], [], new ResourcesAmount(), [limitedFoodGatheringSource]);
            expect(actual.foodVillagers).toBeCloseTo(17.5);
            expect(actual.woodVillagers).toBeCloseTo(7);
            expect(actual.goldVillagers).toBeCloseTo(4.2857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });

        it('all together', () => {
            let passiveIncome = ResourcesAmount.of(0, 0, 100, 0);
            let limitedFoodGatheringSource: LimitedFoodGatheringSource = {
                maxVillagers: 5,
                effectiveGatheringRate: 50
            };
            let actual = subject.calculateProductionVillagerCost(gatheringRates, unitsSelected,
                [PRODUCTION_SPEED_MODIFIERS[ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]],
                [COST_MODIFIERS[CostModifierId.FRENCH_CASTLE]],
                passiveIncome,
                [limitedFoodGatheringSource]);
            expect(actual.foodVillagers).toBeCloseTo(16.9);
            expect(actual.woodVillagers).toBeCloseTo(6);
            expect(actual.goldVillagers).toBeCloseTo(1.7857);
            expect(actual.stoneVillagers).toBeCloseTo(0);
        });
    });
});