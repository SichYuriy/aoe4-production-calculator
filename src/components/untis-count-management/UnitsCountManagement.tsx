import {useAppDispatch, useAppSelector} from "../../hooks";
import ItemCounter from "../item-counter/ItemCounter";
import {decrement, increment, UnitsState} from "../../state/UnitsSlice";
import UNITS from "../../data/unit/Units";
import './units-count-management.css'

function UnitsCountManagement() {
    const dispatch = useAppDispatch();
    const selectedUnits: UnitsState = useAppSelector((rootState) => rootState.units);

    let unitAndCountList = Object.entries(selectedUnits)
        .map(([unitId, unitCount]) => ({unit: UNITS.get(unitId)!, count: unitCount}));

    return (
        <div>
            <div><h3>Production:</h3></div>
            <div className={'counters-block'}>
                {unitAndCountList.map(({unit, count}) =>
                    <div key={unit.id} className={'counters-block__item'}>
                        <ItemCounter name={unit.name}
                                     icon={unit.icon}
                                     count={count}
                                     onIncrement={() => dispatch(increment(unit.id))}
                                     onDecrement={() => dispatch(decrement(unit.id))}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UnitsCountManagement;
