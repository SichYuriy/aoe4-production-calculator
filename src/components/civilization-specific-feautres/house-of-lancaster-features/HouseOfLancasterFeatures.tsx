import shared from "../../../shared.module.css";
import UpgradeItemCounter from "../../upgrade-item-counter/UpgradeItemCounter";
import manorIcon from "../../../icons/manor-2.png";
import PassiveIncomeSource from "../../../data/passive-income-modifiers/PassiveIncomeSource";
import {decrementPassiveIncome, incrementPassiveIncome, PassiveIncomeSourcesState} from "../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import scutageIcon from "../../../icons/scutage-4.png";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../../state/PassiveIncomeModifiersSlice";
import EnglishDocks from "../english-featrues/english-docks/EnglishDocks";

function HouseOfLancasterFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);

    const manorItem = <UpgradeItemCounter icon={manorIcon}
                                          count={passiveIncomeSources[PassiveIncomeSource.MANOR].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.MANOR))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.MANOR))}/>
    let scutage = <UpgradeItem icon={scutageIcon}
                               selected={passiveIncomeModifiers[PassiveIncomeModifierId.SCUTAGE].selected}
                               onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.SCUTAGE))}
                               tooltip={{header: 'Scutage', text: 'Manors generate 40 gold per minute'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Villagers gather from sheep +20% faster</div>
            <EnglishDocks/>
            <div className={shared.upgradesRow}>
                {manorItem}
                {scutage}
            </div>
        </div>
    );
}

export default HouseOfLancasterFeatures;