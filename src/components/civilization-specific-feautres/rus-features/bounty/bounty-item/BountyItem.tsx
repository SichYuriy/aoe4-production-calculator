import icon from '../../../../../icons/bounty.png';
import s from './bounty-item.module.css';

function BountyItem(props: { label: string, selected: boolean, onClick: () => any }) {
    return (
        <div className={`${s.bountyItem} ${props.selected ? s.selected : ''}`} onClick={() => props.onClick()}>
            <div><img src={icon} alt="bounty"/></div>
            <div>{props.label}</div>
        </div>
    );
}

export default BountyItem;
