import PassiveIncomeSource from "../data/passive-income-modifiers/PassiveIncomeSource";

export default interface PassiveIncomeModifier {
    id: string;
    food: number;
    gold: number;
    wood: number;
    stone: number;
    source: PassiveIncomeSource;
}
