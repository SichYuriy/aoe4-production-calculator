import s from './upgrade-item.module.css'

function UpgradeItem(props: { icon: string, selected: boolean, onClick?: () => any, iconHeight?: string, disabled?: boolean }) {
    return (
        <div className={`${s.item} ${props.selected ? s.selectedItem : ''} ${!props.disabled ? s.clickableItem : ''}`} onClick={props.onClick}>
            <img src={props.icon} className={s.itemIconBox} alt={'upgrade'} style={props.iconHeight ? {height: props.iconHeight} : {}}/>
        </div>
    )
}

export default UpgradeItem;
