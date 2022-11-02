import UpgradeItem from "../upgrade-item/UpgradeItem";
import Counter from "../counter/Counter";

type Props = {
    icon: string,
    count: number,
    onIncrement: () => any,
    onDecrement: () => any
}

function UpgradeItemCounter(props: Props) {
    return (
        <div>
            <UpgradeItem icon={props.icon} selected={props.count > 0} disabled={true}/>
            <Counter count={props.count} onIncrement={props.onIncrement} onDecrement={props.onDecrement}/>
        </div>
    );
}

export default UpgradeItemCounter;
