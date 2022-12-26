import Bounty from "./bounty/Bounty";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import woodenFortressIcon from "../../../icons/wooden-fortress.png";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import s from './rus-features.module.css'

function RusFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let woodenFortressItem = <UpgradeItem icon={woodenFortressIcon}
                                          selected={gatheringRateModifiers[GatheringRateModifierId.WOODEN_FORTRESS]}
                                          onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.WOODEN_FORTRESS))}
                                          tooltip={{header: 'Wooden Fortress', text: 'Villagers will drop off 20% more wood'}}/>
    return (
        <div className={s.rusFeatures}>
            <Bounty/>
            <div className={s.row}>
                {woodenFortressItem}
            </div>
        </div>
    );
}

export default RusFeatures;
