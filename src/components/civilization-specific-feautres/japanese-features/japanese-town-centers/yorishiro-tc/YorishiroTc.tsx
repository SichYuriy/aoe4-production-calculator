import UnitItemCounter from "../../../../unit-item-counter/UnitItemCounter";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {decrement, increment, UnitsState} from "../../../../../state/UnitsSlice";

function YorishiroTc() {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);


    function placeYorishiroInTc() {
        dispatch(increment('FLOATING_GATE_VILLAGER'));
        if (units['VILLAGER'] > 0) {
            dispatch(decrement('VILLAGER'));
        }
    }

    function removeYorishiroFromTc() {
        if (units['FLOATING_GATE_VILLAGER'] > 0) {
            dispatch(decrement('FLOATING_GATE_VILLAGER'));
            dispatch(increment('VILLAGER'));
        }
    }

    return <UnitItemCounter unitId={'FLOATING_GATE_VILLAGER'}
                            count={units['FLOATING_GATE_VILLAGER'] || 0}
                            onIncrement={placeYorishiroInTc}
                            onDecrement={removeYorishiroFromTc}/>;
}

export default YorishiroTc;