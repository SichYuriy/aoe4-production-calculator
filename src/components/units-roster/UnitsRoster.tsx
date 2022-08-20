import s from './units-roster.module.css'
import Unit from "../../data/unit/Unit";
import Item from "../item/Item";
import {toggle, UnitsState} from "../../state/UnitsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";

function UnitsRoster(props: { units: Unit[] }) {
    const dispatch = useAppDispatch();
    const selectedUnits: UnitsState = useAppSelector((rootState) => rootState.units);

    function handleUnitClick(unit: Unit) {
        dispatch(toggle(unit.id));
    }

    return (
        <div>
            <div><h3>Units:</h3></div>
            <div className={s.unitsBlock}>
                {props.units.map(unit =>
                    <div key={unit.id} className={s.unitsBlockItem}>
                        <Item icon={unit.icon}
                              name={unit.name}
                              onClick={() => handleUnitClick(unit)}
                              selected={selectedUnits[unit.id] > 0}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UnitsRoster;
