import {PassiveIncomeSourcesState} from "../../../../../state/PassiveIncomeSourcesSlice";
import {useAppSelector} from "../../../../../hooks";
import {
    BERRY_YATAI_INCOME,
    BOAR_YATAI_INCOME,
    DEER_YATAI_INCOME, FARM_YATAI_INCOME, SHEEP_YATAI_INCOME,
    SINGLE_YATAI_MAX_INCOME
} from "../../../../../data/civilization-modifiers/SengokuDaimyoModifiers";
import PassiveIncomeSource from "../../../../../data/passive-income-modifiers/PassiveIncomeSource";

function YataiSummary() {
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    const foodIncome = passiveIncomeSources[PassiveIncomeSource.BOAR_YATAI].count * BOAR_YATAI_INCOME
        + passiveIncomeSources[PassiveIncomeSource.DEER_YATAI].count * DEER_YATAI_INCOME
        + passiveIncomeSources[PassiveIncomeSource.BERRY_YATAI].count * BERRY_YATAI_INCOME
        + passiveIncomeSources[PassiveIncomeSource.SHEEP_YATAI].count * SHEEP_YATAI_INCOME
        + passiveIncomeSources[PassiveIncomeSource.FARM_YATAI].count * FARM_YATAI_INCOME;
    const yataiRequired = Math.ceil(foodIncome / SINGLE_YATAI_MAX_INCOME);

    return (
        <div>Yatai food income: {foodIncome} | Yatai required: {yataiRequired} </div>
    );
}

export default YataiSummary;