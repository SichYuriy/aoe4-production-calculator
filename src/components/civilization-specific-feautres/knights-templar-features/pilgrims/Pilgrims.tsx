import monkIcon from "../../../../icons/monk.png";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import shared from '../../../../shared.module.css';
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourcesState,
} from "../../../../state/PassiveIncomeSourcesSlice";
import s from './pilgrim.module.css';
import DynamicPassiveIncomeModifierId from "../../../../data/dynamic-passive-income-modifiers/DynamicPassiveIncomeModifiers";
import { setDynamicPassiveIncomeModifierValue } from "../../../../state/DynamicPassiveIncomeModifiersSlice";
import ResourcesAmount from "../../../../model/ResourcesAmount";

function Pilgrims() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);
    const defaultGoldValue: number = useAppSelector(rootState => rootState.dynamicPassiveIncomeModifiers[DynamicPassiveIncomeModifierId.PILGRIM].value.gold);
    const [min, max] = [40, 130];

    let pilgrimItem = (
        <UpgradeItemCounter icon={monkIcon}
                            count={passiveIncomeSources[PassiveIncomeSource.PILGRIM].count}
                            onIncrement={() => dispatch(incrementPassiveIncome(DynamicPassiveIncomeModifierId.PILGRIM))}
                            onDecrement={() => dispatch(decrementPassiveIncome(DynamicPassiveIncomeModifierId.PILGRIM))}/>);

    function changeGoldValue(value: number) {
        dispatch(setDynamicPassiveIncomeModifierValue({
            id: DynamicPassiveIncomeModifierId.PILGRIM, 
            income: ResourcesAmount.ofGold(value).toSerializableObject()
        }));
    }

    return (
        <div className={shared.upgradesRow}>
                {pilgrimItem}
                <div className={s.colon}>:</div>
            <div className={s.pilgrimCountBlock}>
                <span>{min}</span>
                <input type={'range'} min={min} max={max} value={defaultGoldValue} onChange={(e) => changeGoldValue(+e.target.value)}/>
                <span>{max}</span>
                <p>Value: {defaultGoldValue}</p>
            </div>
        </div>
    );
}

export default Pilgrims;
