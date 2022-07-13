import GatheringRates from "./GatheringRates";

export default interface GatheringRateModifier {
    apply: (gatheringRates: GatheringRates) => GatheringRates;
}
