import Bounty from "./bounty/Bounty";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import woodenFortressIcon from "../../../icons/wooden-fortress.png";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import shared from '../../../shared.module.css'
import ResourceDropOffModifierId from "../../../data/resource-drop-off-modifiers/ResourceDropOffModifierId";
import {toggleResourceDropOffModifier} from "../../../state/ResourceDropOffModifiersSlice";

function RusFeatures() {
    const dispatch = useAppDispatch();
    const resourceDropOffModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.resourceDropOffModifiers);
    let woodenFortressItem = <UpgradeItem icon={woodenFortressIcon}
                                          selected={resourceDropOffModifiers[ResourceDropOffModifierId.WOODEN_FORTRESS]}
                                          onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.WOODEN_FORTRESS))}
                                          tooltip={{header: 'Wooden Fortress', text: 'Villagers will drop off 20% more wood'}}/>
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <Bounty/>
            <div className={shared.upgradesRow}>
                {woodenFortressItem}
            </div>
        </div>
    );
}

export default RusFeatures;
