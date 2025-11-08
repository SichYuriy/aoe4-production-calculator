import shared from "../../../shared.module.css";
import UpgradeItemCounter from "../../upgrade-item-counter/UpgradeItemCounter";
import manorIcon from "../../../icons/manor-2.png";
import burgundianImportsIcon from "../../../icons/burgundian-imports-3.png";
import PassiveIncomeSource from "../../../data/passive-income-modifiers/PassiveIncomeSource";
import {decrementPassiveIncome, incrementPassiveIncome, PassiveIncomeSourcesState} from "../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import scutageIcon from "../../../icons/scutage-4.png";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../../state/PassiveIncomeModifiersSlice";
import EnglishDocks from "../english-featrues/english-docks/EnglishDocks";
import CostModifierId from "../../../data/cost-modifiers/CostModifierId";
import {CostModifierState, toggleCostModifier} from "../../../state/CostModifiersSlice";
import {LancasterWynguardPalace} from "./wynguard-palace/LancasterWynguardPalace";
import ManorVillagers from "./manor-villagers/ManorVillagers";

function HouseOfLancasterFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    const costModifiers: CostModifierState = useAppSelector((rootState) => rootState.costModifiers);

    const manorItem = <UpgradeItemCounter icon={manorIcon}
                                          count={passiveIncomeSources[PassiveIncomeSource.MANOR].count}
                                          onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.MANOR))}
                                          onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.MANOR))}/>
    let scutage = <UpgradeItem icon={scutageIcon}
                               selected={passiveIncomeModifiers[PassiveIncomeModifierId.SCUTAGE].selected}
                               onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.SCUTAGE))}
                               tooltip={{header: 'Scutage', text: 'Manors generate 30 gold per minute'}}/>
    let burgundianImports = <UpgradeItem icon={burgundianImportsIcon}
                               selected={costModifiers[CostModifierId.BURGUNDIANS_IMPORTS]}
                               onClick={() => dispatch(toggleCostModifier(CostModifierId.BURGUNDIANS_IMPORTS))}
                               tooltip={{header: 'Burgundian Imports', text: 'Reduces Handcannoneer cost by -25%'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Villagers gather from sheep +20% faster</div>
            <EnglishDocks/>
            <div className={shared.upgradesRow}>
                {manorItem}
                <ManorVillagers/>
                {scutage}
            </div>
            <LancasterWynguardPalace/>
            <div className={shared.upgradesRow}>
                {burgundianImports}
            </div>

        </div>
    );
}

export default HouseOfLancasterFeatures;