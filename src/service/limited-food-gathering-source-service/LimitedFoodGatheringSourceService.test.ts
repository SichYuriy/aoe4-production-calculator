import LimitedFoodGatheringSourceService from "./LimitedFoodGatheringSourceService";
import GatheringRatesService from "../GatheringRatesService";
import LimitedFoodGatheringSourceModifierId
    from "../../data/limited-food-gathering-source-modifiers/LimitedFoodGatheringSourceModifierId";
import ResourcesAmount from "../../model/ResourcesAmount";
import {LimitedFoodGatheringSourceModifierState} from "../../state/LimitedFoodGatheringSourceModifiersSlice";
import LimitedFoodGatheringSource from "../../model/LimitedFoodGatheringSource";
import GATHERING_RATES_MODIFIERS from "../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import GatheringRateModifierId from "../../data/gathering-rate-modifiers/GatheringRateModifierId";

describe('LimitedFoodGatheringSourceService', () => {
    let gatheringRatesService: GatheringRatesService;
    let subject: LimitedFoodGatheringSourceService;

    beforeEach(() => {
        gatheringRatesService = new GatheringRatesService();
        subject = new LimitedFoodGatheringSourceService(gatheringRatesService);
    });

    describe('getAvailableGatheringSources', () => {
        let selectedSources: LimitedFoodGatheringSourceModifierState[];

        beforeEach(() => {
            selectedSources = [{
                id: LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE,
                selected: true
            }];
        });

        it('no upgrades', () => {
            let actual = subject.getAvailableGatheringSources(selectedSources, [], []);

            expect(actual.length).toEqual(1);
            expect(actual[0].maxVillagers).toEqual(5);
            expect(actual[0].effectiveGatheringRate).toBeCloseTo(50);
        });

        it('tier 1 upgrade', () => {
            let actual = subject.getAvailableGatheringSources(selectedSources, [
                GATHERING_RATES_MODIFIERS[GatheringRateModifierId.HORTICULTURE]
            ], []);

            expect(actual.length).toEqual(1);
            expect(actual[0].maxVillagers).toEqual(4);
            expect(actual[0].effectiveGatheringRate).toBeCloseTo(55);
        });

        it('tier 2 upgrade', () => {
            let actual = subject.getAvailableGatheringSources(selectedSources, [
                GATHERING_RATES_MODIFIERS[GatheringRateModifierId.HORTICULTURE],
                GATHERING_RATES_MODIFIERS[GatheringRateModifierId.FERTILIZATION]
            ], []);

            expect(actual.length).toEqual(1);
            expect(actual[0].maxVillagers).toEqual(4);
            expect(actual[0].effectiveGatheringRate).toBeCloseTo(60.1425);
        });

        it( 'tier 3 upgrade', () => {
            let actual = subject.getAvailableGatheringSources(selectedSources, [
                GATHERING_RATES_MODIFIERS[GatheringRateModifierId.HORTICULTURE],
                GATHERING_RATES_MODIFIERS[GatheringRateModifierId.FERTILIZATION],
                GATHERING_RATES_MODIFIERS[GatheringRateModifierId.CROSS_BREEDING]
            ], []);

            expect(actual.length).toEqual(1);
            expect(actual[0].maxVillagers).toEqual(4);
            expect(actual[0].effectiveGatheringRate).toBeCloseTo(65.36888);
        });
    });

    describe('sendVillagersToUniqueSources', () => {
        let sources: LimitedFoodGatheringSource[];
        beforeEach(function () {
             sources = subject.getAvailableGatheringSources([{
                 id: LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE,
                 selected: true
             }], [], []);
        });

        it('when limited source is not enough to cover needs', () => {
            let actual = subject.sendVillagersToUniqueSources(sources, ResourcesAmount.of(300, 10, 10, 10));

            expect(actual.gatheringRate).toEqual(ResourcesAmount.of(250, 0, 0, 0));
            expect(actual.villagersCount).toEqual(5);
        })

        it('when limited source is more than enough to cover needs', () => {
            let actual = subject.sendVillagersToUniqueSources(sources, ResourcesAmount.of(75, 10, 10, 10));

            expect(actual.gatheringRate).toEqual(ResourcesAmount.of(100, 0, 0, 0));
            expect(actual.villagersCount).toEqual(2);
        })

        it('when multiple sources', () => {
            let availableSource: LimitedFoodGatheringSource[] = [
                {
                    effectiveGatheringRate: 50,
                    maxVillagers: 3
                },

                {
                    effectiveGatheringRate: 60,
                    maxVillagers: 2
                },
            ];

            let actual = subject.sendVillagersToUniqueSources(availableSource, ResourcesAmount.of(150, 0, 0, 0));
            expect(actual.villagersCount).toEqual(3);
            expect(actual.gatheringRate).toEqual(ResourcesAmount.of(170, 0, 0, 0));
        });
    });
});


