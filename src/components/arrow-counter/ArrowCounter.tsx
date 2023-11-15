import s from "../counter/counter.module.css";
import {faBackward, faForward} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type Props = {
    count: number,
    maxCount?: number,
    onIncrement: () => any,
    onDecrement: () => any,
    disabled?: boolean
}

function ArrowCounter(props: Props) {
    return (
        <div>
            <div className={`${s.counter}`}>
                {!props.disabled ? <div onClick={props.onDecrement} className={`${s.counterMinus} ${s.counterBlock}`}><FontAwesomeIcon className={s.arrowCounter} icon={faBackward}/></div> : ''}
                <div className={`${s.counterCount} ${s.counterBlock}`}>{props.count}{props.maxCount ? '/' + props.maxCount : ''}</div>
                {!props.disabled ? <div onClick={props.onIncrement} className={`${s.counterPlus} ${s.counterBlock}`}><FontAwesomeIcon className={s.arrowCounter} icon={faForward}/></div> : ''}
            </div>
        </div>
    );
}

export default ArrowCounter;
