import s from "./sultanhani-trade-network.module.css";
import sultanhaniTradeNetworkIcon from "../../../../icons/sultanhani-trade-network.png";
import traderIcon from "../../../../icons/trader.png";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";
import Tooltip from "../../../tooltip/Tooltip";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourceState
} from "../../../../state/PassiveIncomeSourcesSlice";

function SultanhaniTradeNetwork() {
    const dispatch = useAppDispatch();
    const modifierState: PassiveIncomeSourceState = useAppSelector((rootState) => rootState.passiveIncomeSources[PassiveIncomeSource.SULTANHANI_TRADE_NETWORK]);
    return (
        <div className={s.sultanhaniTradeNetwork}>
            <Tooltip header={'Sultanhani Trade Network'} text={'Generates passive gold income depending on the traders count inside'}>
                <img className={s.landmarkIcon} src={sultanhaniTradeNetworkIcon} alt={'sultanhani-trade-network'}/>
            </Tooltip>
            <div>:</div>
            <UpgradeItemCounter icon={traderIcon}
                                count={modifierState.count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.SULTANHANI_TRADE_NETWORK))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.SULTANHANI_TRADE_NETWORK))}/>
        </div>
    )
}

export default SultanhaniTradeNetwork;
