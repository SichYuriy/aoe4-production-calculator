import s from './malians-features.module.css'
import MansaQuery from "./mansa-query/MansaQuery";
import UpgradeItemCounter from "../../upgrade-item-counter/UpgradeItemCounter";
import pitMineIcon from '../../../icons/pit-mine.png';
import houseIcon from '../../../icons/house.png';
import miningCampIcon from '../../../icons/mining-camp.png';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeModifiersState
} from "../../../state/PassiveIncomeModifiersSlice";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";

function MaliansFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);

    let pitMineItem = <UpgradeItemCounter icon={pitMineIcon}
                                          count={passiveIncomeModifiers[PassiveIncomeModifierId.PIT_MINE].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE))}/>
    let pitMineHouseItem = <UpgradeItemCounter icon={houseIcon}
                                          count={passiveIncomeModifiers[PassiveIncomeModifierId.PIT_MINE_HOUSE].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_HOUSE))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_HOUSE))}/>
    let pitMineMiningCampItem = <UpgradeItemCounter icon={miningCampIcon}
                                          count={passiveIncomeModifiers[PassiveIncomeModifierId.PIT_MINE_MINING_CAMP].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_MINING_CAMP))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_MINING_CAMP))}/>

    return (
        <div className={s.maliansFeatures}>
            <MansaQuery/>
            <div className={s.row}>
                {pitMineItem}
                {pitMineHouseItem}
                {pitMineMiningCampItem}
            </div>
        </div>
    );
}

export default MaliansFeatures;
