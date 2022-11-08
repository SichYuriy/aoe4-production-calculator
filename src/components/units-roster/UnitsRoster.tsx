import s from './units-roster.module.css'
import Unit from "../../model/Unit";
import Item from "../item/Item";
import {toggle, UnitsState} from "../../state/UnitsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import CivilizationsEnum from "../../data/CivilizationsEnum";
import shared from '../../shared.module.css';

function UnitsRoster(props: { allUnits: Unit[] }) {
    let units: Unit[] = props.allUnits.filter(unit => !unit.civilizationSpecificFeature);
    const dispatch = useAppDispatch();
    const selectedUnits: UnitsState = useAppSelector((rootState) => rootState.units);
    const selectedCivilization: CivilizationsEnum = useAppSelector((rootState) => rootState.civilization.selected);

    function handleUnitClick(unit: Unit) {
        dispatch(toggle(unit.id));
    }

    function availableByCivilization(unit: Unit): boolean {
        return (selectedCivilization === CivilizationsEnum.RANDOM && unit.common)
            || unit.civilizations.includes(selectedCivilization);
    }

    return (
        <div>
            <div><h3>Units:</h3></div>
            <div className={s.unitsBlock}>
                {units.map(unit =>
                    <div key={unit.id} className={`${s.unitsBlockItem} ${availableByCivilization(unit) ? '' : shared.hidden}`}>
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
