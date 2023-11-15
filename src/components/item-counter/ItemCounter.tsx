import Item from "../item/Item";
import Counter from "../counter/Counter";

type Props = {
    name: string,
    icon: string,
    count: number,
    maxCount?: number,
    onIncrement: () => any,
    onDecrement: () => any,
    disabled?: boolean
}

function ItemCounter(props: Props) {
    return (
        <div>
            <Item icon={props.icon} name={props.name} selected={false}/>
            <Counter count={props.count} onIncrement={props.onIncrement} onDecrement={props.onDecrement} disabled={props.disabled} maxCount={props.maxCount}/>
        </div>
    );
}

export default ItemCounter;
