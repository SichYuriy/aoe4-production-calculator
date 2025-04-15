import shared from "../../../shared.module.css";
import UpgradeItemCounter from "../../upgrade-item-counter/UpgradeItemCounter";
import manorIcon from "../../../icons/manor-2.png";
import PassiveIncomeSource from "../../../data/passive-income-modifiers/PassiveIncomeSource";
import {decrementPassiveIncome, incrementPassiveIncome, PassiveIncomeSourcesState} from "../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {useAppDispatch, useAppSelector} from "../../../hooks";

function HouseOfLancasterFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    const manorItem = <UpgradeItemCounter icon={manorIcon}
                                          count={passiveIncomeSources[PassiveIncomeSource.MANOR].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.MANOR))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.MANOR))}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Villagers gather from sheep +20% faster</div>
            <div className={shared.upgradesRow}>
                {manorItem}
            </div>
        </div>
    );
}

export default HouseOfLancasterFeatures;