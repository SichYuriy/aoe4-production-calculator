import s from './upgrade-item.module.css'

function UpgradeItem(props: { icon: string, selected: boolean, onClick?: () => any, iconHeight?: string }) {
    return (
        <div className={s.item + (props.selected ? ' ' + s.selectedItem : '')} onClick={props.onClick}>
            <img src={props.icon} className={s.itemIconBox} alt={'upgrade'} style={props.iconHeight ? {height: props.iconHeight} : {}}/>
        </div>
    )
}

export default UpgradeItem;
