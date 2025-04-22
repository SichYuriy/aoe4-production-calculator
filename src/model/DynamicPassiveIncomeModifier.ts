import PassiveIncomeSource from "../data/passive-income-modifiers/PassiveIncomeSource";
import GatheringRates from "./GatheringRates";

export default interface DynamicPassiveIncomeModifier {
    id: string;
    default: GatheringRates;
    source: PassiveIncomeSource;
}
