import Item from "../item/Item";
import s from './item-counter.module.css'

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
            <div className={s.counter}>
                <div onClick={props.onDecrement} className={`${s.counterMinus} ${s.counterBlock}`}>-</div>
                <div className={`${s.counterCount} ${s.counterBlock}`}>{props.count}</div>
                <div onClick={props.onIncrement} className={`${s.counterPlus} ${s.counterBlock}`}>+</div>
            </div>
        </div>
    );
}

export default ItemCounter;
