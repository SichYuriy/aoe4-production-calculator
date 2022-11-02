import s from './ottomans-features.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import antolianHillsIcon from "../../../icons/anatolian-hills.png";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import SultanhaniTradeNetwork from "./sultanhani-trade-network/SultanhaniTradeNetwork";

function OttomansFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let anatolianHillsUpgradeItem = <UpgradeItem icon={antolianHillsIcon}
                                          selected={gatheringRateModifiers[GatheringRateModifierId.ANATOLIAN_HILLS]}
                                          onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.ANATOLIAN_HILLS))}/>
    return <div className={s.ottomanFeatures}>
        {anatolianHillsUpgradeItem}
        <SultanhaniTradeNetwork/>
    </div>
}

export default OttomansFeatures;