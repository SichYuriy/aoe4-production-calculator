import SilverTree from "./silver-tree/SilverTree";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import steppeRedoubtIcon from "../../../icons/steppe-redoubt.png";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import s from './mongols-features.module.css';

function MongolsFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let steppeRedoubtItem = <UpgradeItem icon={steppeRedoubtIcon}
                                         selected={gatheringRateModifiers[GatheringRateModifierId.STEPPE_REDOUBT]}
                                         onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.STEPPE_REDOUBT))}/>;
    return (
        <div className={s.mongolsFeatures}>
            <div>
                Silver Tree:
                <SilverTree/>
            </div>
            <div>
                Steppe redoubt:
                {steppeRedoubtItem}
            </div>

        </div>
    )
}

export default MongolsFeatures;
