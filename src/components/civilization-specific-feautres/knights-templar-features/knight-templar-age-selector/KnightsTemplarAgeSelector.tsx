import AgeSelector from "../../age-selectror/AgeSelector";
import Tooltip from "../../../tooltip/Tooltip";
import AgeEnum from "../../age-selectror/AgeEnum";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";
import PassiveIncomeFromGatheringVillagerModifierId
    from "../../../../data/passive-income-from-gathering-vilager-modifiers/PassiveIncomeFromGatheringVillagerModifierId";
import {
    unselectSelectPassiveIncomeFromGatheringVillagerModifiers
} from "../../../../state/PassiveIncomeFromGatheringVillagerModifiersSlice";

const gatheringRateBonuses: GatheringRateModifierId[] = [
    GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE,
    GatheringRateModifierId.KNIGHTS_TEMPLAR_FEUDAL_AGE,
    GatheringRateModifierId.KNIGHTS_TEMPLAR_CASTLE_AGE,
    GatheringRateModifierId.KNIGHTS_TEMPLAR_IMPERIAL_AGE,
];

const foodIncomeBonusPerAge: { [key: string]: PassiveIncomeFromGatheringVillagerModifierId} = {
    [AgeEnum.DARK_AGE]: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_DARK_AGE,
    [AgeEnum.FEUDAL_AGE]: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_FEUDAL_AGE,
    [AgeEnum.CASTLE_AGE]: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_CASTLE_AGE,
    [AgeEnum.IMPERIAL_AGE]: PassiveIncomeFromGatheringVillagerModifierId.TEMPLAR_KNIGHT_FOOD_FROM_WOOD_IMPERIAL_AGE,
}

export function KnightsTemplarAgeSelector() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    function selectAge(ageSelected: AgeEnum) {
        const selectedBonuses = gatheringRateBonuses.slice(0, ageSelected + 1);
        dispatch(unselectSelect({unselect: gatheringRateBonuses, select: selectedBonuses}));
        dispatch(unselectSelectPassiveIncomeFromGatheringVillagerModifiers({
            unselect: Object.values(foodIncomeBonusPerAge),
            select: [foodIncomeBonusPerAge[ageSelected]]
        }));
    }

    const lastSelectedBonus = gatheringRateBonuses.filter(bonusId => gatheringRateModifiers[bonusId])
        .reduce((a, b) => b, GatheringRateModifierId.KNIGHTS_TEMPLAR_DARK_AGE);
    const selectedAge = gatheringRateBonuses.indexOf(lastSelectedBonus);

    return (
        <Tooltip header="Age" text="Increases wood gathering rate">
            <AgeSelector inputName={'knightsTemplarAge'} onSelect={selectAge} selected={selectedAge}/>
        </Tooltip>
    );
}