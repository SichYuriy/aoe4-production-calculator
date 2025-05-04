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
import DynamicPassiveIncomeModifierId from "../../../../data/dynamic-passive-income-modifiers/DynamicPassiveIncomeModifierId";
import { setDynamicPassiveIncomeModifierValue } from "../../../../state/DynamicPassiveIncomeModifiersSlice";
import ResourcesAmount from "../../../../model/ResourcesAmount";
import {FeatureFlags} from "../../../../data/FeatureFlags";

function Pilgrims() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);
    const republicOfGenoaEnabled = !!useAppSelector(rootState => rootState.featureFlags[FeatureFlags.REPUBLIC_OF_GENOA]);
    const currentGoldValue: number = useAppSelector(rootState => rootState.dynamicPassiveIncomeModifiers[DynamicPassiveIncomeModifierId.PILGRIM].value.gold);
    const min = republicOfGenoaEnabled ? Math.floor(40 * 1.3) : 40;
    const max = republicOfGenoaEnabled ? Math.floor(130 * 1.3) : 130;

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
                <input type={'range'} min={min} max={max} value={currentGoldValue} onChange={(e) => changeGoldValue(+e.target.value)}/>
                <span>{max}</span>
                <p>Value: {currentGoldValue}</p>
            </div>
        </div>
    );
}

export default Pilgrims;
