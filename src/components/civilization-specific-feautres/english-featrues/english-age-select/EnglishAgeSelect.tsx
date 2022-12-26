import {useAppDispatch, useAppSelector} from "../../../../hooks";
import AgeEnum from "../../age-selectror/AgeEnum";
import AgeSelector from "../../age-selectror/AgeSelector";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";
import Tooltip from "../../../tooltip/Tooltip";

function EnglishAgeSelect() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let selectedAge = null;
    if (gatheringRateModifiers[GatheringRateModifierId.ENGLISH_DARK_AGE]) {
        selectedAge = AgeEnum.DARK_AGE;
    } else if (gatheringRateModifiers[GatheringRateModifierId.ENGLISH_FEUDAL_AGE]) {
        selectedAge = AgeEnum.FEUDAL_AGE;
    } else if (gatheringRateModifiers[GatheringRateModifierId.ENGLISH_CASTLE_AGE]) {
        selectedAge = AgeEnum.CASTLE_AGE;
    } else if (gatheringRateModifiers[GatheringRateModifierId.ENGLISH_IMPERIAL_AGE]) {
        selectedAge = AgeEnum.IMPERIAL_AGE;
    }

    const ALL_AGE_UPGRADES = [GatheringRateModifierId.ENGLISH_DARK_AGE,
        GatheringRateModifierId.ENGLISH_FEUDAL_AGE,
        GatheringRateModifierId.ENGLISH_CASTLE_AGE,
        GatheringRateModifierId.ENGLISH_IMPERIAL_AGE];
    const UPGRADE_BY_AGE = {
        [AgeEnum.DARK_AGE]: GatheringRateModifierId.ENGLISH_DARK_AGE,
        [AgeEnum.FEUDAL_AGE]: GatheringRateModifierId.ENGLISH_FEUDAL_AGE,
        [AgeEnum.CASTLE_AGE]: GatheringRateModifierId.ENGLISH_CASTLE_AGE,
        [AgeEnum.IMPERIAL_AGE]: GatheringRateModifierId.ENGLISH_IMPERIAL_AGE,
    }

    function selectAge(age: AgeEnum) {
        dispatch(unselectSelect({unselect: ALL_AGE_UPGRADES, select: [UPGRADE_BY_AGE[age]]}));
    }

    return (
        <Tooltip header="Age" text="Increases farm gathering rate">
            <AgeSelector onSelect={selectAge} selected={selectedAge}/>
        </Tooltip>
    )
}

export default EnglishAgeSelect;
