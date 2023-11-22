import SongDynasty from "./song-dynasty/SongDynasty";
import ChineseDocks from "./chinese-docks/ChineseDocks";
import shared from '../../../shared.module.css';
import ImperialOfficials from "./imperial-officials/ImperialOfficials";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import granaryIcon from '../../../icons/granary.png'
import Pagoda from "./pagoda/Pagoda";

function ChineseFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let granaryUpgradeItem = <UpgradeItem icon={granaryIcon}
                                          selected={gatheringRateModifiers[GatheringRateModifierId.GRANARY]}
                                          onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.GRANARY))}
                                          tooltip={{header: 'Granary', text: 'Increases farm gathering rate'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <ChineseDocks/>
            <SongDynasty/>
            <ImperialOfficials/>
            <div className={shared.upgradesRow}>
                {granaryUpgradeItem}
                <Pagoda/>
            </div>
        </div>
    )
}

export default ChineseFeatures;
