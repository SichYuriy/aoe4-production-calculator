import {useAppDispatch, useAppSelector} from "../../hooks";
import UpgradeItem from "../upgrade-item/UpgradeItem";
import wheelbarrowIcon from '../../icons/wheelbarrow.png';
import {toggle} from "../../state/GatheringRateModifiersSlice";
import {GATHERING_RATE_MODIFIERS_ID} from "../../data/AllGatheringRateModifiers";
import s from './common-upgrades.module.css';
import WoodUpgrades from "./wood-upgrades/WoodUpgrades";

function CommonUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let wheelbarrowItem =  <UpgradeItem icon={wheelbarrowIcon}
                                        selected={gatheringRateModifiers[GATHERING_RATE_MODIFIERS_ID.WHEELBARROW]}
                                        onClick={() => dispatch(toggle(GATHERING_RATE_MODIFIERS_ID.WHEELBARROW))}/>
    return (
        <div>
            <div><h3>Upgrades:</h3></div>
            <div className={s.upgradesBlock}>
                <div className={s.upgradesColumn}>
                    <div className={s.singleUpgrade}>
                        {wheelbarrowItem}
                    </div>
                    <WoodUpgrades/>
                </div>
            </div>
        </div>
    )
}

export default CommonUpgrades;
