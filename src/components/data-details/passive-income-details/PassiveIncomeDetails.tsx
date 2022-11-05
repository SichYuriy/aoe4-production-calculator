import {useAppSelector} from "../../../hooks";
import {selectActivePassiveIncomeModifiers} from "../../../state/PassiveIncomeModifiersSlice";

function PassiveIncomeDetails() {
    const selectedModifiers = useAppSelector(selectActivePassiveIncomeModifiers);

    return (
        <div>
            <div>Passive income:</div>
            {selectedModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.food}, {modifier.wood}, {modifier.gold}, {modifier.stone})</div>
            )}
        </div>
    );
}

export default PassiveIncomeDetails;
