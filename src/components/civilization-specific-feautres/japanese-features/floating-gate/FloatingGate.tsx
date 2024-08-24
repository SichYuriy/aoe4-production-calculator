import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import floatingGateIcon from "../../../../icons/floating-gate.png";
import YorishiroTc from "../japanese-town-centers/yorishiro-tc/YorishiroTc";
import farmHouseIcon from "../../../../icons/farmhouse.png";
import lumberCampIcon from "../../../../icons/lumber-camp.png";
import forgeIcon from "../../../../icons/forge.png";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourcesState
} from "../../../../state/PassiveIncomeSourcesSlice";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import {useAppDispatch, useAppSelector} from "../../../../hooks";

function FloatingGate() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Floating Gate'} text={'Place Yorishiro. Town Center: +30% Production speed, Farmhouse: +75 Food per minute, Lumber Camp: +75 Wood per minute, Forge: +60 Gold per minute'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={floatingGateIcon} alt={'floating gate'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <YorishiroTc/>
            <UpgradeItemCounter icon={farmHouseIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.YORISHIRO_FARM_HOUSE].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.YORISHIRO_FARM_HOUSE))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.YORISHIRO_FARM_HOUSE))}/>
            <UpgradeItemCounter icon={lumberCampIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.YORISHIRO_LUMBER_CAMP].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.YORISHIRO_LUMBER_CAMP))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.YORISHIRO_LUMBER_CAMP))}/>
            <UpgradeItemCounter icon={forgeIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.YORISHIRO_FORGE].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.YORISHIRO_FORGE))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.YORISHIRO_FORGE))}/>
        </div>
    );
}

export default FloatingGate;