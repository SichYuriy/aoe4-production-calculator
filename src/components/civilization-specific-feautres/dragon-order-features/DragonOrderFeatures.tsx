import shared from "../../../shared.module.css";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import regnitzCathedralIcon from "../../../icons/regnitz-cathedral.png";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../../state/PassiveIncomeModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";

function DragonOrderFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);

    let regnitzCathedralItem = <UpgradeItem icon={regnitzCathedralIcon}
                                    selected={passiveIncomeModifiers[PassiveIncomeModifierId.REGNITZ_CATHEDRAL].selected}
                                    onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.REGNITZ_CATHEDRAL))}
                                    tooltip={{header: 'Regnitz Cathedral', text: 'All Relics generate +100% gold'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Villagers carry +40% more resources, gather +25% faster, and construct buildings +20% faster</div>
            <div className={shared.upgradesRow}>
                {regnitzCathedralItem}
            </div>
        </div>
    );
}

export default DragonOrderFeatures;