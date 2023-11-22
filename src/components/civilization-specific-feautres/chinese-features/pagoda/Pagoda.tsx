import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import pagodaIcon from "../../../../icons/pagoda.png";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourcesState
} from "../../../../state/PassiveIncomeSourcesSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";

function Pagoda() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);
    return (
        <UpgradeItemCounter icon={pagodaIcon}
                            count={passiveIncomeSources[PassiveIncomeSource.PAGODA].count}
                            onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.PAGODA))}
                            onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.PAGODA))}
                            tooltip={{header: 'Pagoda', text: 'Generate +50 Gold, +25 Food, Wood, and Stone every 30 seconds'}}/>
    );
}

export default Pagoda;