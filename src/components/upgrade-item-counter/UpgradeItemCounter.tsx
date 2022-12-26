import UpgradeItem from "../upgrade-item/UpgradeItem";
import Counter from "../counter/Counter";
import Tooltip from "../tooltip/Tooltip";

type TooltipProps = {
    header: string,
    text: string
}

type Props = {
    icon: string,
    count: number,
    onIncrement: () => any,
    onDecrement: () => any,
    tooltip?: TooltipProps
}

function UpgradeItemCounter(props: Props) {
     let upgradeItem = <UpgradeItem icon={props.icon} selected={props.count > 0} disabled={true}/>;
     upgradeItem = props.tooltip
         ? <Tooltip header={props.tooltip.header} text={props.tooltip.text}>{upgradeItem}</Tooltip>
         : upgradeItem;

    return (
        <div>
            {upgradeItem}
            <Counter count={props.count} onIncrement={props.onIncrement} onDecrement={props.onDecrement}/>
        </div>
    );
}

export default UpgradeItemCounter;
