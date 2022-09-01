import s from './golden-age-item.module.css';

function GoldenAgeItem(props: {icon: string, selected: boolean, onClick: () => any}) {
    return (
        <div onClick={props.onClick} className={`${s.goldenAgeItem} ${props.selected ? s.selected: ''}`}>
            <img src={props.icon} alt={'golden-age'}/>
        </div>
    );
}

export default GoldenAgeItem;
