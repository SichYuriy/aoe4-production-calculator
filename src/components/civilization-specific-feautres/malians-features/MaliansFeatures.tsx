import shared from '../../../shared.module.css';
import MansaQuery from "./mansa-query/MansaQuery";
import UpgradeItemCounter from "../../upgrade-item-counter/UpgradeItemCounter";
import pitMineIcon from '../../../icons/pit-mine.png';
import houseIcon from '../../../icons/house.png';
import miningCampIcon from '../../../icons/mining-camp.png';
import {useAppDispatch, useAppSelector} from "../../../hooks";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import CattleRanch from "./cattle-ranch/CattleRanch";
import FarimbaGarrison from "./farimba-garrison/FarimbaGarrison";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourcesState
} from "../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeSource from "../../../data/passive-income-modifiers/PassiveIncomeSource";

function MaliansFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    let pitMineItem = <UpgradeItemCounter icon={pitMineIcon}
                                          count={passiveIncomeSources[PassiveIncomeSource.PIT_MINE].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE))}/>
    let pitMineHouseItem = <UpgradeItemCounter icon={houseIcon}
                                          count={passiveIncomeSources[PassiveIncomeSource.PIT_MINE_HOUSE].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_HOUSE))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_HOUSE))}/>
    let pitMineMiningCampItem = <UpgradeItemCounter icon={miningCampIcon}
                                          count={passiveIncomeSources[PassiveIncomeSource.PIT_MINE_MINING_CAMP].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_MINING_CAMP))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.PIT_MINE_MINING_CAMP))}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <MansaQuery/>
            <div className={shared.upgradesRow}>
                {pitMineItem}
                {pitMineHouseItem}
                {pitMineMiningCampItem}
            </div>
            <CattleRanch/>
            <FarimbaGarrison/>
        </div>
    );
}

export default MaliansFeatures;
