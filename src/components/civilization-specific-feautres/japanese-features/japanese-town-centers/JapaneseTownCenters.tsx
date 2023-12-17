import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import townCenterIcon from "../../../../icons/town-center.png";
import daimyoManorIcon from "../../../../icons/daimyo-manor-1.png";
import daimyoPalaceIcon from "../../../../icons/daimyo-palace-2.png";
import shogunateCastleIcon from "../../../../icons/shogunate-castle-3.png";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";

const ALL_MODIFIERS = [GatheringRateModifierId.DAIMYO_MANOR, GatheringRateModifierId.DAIMYO_PALACE, GatheringRateModifierId.SHOGUNATE_CASTLE];

function JapaneseTownCenters() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    let noneSelected = !ALL_MODIFIERS.some(id => gatheringRateModifiers[id]);

    function unselectAll() {
        dispatch(unselectSelect({unselect: ALL_MODIFIERS, select: []}));
    }

    function select(modifierId: string) {
        dispatch(unselectSelect({unselect: ALL_MODIFIERS, select: [modifierId]}));
    }

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Town Centers'} text={'Provide bonuses to nearby Villagers working Farms by 25%, 50%, 75%'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={townCenterIcon} alt={'bazaar'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <ImageItem icon={cancelIcon}
                       selected={noneSelected}
                       onClick={unselectAll}/>
            <UpgradeItem icon={daimyoManorIcon}
                         selected={gatheringRateModifiers[GatheringRateModifierId.DAIMYO_MANOR]}
                         onClick={() => select(GatheringRateModifierId.DAIMYO_MANOR)}/>
            <UpgradeItem icon={daimyoPalaceIcon}
                         selected={gatheringRateModifiers[GatheringRateModifierId.DAIMYO_PALACE]}
                         onClick={() => select(GatheringRateModifierId.DAIMYO_PALACE)}/>
            <UpgradeItem icon={shogunateCastleIcon}
                         selected={gatheringRateModifiers[GatheringRateModifierId.SHOGUNATE_CASTLE]}
                         onClick={() => select(GatheringRateModifierId.SHOGUNATE_CASTLE)}/>
        </div>
    );
}

export default JapaneseTownCenters;