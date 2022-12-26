import s from './upgrade-item.module.css'
import Tooltip from "../tooltip/Tooltip";

type TooltipProps = {
    header: string,
    text: string
}

type Props = {
    icon: string,
    selected: boolean,
    onClick?: () => any,
    iconHeight?: string,
    disabled?: boolean,
    tooltip?: TooltipProps
}

function UpgradeItem(props: Props) {
    let upgradeItem = (
        <div
            className={`${s.item} ${props.selected ? s.selectedItem : ''} ${!props.disabled ? s.clickableItem : ''}`}
            onClick={props.onClick}>
            <img src={props.icon} className={s.itemIconBox} alt={'upgrade'}
                 style={props.iconHeight ? {height: props.iconHeight} : {}}/>
        </div>
    );
    return props.tooltip
        ? <Tooltip header={props.tooltip.header} text={props.tooltip.text}>{upgradeItem}</Tooltip>
        : upgradeItem;
}

export default UpgradeItem;
