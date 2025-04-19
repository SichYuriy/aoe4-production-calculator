import ResourcesAmount from "../model/ResourcesAmount";
import {PassiveIncomeModifiersState, PassiveIncomeModifierState} from "../state/PassiveIncomeModifiersSlice";
import PASSIVE_INCOME_MODIFIERS from "../data/passive-income-modifiers/AllPassiveIncomeModifiers";
import PassiveIncomeFromGatheringVillagerModifier from "../model/PassiveIncomeFromGatheringVillagerModifier";
import FoodSource from "../model/FoodSource";
import {PassiveIncomeSourcesState} from "../state/PassiveIncomeSourcesSlice";
import ProductionVillagerCost from "../model/ProductionVillagerCost";
import {ResourceType} from "../model/ResourceType";

export default class PassiveIncomeService {
    getPassiveIncome(incomeModifiers: PassiveIncomeModifiersState, sources: PassiveIncomeSourcesState): ResourcesAmount {
        function getSourceCount(modifierState: PassiveIncomeModifierState) {
            return sources[PASSIVE_INCOME_MODIFIERS[modifierState.id].source].count;
        }

        return Object.values(incomeModifiers)
            .filter(modifierState => modifierState.selected)
            .filter(modifierState => getSourceCount(modifierState) > 0)
            .map(modifierState => ResourcesAmount.ofObj(PASSIVE_INCOME_MODIFIERS[modifierState.id]).multiplyByNumber(getSourceCount(modifierState)))
            .reduce((total, current) => total.add(current), new ResourcesAmount());
    }

    getPassiveIncomeFromGatheringVillagers(villagersCost: ProductionVillagerCost, modifiers: PassiveIncomeFromGatheringVillagerModifier[],
                                           foodSource: FoodSource): ResourcesAmount {
        return modifiers.map(modifier => {
            const villagersCount = getVillagersCount(villagersCost, modifier, foodSource);
            return ResourcesAmount.ofObj(modifier.incomeAmount)
                .multiplyByNumber(villagersCount);
        }).reduce((a, b) => a.add(b), ResourcesAmount.ofZero())
    }

}

function getVillagersCount(villagersCost: ProductionVillagerCost,
                           modifier: PassiveIncomeFromGatheringVillagerModifier,
                           foodSource: FoodSource) {
    if (modifier.gatheringResource === ResourceType.FOOD && modifier.foodSources.includes(foodSource)) {
        return Math.ceil(villagersCost.foodVillagers);
    } else if (modifier.gatheringResource === ResourceType.WOOD) {
        return Math.ceil(villagersCost.woodVillagers);
    } else if (modifier.gatheringResource === ResourceType.GOLD) {
        return Math.ceil(villagersCost.goldVillagers);
    } else if (modifier.gatheringResource === ResourceType.STONE) {
        return Math.ceil(villagersCost.stoneVillagers);
    }
    return 0;
}
