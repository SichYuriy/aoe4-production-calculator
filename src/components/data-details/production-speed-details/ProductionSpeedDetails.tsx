import {useAppSelector} from "../../../hooks";
import {selectActiveProductionSpeedModifiers} from "../../../state/ProducationSpeedModifiersSlice";

function ProductionSpeedDetails() {
    const productionSpeedModifiers = useAppSelector(selectActiveProductionSpeedModifiers);

    return (
        <div>
            <div>Production Speed:</div>
            {productionSpeedModifiers.map(modifier =>
                <div key={modifier.id}>{modifier.id}: ({modifier.productionSpeedBonus * 100 + '%'})</div>
            )}
        </div>
    );
}

export default ProductionSpeedDetails;
