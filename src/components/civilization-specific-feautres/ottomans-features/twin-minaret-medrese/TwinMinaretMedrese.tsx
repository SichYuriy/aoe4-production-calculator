import Tooltip from "../../../tooltip/Tooltip";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import twinMinaretMedreseIcon from "../../../../icons/twin-minaret-medrese.png";
import LimitedFoodGatheringSourceModifierId
    from "../../../../data/limited-food-gathering-source-modifiers/LimitedFoodGatheringSourceModifierId";
import {
    LimitedFoodGatheringSourceModifiersState,
    toggleLimitedFoodGatheringSource
} from "../../../../state/LimitedFoodGatheringSourceModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";

function TwinMinaretMedrese() {
    const dispatch = useAppDispatch();
    const limitedFoodGatheringSourceModifiers: LimitedFoodGatheringSourceModifiersState = useAppSelector((rootState) => rootState.limitedFoodGatheringSourceModifiers);

    return (
        <Tooltip header={'Twin Minaret Medrese'} text={'Takes some villagers on infinite fast berries depending on your food upgrades'}>
            <UpgradeItem
                icon={twinMinaretMedreseIcon}
                selected={limitedFoodGatheringSourceModifiers[LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE].selected}
                onClick={() => dispatch(toggleLimitedFoodGatheringSource(LimitedFoodGatheringSourceModifierId.TWIN_MINARET_MEDRESE))}/>
        </Tooltip>
    );
}

export default TwinMinaretMedrese;