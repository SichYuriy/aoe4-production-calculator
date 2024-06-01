import GatheringRates from "./GatheringRates";

export default interface ResourceDropOffModifier {
    id: string,
    getDropOffPercentage: (allSelectedModifiers: string[]) => GatheringRates
}