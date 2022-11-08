import s from './image-item.module.css'

type Props = {
    selected: boolean,
    icon: string,
    onClick?: () => any,
}

function ImageItem(props: Props) {
    return (
        <div className={`${s.imageItem} ${props.selected ? s.selected : ''}`}>
            <img src={props.icon} onClick={props.onClick} alt={'item'}/>
        </div>
    );
}

export default ImageItem;
