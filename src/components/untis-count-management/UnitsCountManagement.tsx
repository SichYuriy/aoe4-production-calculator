import {useAppDispatch, useAppSelector} from "../../hooks";
import ItemCounter from "../item-counter/ItemCounter";
import {decrement, increment, UnitsState} from "../../state/UnitsSlice";
import {UNITS_LIST} from "../../data/unit/Units";
import s from './units-count-management.module.css'
import shared from '../../shared.module.css'

function UnitsCountManagement() {
    const dispatch = useAppDispatch();
    const selectedUnits: UnitsState = useAppSelector((rootState) => rootState.units);

    return (
        <div className={s.unitsCountManagement}>
            <div><h3>Production:</h3></div>
            <div className={s.countersBlock}>
                {UNITS_LIST.map(unit =>
                    <div key={unit.id}
                         className={`${s.countersBlockItem} ${selectedUnits[unit.id] > 0 ? '' : shared.hidden}`}>
                        <ItemCounter name={unit.name}
                                     icon={unit.icon}
                                     count={selectedUnits[unit.id] || 0}
                                     onIncrement={() => dispatch(increment(unit.id))}
                                     onDecrement={() => dispatch(decrement(unit.id))}
                                     disabled={unit.civilizationSpecificFeature}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UnitsCountManagement;
