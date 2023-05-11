import SilverTree from "./silver-tree/SilverTree";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import steppeRedoubtIcon from "../../../icons/steppe-redoubt.png";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import shared from '../../../shared.module.css';
import ImprovedEcoUpgrades from "./improved-eco-upgrades/ImprovedEcoUpgrades";

function MongolsFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let steppeRedoubtItem = <UpgradeItem icon={steppeRedoubtIcon}
                                         selected={gatheringRateModifiers[GatheringRateModifierId.STEPPE_REDOUBT]}
                                         onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.STEPPE_REDOUBT))}
                                         tooltip={{header: 'Steppe Redoubt', text: 'Increases gold dropped'}}/>;
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div className={shared.upgradesRow}>
                <SilverTree/>
                {steppeRedoubtItem}
            </div>
            <ImprovedEcoUpgrades/>
        </div>
    )
}

export default MongolsFeatures;
