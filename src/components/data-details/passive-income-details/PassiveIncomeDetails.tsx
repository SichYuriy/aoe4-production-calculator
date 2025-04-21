import {useAppSelector} from "../../../hooks";
import {selectActivePassiveIncomeModifiers} from "../../../state/PassiveIncomeModifiersSlice";
import {
    selectActivePassiveIncomeFromGatheringVillagerModifiers
} from "../../../state/PassiveIncomeFromGatheringVillagerModifiersSlice";
import { selectActiveDynamicassiveIncomeModifiers } from "../../../state/DynamicPassiveIncomeModifiersSlice";

function PassiveIncomeDetails() {
    const passiveIncomeSources = useAppSelector(rootState => rootState.passiveIncomeSources);
    const selectedPassiveModifiers = useAppSelector(selectActivePassiveIncomeModifiers)
        .filter(modifier => passiveIncomeSources[modifier.source].count > 0);
    const selectedDynamicPassiveModifiers = useAppSelector(selectActiveDynamicassiveIncomeModifiers)
        .filter(modifier => passiveIncomeSources[modifier.source].count > 0);
    const selectedPassiveIncomeFromGatheringVillagerModifiers = useAppSelector(selectActivePassiveIncomeFromGatheringVillagerModifiers)

    return (
        <div>
            <div>Passive income:</div>
            {selectedPassiveModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.food}, {modifier.wood}, {modifier.gold}, {modifier.stone})</div>
            )}
            {selectedDynamicPassiveModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.default.food}, {modifier.default.wood}, {modifier.default.gold}, {modifier.default.stone})</div>
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
