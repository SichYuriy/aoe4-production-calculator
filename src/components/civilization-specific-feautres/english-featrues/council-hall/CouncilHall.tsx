import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {decrement, increment, UnitsState} from "../../../../state/UnitsSlice";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import icon from "../../../../icons/council-hall.png";

function CouncilHall() {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);

    return (
        <UpgradeItem icon={icon}
                     selected={units['COUNCIL_HALL_LONGBOWMAN'] > 0}
                     onClick={units['COUNCIL_HALL_LONGBOWMAN'] > 0 ? () => dispatch(decrement('COUNCIL_HALL_LONGBOWMAN')) : () => dispatch(increment('COUNCIL_HALL_LONGBOWMAN'))}
                     tooltip={{header: 'Council hall', text: 'Produces longbowman with discount and with faster'}}/>
    );
}

export default CouncilHall;