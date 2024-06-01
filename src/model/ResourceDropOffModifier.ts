import GatheringRates from "./GatheringRates";

export default interface ResourceDropOffModifier {
    id: string,
    dropOffPercentage: GatheringRates
}