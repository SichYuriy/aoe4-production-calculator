import s from './unit-item.module.css'
import Tooltip from "../tooltip/Tooltip";
import UNITS from "../../data/unit/Units";

type TooltipProps = {
    header: string,
    text: string
}

type Props = {
    unitId: string,
    selected: boolean,
    onClick?: () => any,
    iconHeight?: string,
    disabled?: boolean,
    tooltip?: TooltipProps
}

function UnitItem(props: Props) {
    let unitItem = (
        <div
            className={`${s.item} ${props.selected ? s.selectedItem : ''} ${!props.disabled ? s.clickableItem : ''}`}
            onClick={props.onClick}>
            <img src={UNITS.get(props.unitId)!.icon} className={s.itemIconBox} alt={'unit'}
                 style={props.iconHeight ? {height: props.iconHeight} : {}}/>
        </div>
    );
    return props.tooltip
        ? <Tooltip header={props.tooltip.header} text={props.tooltip.text}>{unitItem}</Tooltip>
        : unitItem;
}

export default UnitItem;
