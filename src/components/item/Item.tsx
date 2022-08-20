import s from './item.module.css'

function Item(props: { icon: string, name: string, selected: boolean, onClick?: () => any }) {
    return (
        <div title={props.name} className={s.item + (props.selected ? ' ' + s.selectedItem : '')} onClick={props.onClick}>
            <img src={props.icon} className={s.itemIconBox} alt={props.name}/>
            <div className={s.itemNameBlock}>{props.name}</div>
        </div>
    )
}

export default Item;
