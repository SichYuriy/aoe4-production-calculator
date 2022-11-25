import MuslimBerries from "../shared-features/muslim-berries/MuslimBerries";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import sanctityIcon from "../../../icons/sanctity.png";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../../state/PassiveIncomeModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import s from './delhi-features.module.css'

function DelhiFeatures() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    let sanctityItem = <UpgradeItem icon={sanctityIcon}
                                     selected={passiveIncomeModifiers[PassiveIncomeModifierId.SANCTITY].selected}
                                     onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.SANCTITY))}/>

    return (
        <div className={s.delhiFeatures}>
            <MuslimBerries/>
            {sanctityItem}
        </div>
    );
}

export default DelhiFeatures;
