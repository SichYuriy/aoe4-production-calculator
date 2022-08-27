import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {unselectSelect} from "../../../state/GatheringRateModifiersSlice";
import s from './upgrade-group.module.css'
import {unselectSelectProductionSpeedModifiers} from "../../../state/ProducationSpeedModifiersSlice";
import {unselectSelectCostModifiers} from "../../../state/CostModifiersSlice";

export interface UpgradeGroupItem {
    icon: string,
    modifier: {id: string}
}

export enum UpgradeType {
    GATHERING_RATE,
    PRODUCTION_SPEED,
    COST
}

function UpgradeGroup(props: { items: UpgradeGroupItem[], type: UpgradeType }) {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    const costModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.costModifiers);
    let upgradeModifiers: { [key: string]: boolean };
    if (props.type === UpgradeType.GATHERING_RATE) {
        upgradeModifiers = gatheringRateModifiers;
    } else if (props.type === UpgradeType.PRODUCTION_SPEED) {
        upgradeModifiers = productionSpeedModifiers;
    } else {
        upgradeModifiers = costModifiers;
    }

    let lastSelectedIndex = getLastSelectedIndex(props.items, upgradeModifiers);
    let lastSelectedId = lastSelectedIndex !== -1 ? props.items[lastSelectedIndex].modifier.id : null;

    function dispatchSelectUnselect(state: {unselect: string[], select: string[]}) {
        if (props.type === UpgradeType.GATHERING_RATE) {
            dispatch(unselectSelect(state));
        } else if (props.type === UpgradeType.PRODUCTION_SPEED) {
            dispatch(unselectSelectProductionSpeedModifiers(state));
        } else if (props.type === UpgradeType.COST) {
            dispatch(unselectSelectCostModifiers(state));
        }
    }

    function handleClick(modifierId: string, index: number) {
        let allIds = props.items.map(item => item.modifier.id);
        let idsBeforeClicked = props.items.slice(0, index + 1).map(item => item.modifier.id);
        if (lastSelectedId === modifierId) {
            dispatchSelectUnselect({unselect: allIds, select: []});
        } else {
            dispatchSelectUnselect({unselect: allIds, select: idsBeforeClicked});
        }
    }

    return (
        <div className={s.upgradeGroup}>{props.items.map((item, index) =>
            <UpgradeItem key={item.modifier.id} icon={item.icon} selected={upgradeModifiers[item.modifier.id]}
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
