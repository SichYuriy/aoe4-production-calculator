import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import cisternIcon from "../../../../icons/cistern.png";
import NumberItem from "../../../number-item/NumberItem";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {GatheringRateModifierState, unselectSelect} from "../../../../state/GatheringRateModifiersSlice";

const ALL_MODIFIERS = [GatheringRateModifierId.CISTERN_LEVEL_1, GatheringRateModifierId.CISTERN_LEVEL_2, GatheringRateModifierId.CISTERN_LEVEL_3, GatheringRateModifierId.CISTERN_LEVEL_4, GatheringRateModifierId.CISTERN_LEVEL_5];

function CisternGatheringRate() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: GatheringRateModifierState = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    let noneSelected = !ALL_MODIFIERS.some(id => gatheringRateModifiers[id]);

    function unselectAll() {
        dispatch(unselectSelect({unselect: ALL_MODIFIERS, select: []}));
    }

    function select(modifierId: string) {
        dispatch(unselectSelect({unselect: ALL_MODIFIERS, select: [modifierId]}));
    }

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Cistern gathering rates'} text={'Improves the gather rate of nearby villagers by +10/14/18/22/26%'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={cisternIcon} alt={'cistern'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <ImageItem icon={cancelIcon}
                       selected={noneSelected}
                       onClick={unselectAll}/>
            <NumberItem number={1}
                        selected={gatheringRateModifiers[GatheringRateModifierId.CISTERN_LEVEL_1]}
                        onClick={() => select(GatheringRateModifierId.CISTERN_LEVEL_1)}/>
            <NumberItem number={2}
                        selected={gatheringRateModifiers[GatheringRateModifierId.CISTERN_LEVEL_2]}
                        onClick={() => select(GatheringRateModifierId.CISTERN_LEVEL_2)}/>
            <NumberItem number={3}
                        selected={gatheringRateModifiers[GatheringRateModifierId.CISTERN_LEVEL_3]}
                        onClick={() => select(GatheringRateModifierId.CISTERN_LEVEL_3)}/>
            <NumberItem number={4}
                        selected={gatheringRateModifiers[GatheringRateModifierId.CISTERN_LEVEL_4]}
                        onClick={() => select(GatheringRateModifierId.CISTERN_LEVEL_4)}/>
            <NumberItem number={5}
                        selected={gatheringRateModifiers[GatheringRateModifierId.CISTERN_LEVEL_5]}
                        onClick={() => select(GatheringRateModifierId.CISTERN_LEVEL_5)}/>
        </div>
    );
}

export default CisternGatheringRate;