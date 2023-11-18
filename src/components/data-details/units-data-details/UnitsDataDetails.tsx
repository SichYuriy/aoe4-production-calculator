import {useAppSelector} from "../../../hooks";
import UNITS from "../../../data/unit/Units";
import Unit from "../../../model/Unit";

function UnitsDataDetails() {
    const selectedUnits = useAppSelector(rootState => rootState.units);
    const units: Unit[] = Object.keys(selectedUnits).map(id => UNITS.get(id)!);

    return (
        <div>
            <div>Units:</div>
            {units.map(unit =>
                <div key={unit.id}>{unit.id}: ({unit.cost.food.toFixed(0)}, {unit.cost.wood.toFixed(0)}, {unit.cost.gold.toFixed(0)}) {unit.productionTime.toFixed(0)}s</div>
            )}
        </div>
    );
}

export default UnitsDataDetails;
