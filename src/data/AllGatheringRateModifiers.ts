import GatheringRateModifier from "../model/GatheringRateModifier";
import FoodSource from "../model/FoodSource";

const GATHERING_RATES_MODIFIERS: { [key: string]: GatheringRateModifier } = {
    WHEELBARROW: {
        id: 'WHEELBARROW',
        apply: (rates, foodSource) => {
            let foodMultiplier = [FoodSource.BERRY, FoodSource.DEER].includes(foodSource) ? 1.0952 : 1.01;
            return {
                food: rates.food * foodMultiplier,
                wood: rates.wood * 1.07,
                gold: rates.gold * 1.07,
                stone: rates.stone * 1.07
            };
        }
    }
}

export default GATHERING_RATES_MODIFIERS;
