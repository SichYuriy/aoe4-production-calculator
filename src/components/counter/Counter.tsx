import s from "./counter.module.css";

type Props = {
    count: number,
    onIncrement: () => any,
    onDecrement: () => any
}

function Counter(props: Props) {
    return (
        <div>
            <div className={s.counter}>
                <div onClick={props.onDecrement} className={`${s.counterMinus} ${s.counterBlock}`}>-</div>
                <div className={`${s.counterCount} ${s.counterBlock}`}>{props.count}</div>
                <div onClick={props.onIncrement} className={`${s.counterPlus} ${s.counterBlock}`}>+</div>
            </div>
        </div>
    );
}

export default Counter;
