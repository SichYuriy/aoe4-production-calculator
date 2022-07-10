import {useAppSelector} from "../../hooks";
import {shallowEqual} from "react-redux";

function ProductionCalculator() {
    const selectedUnits = useAppSelector((rootState) => rootState.units, shallowEqual);
    return (
        <div>{JSON.stringify(selectedUnits)}</div>
    );
}

export default ProductionCalculator;
