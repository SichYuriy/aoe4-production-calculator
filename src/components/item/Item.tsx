import './item.css'

function Item(props: { icon: string, name: string, onClick?: () => any }) {
    return (
        <div title={props.name} className={'item'} onClick={props.onClick}>
            <img src={props.icon} className={'item-icon-box'} alt={props.name}/>
            <div className={'item-name-block'}>{props.name}</div>
        </div>
    )
}

export default Item;
