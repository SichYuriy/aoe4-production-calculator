import CostModifierPerUnitId from "../../../data/cost-modifiers-per-unit/CostModifierPerUnitId";
import shared from "../../../shared.module.css";
import ArrowCounter from "../../arrow-counter/ArrowCounter";
import s from "./cost-modifer-per-units-feauter.module.css";
import Tooltip from "../../tooltip/Tooltip";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {UnitsState} from "../../../state/UnitsSlice";
import {
    clearUnitsForCostModifier,
    decrementUnitForCostModifier,
    incrementUnitForCostModifier, setUnitsForCostModifier,
    UnitsSelected
} from "../../../state/CostModifiersPerUnitSlice";
import UnitItemCounter from "../../unit-item-counter/UnitItemCounter";

interface Props {
    modifierId: CostModifierPerUnitId,
    icon: any,
    tooltip: {
        header?: string,
        text: string
    }
}

function CostModifierPerUnitFeature(props: Props) {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);
    const selectedUnits: UnitsSelected = useAppSelector(rootState => rootState.costModifiersPerUnit)[props.modifierId] || {};
    const selectedTotalCount = Object.keys(selectedUnits)
        .filter(unitId => Object.keys(units).includes(unitId))
        .map(unitId => Math.min(selectedUnits[unitId], units[unitId]))
        .reduce((a, b) => a + b, 0);
    const maxCount = Object.values(units).reduce((a, b) => a + b, 0);
    let unitCounters = Object.keys(units).map(unitId => {
        let currentCount = selectedUnits[unitId] || 0;
        let maxCount = units[unitId]
        return <UnitItemCounter key={unitId} unitId={unitId} count={currentCount}  maxCount={maxCount}
                                onIncrement={() => currentCount < maxCount && dispatch(incrementUnitForCostModifier({modifierId: props.modifierId, unitId}))}
                                onDecrement={() => currentCount > 0 && dispatch(decrementUnitForCostModifier({modifierId: props.modifierId, unitId}))}/>
    });

    return (
        <div className={s.costModifierBlock}>
            <div>
                <Tooltip text={props.tooltip.text} header={props.tooltip.header}>
                    <div>
                        <img className={shared.civilizationSpecificFeatureIcon} src={props.icon} alt={'icon'}/>
                    </div>
                </Tooltip>
                <ArrowCounter count={selectedTotalCount} maxCount={maxCount}
                              onIncrement={() => dispatch(setUnitsForCostModifier({modifierId: props.modifierId, unitsSelected: units}))}
                              onDecrement={() => dispatch(clearUnitsForCostModifier(props.modifierId))} />
            </div>
            <div className={s.colons}>:</div>
            {unitCounters}
        </div>
    );
}

export default CostModifierPerUnitFeature;