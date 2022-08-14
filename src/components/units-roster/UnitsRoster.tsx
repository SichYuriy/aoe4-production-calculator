import './units-roster.css'
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
            <div className={'units-block'}>
                {props.units.map(unit =>
                    <div key={unit.id} className={'units-block__item'}>
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
