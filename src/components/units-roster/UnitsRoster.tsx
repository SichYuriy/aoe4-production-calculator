import './units-roster.css'
import Unit from "../../data/unit/Unit";
import Item from "../item/Item";
import {toggle} from "../../state/UnitsSlice";
import {useAppDispatch} from "../../hooks";

function UnitsRoster(props: {units: Unit[]}) {
    const dispatch = useAppDispatch();

    function handleUnitClick(unit: Unit) {
        dispatch(toggle(unit.id));
    }

    return (
        <div className={'units-roster'}>
            {props.units.map(unit =>
                <div key={unit.id} className={'units-roster__item'}>
                    <Item icon={unit.icon} name={unit.name} onClick={() => handleUnitClick(unit)}/>
                </div>
            )}
        </div>
    );
}

export default UnitsRoster;
