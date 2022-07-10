import './units-roster.css'
import Unit from "../../data/unit/Unit";
import Item from "../item/Item";

function UnitsRoster(props: {units: Unit[]}) {
    return (
        <div className={'units-roster'}>
            {props.units.map(unit => (
                <div className={'units-roster__item'}><Item icon={unit.icon} name={unit.name}/></div>
            ))}
        </div>
    );
}

export default UnitsRoster;
