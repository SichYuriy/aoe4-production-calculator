import {useAppSelector} from "../../../hooks";
import {selectActivePassiveIncomeModifiers} from "../../../state/PassiveIncomeModifiersSlice";
import {
    selectActivePassiveIncomeFromGatheringVillagerModifiers
} from "../../../state/PassiveIncomeFromGatheringVillagerModifiersSlice";
import { selectActiveDynamicPassiveIncomeModifiers } from "../../../state/DynamicPassiveIncomeModifiersSlice";
import DYNAMIC_PASSIVE_INCOME_MODIFIERS from "../../../data/dynamic-passive-income-modifiers/AllDynamicPassiveIncomeModifiers";

function PassiveIncomeDetails() {
    const passiveIncomeSources = useAppSelector(rootState => rootState.passiveIncomeSources);
    const selectedPassiveModifiers = useAppSelector(selectActivePassiveIncomeModifiers)
        .filter(modifier => passiveIncomeSources[modifier.source].count > 0);
    const selectedDynamicPassiveModifiers = useAppSelector(selectActiveDynamicPassiveIncomeModifiers)
        .filter(modifier => passiveIncomeSources[DYNAMIC_PASSIVE_INCOME_MODIFIERS[modifier.id].source].count > 0);
    const selectedPassiveIncomeFromGatheringVillagerModifiers = useAppSelector(selectActivePassiveIncomeFromGatheringVillagerModifiers)

    return (
        <div>
            <div>Passive income:</div>
            {selectedPassiveModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.food}, {modifier.wood}, {modifier.gold}, {modifier.stone})</div>
            )}
            {selectedDynamicPassiveModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.value.food}, {modifier.value.wood}, {modifier.value.gold}, {modifier.value.stone})</div>
            )}
            {selectedPassiveIncomeFromGatheringVillagerModifiers.map(modifier =>
                <div key={modifier.id}>
                    {modifier.id}: ({modifier.incomeAmount.food}, {modifier.incomeAmount.wood}, {modifier.incomeAmount.gold},
                    {modifier.incomeAmount.stone})
                </div>
            )}
        </div>
    );
}

export default PassiveIncomeDetails;
