import GatheringRateModifier from "../../../model/GatheringRateModifier";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {unselectSelect} from "../../../state/GatheringRateModifiersSlice";
import s from './upgrade-group.module.css'

export interface UpgradeGroupItem {
    icon: string,
    modifier: GatheringRateModifier
}

function UpgradeGroup(props: { items: UpgradeGroupItem[] }) {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    let lastSelectedIndex = getLastSelectedIndex(props.items, gatheringRateModifiers);
    let lastSelectedId = lastSelectedIndex !== -1 ? props.items[lastSelectedIndex].modifier.id : null;

    function handleClick(modifierId: string, index: number) {
        let allIds = props.items.map(item => item.modifier.id);
        let idsBeforeClicked = props.items.slice(0, index + 1).map(item => item.modifier.id);
        if (lastSelectedId === modifierId) {
            dispatch(unselectSelect({unselect: allIds, select: []}));
        } else {
            dispatch(unselectSelect({unselect: allIds, select: idsBeforeClicked}));
        }
    }

    return (
        <div className={s.upgradeGroup}>{props.items.map((item, index) =>
            <UpgradeItem key={item.modifier.id} icon={item.icon} selected={gatheringRateModifiers[item.modifier.id]}
                         onClick={() => handleClick(item.modifier.id, index)}/>
        )}</div>
    )
}

function getLastSelectedIndex(items: UpgradeGroupItem[], gatheringRateModifiers: { [key: string]: boolean }) {
    let lastIndex = -1;
    for (let i = 0; i < items.length; i++) {
        if (gatheringRateModifiers[items[i].modifier.id]) {
            lastIndex = i;
        }
    }
    return lastIndex;
}

export default UpgradeGroup;
