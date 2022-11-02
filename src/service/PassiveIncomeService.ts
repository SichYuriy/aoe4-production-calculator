import ResourcesAmount from "../model/ResourcesAmount";
import {PassiveIncomeModifiersState} from "../state/PassiveIncomeModifiersSlice";
import PASSIVE_INCOME_MODIFIERS from "../data/passive-income-modifiers/AllPassiveIncomeModifiers";

export default class PassiveIncomeService {
    getPassiveIncome(incomeModifiers: PassiveIncomeModifiersState): ResourcesAmount {
        return Object.values(incomeModifiers)
            .filter(modifierState => modifierState.count > 0)
            .map(modifierState => ResourcesAmount.ofObj(PASSIVE_INCOME_MODIFIERS[modifierState.id]).multiply(modifierState.count))
            .reduce((total, current) => total.add(current), new ResourcesAmount());
    }
}
