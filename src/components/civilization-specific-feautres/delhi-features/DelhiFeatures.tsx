import MuslimBerries from "../shared-features/muslim-berries/MuslimBerries";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import sanctityIcon from "../../../icons/sanctity.png";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../../state/PassiveIncomeModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import shared from '../../../shared.module.css';
import domeOfFaithIcon from '../../../icons/dome-of-faith.png';
import {decrement, increment, UnitsState} from "../../../state/UnitsSlice";

function DelhiFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    const units: UnitsState = useAppSelector((rootState) => rootState.units);

    let sanctityItem = <UpgradeItem icon={sanctityIcon}
                                    selected={passiveIncomeModifiers[PassiveIncomeModifierId.SANCTITY].selected}
                                    onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.SANCTITY))}
                                    tooltip={{header: 'Sanctity', text: 'Sacred sites generate more gold'}}/>
    let domeOfFaithItem = <UpgradeItem icon={domeOfFaithIcon}
                                       selected={units['DOME_OF_FAIT_SCHOLAR'] > 0}
                                       onClick={units['DOME_OF_FAIT_SCHOLAR'] > 0 ? () => dispatch(decrement('DOME_OF_FAIT_SCHOLAR')) : () => dispatch(increment('DOME_OF_FAIT_SCHOLAR'))}
                                       tooltip={{header: 'Dome of faith', text: 'Produces cheaper scholar'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <MuslimBerries/>
            <div className={shared.upgradesRow}>
                {sanctityItem}
            </div>
            <div className={shared.upgradesRow}>
                {domeOfFaithItem}
            </div>
        </div>
    );
}

export default DelhiFeatures;
