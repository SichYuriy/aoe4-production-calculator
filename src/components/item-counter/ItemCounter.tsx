import Item from "../item/Item";
import './item-counter.css'

type Props = {
    name: string,
    icon: string,
    count: number,
    onIncrement: () => any,
    onDecrement: () => any
}

function ItemCounter(props: Props) {
    return (
        <div>
            <Item icon={props.icon} name={props.name} selected={false}/>
            <div className={'counter'}>
                <div onClick={props.onDecrement} className={'counter-minus counter-block'}>-</div>
                <div className={'counter-count counter-block'}>{props.count}</div>
                <div onClick={props.onIncrement} className={'counter-plus counter-block'}>+</div>
            </div>
        </div>
    );
}

export default ItemCounter;
