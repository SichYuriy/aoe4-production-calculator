import shared from "../../../shared.module.css";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import grandWineryIcon from "../../../icons/grand-winery-1.png";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";

function MacedonianDynastyFeatures() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    let grandWinery = <UpgradeItem icon={grandWineryIcon}
                                   tooltip={{header: 'Grand Winery', text: 'Careful, assumes all food villagers in aura radius'}}
                                   selected={gatheringRateModifiers[GatheringRateModifierId.MACEDONIAN_DYNASTY_GRAND_WINERY]}
                                   onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.MACEDONIAN_DYNASTY_GRAND_WINERY))}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            {grandWinery}
        </div>
    );
}

export default MacedonianDynastyFeatures;
