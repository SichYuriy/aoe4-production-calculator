import CivilizationsDropdown from "../civiliztions-dropdown/CivilizationsDropdown";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import CivilizationsEnum from "../../../data/CivilizationsEnum";
import changeCivilization from "../../../state/actions/CivilizationChnagedAction";

function GlobalCivilizationSelect() {
    const dispatch = useAppDispatch();
    const civilization: CivilizationsEnum = useAppSelector((rootState) => rootState.civilization.selected);

    return (
        <CivilizationsDropdown selected={civilization} onSelect={newCivilization => dispatch(changeCivilization(newCivilization))}/>
    );
}

export default GlobalCivilizationSelect;
