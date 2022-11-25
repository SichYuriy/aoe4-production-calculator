import {useAppSelector} from "../../../hooks";
import {selectActivePassiveIncomeModifiers} from "../../../state/PassiveIncomeModifiersSlice";
import {
    selectActivePassiveGoldFromFoodVillagerModifiers
} from "../../../state/PassiveGoldFromFoodVillagerModifiersSlice";

function PassiveIncomeDetails() {
    const passiveIncomeSources = useAppSelector(rootState => rootState.passiveIncomeSources);
    const selectedModifiers = useAppSelector(selectActivePassiveIncomeModifiers)
        .filter(modifier => passiveIncomeSources[modifier.source].count > 0);
    const selectedPassiveGoldFromFoodVillagerModifiers = useAppSelector(selectActivePassiveGoldFromFoodVillagerModifiers)

    return (
        <div>
            <div>Passive income:</div>
            {selectedModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.food}, {modifier.wood}, {modifier.gold}, {modifier.stone})</div>
            )}
            {selectedPassiveGoldFromFoodVillagerModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: (0, 0, {modifier.gold}, 0)</div>
            )}
        </div>
    );
}

export default PassiveIncomeDetails;
