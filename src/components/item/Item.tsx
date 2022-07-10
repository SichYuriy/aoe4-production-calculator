import './Item.css'

function Item(props: { icon: string, name: string }) {
    return (
        <div title={props.name} className={'item'}>
            <img src={props.icon} className={'item-icon-box'} alt={props.name}/>
            <div>{props.name}</div>
        </div>
    )
}

export default Item;
