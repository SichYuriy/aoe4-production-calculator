import SongDynasty from "./song-dynasty/SongDynasty";
import ChineseDocks from "./chinese-docks/ChineseDocks";
import s from './chinese-features.module.css'
import ImperialOfficials from "./imperial-officials/ImperialOfficials";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import granaryIcon from '../../../icons/granary.png'

function ChineseFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let granaryUpgradeItem = <UpgradeItem icon={granaryIcon}
                                          selected={gatheringRateModifiers[GatheringRateModifierId.GRANARY]}
                                          onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.GRANARY))}
                                          tooltip={{header: 'Granary', text: 'Increases farm gathering rate'}}/>

    return (
        <div className={s.chineseFeatures}>
            <ChineseDocks/>
            <SongDynasty/>
            <ImperialOfficials/>
            <div className={s.row}>
                {granaryUpgradeItem}
            </div>
        </div>
    )
}

export default ChineseFeatures;
