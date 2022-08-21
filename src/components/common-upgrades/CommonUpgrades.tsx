import {useAppDispatch, useAppSelector} from "../../hooks";
import UpgradeItem from "../upgrade-item/UpgradeItem";
import wheelbarrowIcon from '../../icons/wheelbarrow.png';
import {toggle} from "../../state/GatheringRateModifiersSlice";
import GATHERING_RATES_MODIFIERS from "../../data/AllGatheringRateModifiers";
import s from './common-upgrades.module.css';

function CommonUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    return (
        <div>
            <div><h3>Upgrades:</h3></div>
            <div className={s.upgradesBlock}>
                <UpgradeItem icon={wheelbarrowIcon} selected={gatheringRateModifiers[GATHERING_RATES_MODIFIERS.WHEELBARROW.id]} onClick={() => dispatch(toggle(GATHERING_RATES_MODIFIERS.WHEELBARROW.id))}/>
            </div>
        </div>
    )
}

export default CommonUpgrades;
