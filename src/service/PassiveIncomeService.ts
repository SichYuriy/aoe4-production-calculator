import ResourcesAmount from "../model/ResourcesAmount";
import {PassiveIncomeModifiersState} from "../state/PassiveIncomeModifiersSlice";
import PASSIVE_INCOME_MODIFIERS from "../data/passive-income-modifiers/AllPassiveIncomeModifiers";
import PassiveGoldFromFoodVillagerModifier from "../model/PassiveGoldFromFoodVillagerModifier";
import FoodSource from "../model/FoodSource";
import {PassiveIncomeSourcesState} from "../state/PassiveIncomeSourcesSlice";

export default class PassiveIncomeService {
    getPassiveIncome(incomeModifiers: PassiveIncomeModifiersState, sources: PassiveIncomeSourcesState): ResourcesAmount {
        return Object.values(incomeModifiers)
            .filter(modifierState => modifierState.selected)
            .filter(modifierState => sources[modifierState.id].count > 0)
            .map(modifierState => ResourcesAmount.ofObj(PASSIVE_INCOME_MODIFIERS[modifierState.id]).multiply(sources[modifierState.id].count))
            .reduce((total, current) => total.add(current), new ResourcesAmount());
    }

    getPassiveGoldIncome(foodVillagers: number, modifiers: PassiveGoldFromFoodVillagerModifier[], foodSource: FoodSource): number {
        return modifiers
            .filter(modifier => modifier.foodSources.includes(foodSource))
            .reduce((total: number, current: PassiveGoldFromFoodVillagerModifier) => total + current.gold * foodVillagers, 0)
    }

}
