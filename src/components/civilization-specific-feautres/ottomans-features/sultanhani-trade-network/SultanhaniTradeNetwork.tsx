import s from "./sultanhani-trade-network.module.css";
import sultanhaniTradeNetworkIcon from "../../../../icons/sultanhani-trade-network.png";
import traderIcon from "../../../../icons/trader.png";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeModifierState
} from "../../../../state/PassiveIncomeModifiersSlice";
import PassiveIncomeModifierId from "../../../../data/passive-income-modifiers/PassiveIncomeModifierId";

function SultanhaniTradeNetwork() {
    const dispatch = useAppDispatch();
    const modifierState: PassiveIncomeModifierState = useAppSelector((rootState) => rootState.passiveIncomeModifiers[PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK]);
    return (
        <div className={s.sultanhaniTradeNetwork}>
            <div><img className={s.landmarkIcon} src={sultanhaniTradeNetworkIcon} alt={'sultanhani-trade-network'}/></div>
            <div>:</div>
            <UpgradeItemCounter icon={traderIcon}
                                count={modifierState.count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.SULTANHANI_TRADE_NETWORK))}/>
        </div>
    )
}

export default SultanhaniTradeNetwork;