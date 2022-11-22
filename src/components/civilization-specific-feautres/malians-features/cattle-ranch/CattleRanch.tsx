import s from "./cattle-ranch.module.css";
import cattleRanchIcon from "../../../../icons/cattle-ranch.png";
import cattleIcon from "../../../../icons/cattle.png";
import fulaniCorralIcon from "../../../../icons/fulani-corral.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import PassiveIncomeModifierId from "../../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourcesState,
    setPassiveIncomeCount
} from "../../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";

function CattleRanch() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    let cattleRanchCattleItem = <UpgradeItemCounter icon={cattleIcon}
                                                    count={passiveIncomeSources[PassiveIncomeSource.CATTLE_RANCH_CATTLE].count}
                                                    onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.CATTLE_RANCH_CATTLE))}
                                                    onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.CATTLE_RANCH_CATTLE))}/>

    let fulaniCorralCattleItem = <UpgradeItemCounter icon={cattleIcon}
                                                     count={passiveIncomeSources[PassiveIncomeSource.FULANI_CARROL_CATTLE].count}
                                                     onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.FULANI_CARROL_CATTLE))}
                                                     onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.FULANI_CARROL_CATTLE))}/>

    function copyFromRanchToFulaniCorral() {
        dispatch(setPassiveIncomeCount({
            id: PassiveIncomeSource.FULANI_CARROL_CATTLE,
            count: passiveIncomeSources[PassiveIncomeSource.CATTLE_RANCH_CATTLE].count
        }));
    }

    return (
        <div className={s.cattleRanch}>
            <div><img className={s.cattleRanchIcon} src={cattleRanchIcon} alt={'cattle-ranch'}/></div>
            <div>:</div>
            {cattleRanchCattleItem}
            <div className={s.copyButton} onClick={copyFromRanchToFulaniCorral}><FontAwesomeIcon icon={faPlay}/></div>
            <div><img className={s.cattleRanchIcon} src={fulaniCorralIcon} alt={'fulani-corral'}/></div>
            <div>:</div>
            {fulaniCorralCattleItem}
        </div>
    );
}

export default CattleRanch;
