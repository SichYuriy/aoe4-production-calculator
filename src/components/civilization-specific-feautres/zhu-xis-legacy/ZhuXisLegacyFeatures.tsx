import shared from "../../../shared.module.css";
import ChineseDocks from "../chinese-features/chinese-docks/ChineseDocks";
import ImperialOfficials from "../chinese-features/imperial-officials/ImperialOfficials";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import granaryIcon from "../../../icons/granary.png";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import ZhuXisLegacyYuanDynasty from "./zhu-xis-legacy-yuan-dynasty/ZhuXisLegacyYuanDynasty";
import Pagoda from "../chinese-features/pagoda/Pagoda";

function ZhuXisLegacyFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    let granaryUpgradeItem = <UpgradeItem icon={granaryIcon}
                                          selected={gatheringRateModifiers[GatheringRateModifierId.GRANARY]}
                                          onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.GRANARY))}
                                          tooltip={{header: 'Granary', text: 'Increases farm gathering rate'}}/>
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <ChineseDocks/>
            <ImperialOfficials/>
            <div className={shared.upgradesRow}>
                {granaryUpgradeItem}
                <ZhuXisLegacyYuanDynasty/>
                <Pagoda/>
            </div>
        </div>
    );
}

export default ZhuXisLegacyFeatures;