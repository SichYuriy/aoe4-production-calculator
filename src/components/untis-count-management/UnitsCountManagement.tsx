import {useAppDispatch, useAppSelector} from "../../hooks";
import {shallowEqual} from "react-redux";
import ItemCounter from "../item-counter/ItemCounter";
import {decrement, increment, UnitsState} from "../../state/unitsSlice";
import Units from "../../data/unit/Units";
import './units-count-management.css'

function UnitsCountManagement() {
    const dispatch = useAppDispatch();
    const selectedUnits: UnitsState = useAppSelector((rootState) => rootState.units, shallowEqual);

    let unitAndCountList = Object.entries(selectedUnits)
        .map(([unitId, unitCount]) => ({unit: Units.get(unitId)!, count: unitCount}));

    return (
        <div className={'units-count-management'}>
            {unitAndCountList.map(({unit, count}) =>
                <div key={unit.id} className={'units-count-management__item'}>
                    <ItemCounter name={unit.name}
                                 icon={unit.icon}
                                 count={count}
                                 onIncrement={() => dispatch(increment(unit.id))}
                                 onDecrement={() => dispatch(decrement(unit.id))}/>
                </div>

            )}
        </div>
    );
}

export default UnitsCountManagement;
