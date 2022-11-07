import s from "./cattle-ranch.module.css";
import cattleRanchIcon from "../../../../icons/cattle-ranch.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeModifiersState
} from "../../../../state/PassiveIncomeModifiersSlice";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import cattleIcon from "../../../../icons/cattle.png";
import PassiveIncomeModifierId from "../../../../data/passive-income-modifiers/PassiveIncomeModifierId";

function CattleRanch() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);

    let cattleRanchCattleItem = <UpgradeItemCounter icon={cattleIcon}
                                                    count={passiveIncomeModifiers[PassiveIncomeModifierId.CATTLE_RANCH_CATTLE].count}
                                                    onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.CATTLE_RANCH_CATTLE))}
                                                    onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.CATTLE_RANCH_CATTLE))}/>

    return (
        <div className={s.cattleRanch}>
            <div><img className={s.cattleRanchIcon} src={cattleRanchIcon} alt={'cattle-ranch'}/></div>
            <div>:</div>
            {cattleRanchCattleItem}
        </div>
    );
}

export default CattleRanch;
