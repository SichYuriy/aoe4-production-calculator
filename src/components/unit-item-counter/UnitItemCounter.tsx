import Counter from "../counter/Counter";
import Tooltip from "../tooltip/Tooltip";
import UnitItem from "../unit-item/UnitItem";

type TooltipProps = {
    header: string,
    text: string
}

type Props = {
    unitId: string,
    count: number,
    maxCount?: number,
    onIncrement: () => any,
    onDecrement: () => any,
    tooltip?: TooltipProps
}

function UnitItemCounter(props: Props) {
    let unitItem = <UnitItem unitId={props.unitId} selected={false} disabled={true}/>;
    unitItem = props.tooltip
        ? <Tooltip header={props.tooltip.header} text={props.tooltip.text}>{unitItem}</Tooltip>
        : unitItem;

    return (
        <div>
            {unitItem}
            <Counter count={props.count} onIncrement={props.onIncrement} onDecrement={props.onDecrement} maxCount={props.maxCount}/>
        </div>
    );
}

export default UnitItemCounter;
