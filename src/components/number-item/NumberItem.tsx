import s from './number-item.module.css';

type Props = {
    number: number,
    selected: boolean,
    onClick?: () => any
}

function NumberItem(props: Props) {
    return (
        <div className={`${s.wrapperDiv} ${props.selected ? s.selectedIconDiv : ''}`}>
            <div className={s.iconDiv} onClick={props.onClick}>
                {props.number}
            </div>
        </div>
    );
}

export default NumberItem;