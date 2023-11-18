import shared from "../../../shared.module.css";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import regnitzCathedralIcon from "../../../icons/regnitz-cathedral.png";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../../state/PassiveIncomeModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import icon from "../../../icons/palace-of-swabia.png";
import {decrement, increment, UnitsState} from "../../../state/UnitsSlice";

function DragonOrderFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    const units: UnitsState = useAppSelector((rootState) => rootState.units);

    let regnitzCathedralItem = <UpgradeItem icon={regnitzCathedralIcon}
                                    selected={passiveIncomeModifiers[PassiveIncomeModifierId.REGNITZ_CATHEDRAL].selected}
                                    onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.REGNITZ_CATHEDRAL))}
                                    tooltip={{header: 'Regnitz Cathedral', text: 'All Relics generate +100% gold'}}/>

    let palaceOfSwabia = <UpgradeItem icon={icon}
                                      selected={units['PALACE_OF_SWABIA_DRAGON_VILLAGER'] > 0}
                                      onClick={units['PALACE_OF_SWABIA_DRAGON_VILLAGER'] > 0 ? () => dispatch(decrement('PALACE_OF_SWABIA_DRAGON_VILLAGER')) : () => dispatch(increment('PALACE_OF_SWABIA_DRAGON_VILLAGER'))}
                                      tooltip={{header: 'Palace of Swabia', text: 'Produces Villagers +200% faster and at -66% cost'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Villagers carry +40% more resources, gather +25% faster</div>
            <div className={shared.upgradesRow}>
                {regnitzCathedralItem}
                {palaceOfSwabia}
            </div>
        </div>
    );
}

export default DragonOrderFeatures;