import s from './golden-age-item.module.css';
import Tooltip from "../../../../tooltip/Tooltip";

function GoldenAgeItem(props: {icon: string, selected: boolean, onClick: () => any}) {
    return (
        <Tooltip header="Golden Age" text={'Increases gathering rate. Level 3 also reduces unit production time.'}>
            <div onClick={props.onClick} className={`${s.goldenAgeItem} ${props.selected ? s.selected: ''}`}>
                <img src={props.icon} alt={'golden-age'}/>
            </div>
        </Tooltip>
    );
}

export default GoldenAgeItem;
