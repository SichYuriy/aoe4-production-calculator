import {useAppDispatch, useAppSelector} from "../../hooks";
import UpgradeItem from "../upgrade-item/UpgradeItem";
import wheelbarrowIcon from '../../icons/wheelbarrow.png';
import forestryIcon from '../../icons/forestry.png';
import {toggle} from "../../state/GatheringRateModifiersSlice";
import {GATHERING_RATE_MODIFIERS_ID} from "../../data/AllGatheringRateModifiers";
import s from './common-upgrades.module.css';
import WoodUpgrades from "./wood-upgrades/WoodUpgrades";
import FoodUpgrades from "./food-upgrades/FoodUpgrades";
import GoldUpgrades from "./gold-upgrades/GoldUpgrades";

function CommonUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let wheelbarrowItem =  <UpgradeItem icon={wheelbarrowIcon}
                                        selected={gatheringRateModifiers[GATHERING_RATE_MODIFIERS_ID.WHEELBARROW]}
                                        onClick={() => dispatch(toggle(GATHERING_RATE_MODIFIERS_ID.WHEELBARROW))}/>
    let forestryItem =  <UpgradeItem icon={forestryIcon}
                                        selected={gatheringRateModifiers[GATHERING_RATE_MODIFIERS_ID.FORESTRY]}
                                        onClick={() => dispatch(toggle(GATHERING_RATE_MODIFIERS_ID.FORESTRY))}/>
    return (
        <div>
            <div><h3>Upgrades:</h3></div>
            <div className={s.upgradesBlock}>
                <div className={s.upgradesColumn}>
                    <div className={s.upgradesRow}>
                        <div className={s.singleUpgrade}>{wheelbarrowItem}</div>
                        <div className={s.singleUpgrade}>{forestryItem}</div>
                    </div>
                    <WoodUpgrades/>
                    <FoodUpgrades/>
                    <GoldUpgrades/>
                </div>
            </div>
        </div>
    )
}

export default CommonUpgrades;
