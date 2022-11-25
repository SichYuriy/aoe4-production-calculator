import ResourcesAmount from "../model/ResourcesAmount";
import {PassiveIncomeModifiersState, PassiveIncomeModifierState} from "../state/PassiveIncomeModifiersSlice";
import PASSIVE_INCOME_MODIFIERS from "../data/passive-income-modifiers/AllPassiveIncomeModifiers";
import PassiveGoldFromFoodVillagerModifier from "../model/PassiveGoldFromFoodVillagerModifier";
import FoodSource from "../model/FoodSource";
import {PassiveIncomeSourcesState} from "../state/PassiveIncomeSourcesSlice";

export default class PassiveIncomeService {
    getPassiveIncome(incomeModifiers: PassiveIncomeModifiersState, sources: PassiveIncomeSourcesState): ResourcesAmount {
        function getSourceCount(modifierState: PassiveIncomeModifierState) {
            return sources[PASSIVE_INCOME_MODIFIERS[modifierState.id].source].count;
        }

        return Object.values(incomeModifiers)
            .filter(modifierState => modifierState.selected)
            .filter(modifierState => getSourceCount(modifierState) > 0)
            .map(modifierState => ResourcesAmount.ofObj(PASSIVE_INCOME_MODIFIERS[modifierState.id]).multiply(getSourceCount(modifierState)))
            .reduce((total, current) => total.add(current), new ResourcesAmount());
    }

    getPassiveGoldIncome(foodVillagers: number, modifiers: PassiveGoldFromFoodVillagerModifier[], foodSource: FoodSource): number {
        return modifiers
            .filter(modifier => modifier.foodSources.includes(foodSource))
            .reduce((total: number, current: PassiveGoldFromFoodVillagerModifier) => total + current.gold * foodVillagers, 0)
    }

}
