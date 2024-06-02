import SilverTree from "./silver-tree/SilverTree";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import steppeRedoubtIcon from "../../../icons/steppe-redoubt.png";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import shared from '../../../shared.module.css';
import ImprovedEcoUpgrades from "./improved-eco-upgrades/ImprovedEcoUpgrades";
import ResourceDropOffModifierId from "../../../data/resource-drop-off-modifiers/ResourceDropOffModifierId";
import {toggleResourceDropOffModifier} from "../../../state/ResourceDropOffModifiersSlice";

function MongolsFeatures() {
    const dispatch = useAppDispatch();
    const resourceDropOffModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.resourceDropOffModifiers);
    let steppeRedoubtItem = <UpgradeItem icon={steppeRedoubtIcon}
                                         selected={resourceDropOffModifiers[ResourceDropOffModifierId.STEPPE_REDOUBT]}
                                         onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.STEPPE_REDOUBT))}
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
