import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import villagerIcon from "../../../../icons/villager.png";
import s from "../../english-featrues/enclosures/enslosures.module.css";
import {MANOR_VILLAGER_INCOME} from "../../../../data/civilization-modifiers/HouseOfLancasterModifiers";
import {FormEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {PassiveIncomeSourcesState, setPassiveIncomeCount} from "../../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";

function ManorVillagers() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    function removeLeadingZeros(event: FormEvent<any>) {
        const input: any = event.target;
        if (input && input.value.length > 1) {
            input.value = input.value.replace(/^0+/, '');
        }
    }

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Manor influenced villagers'} text={`Passive ${MANOR_VILLAGER_INCOME.food} food ${MANOR_VILLAGER_INCOME.wood} wood per villager`}>
                <div><img className={shared.civilizationSpecificFeatureIcon} src={villagerIcon}
                          alt={'manor villager'}/></div>
            </Tooltip>
            <div>:</div>
            <div className={s.farmersCountBlock}>
                <input type={'number'} onInput={removeLeadingZeros} min={0} value={passiveIncomeSources[PassiveIncomeSource.MANOR_VILLAGER].count}
                       onChange={e => dispatch(
                           setPassiveIncomeCount({id: PassiveIncomeSource.MANOR_VILLAGER, count: +e.target.value})
                       )}/>
            </div>
        </div>
    );
}

export default ManorVillagers;