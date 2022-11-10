import shared from "../../../../shared.module.css";
import enclosuresIcon from "../../../../icons/enclosures.png";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {
    PassiveGoldFromFoodVillagerModifiersState,
    togglePassiveGoldFromFoodVillagerModifier
} from "../../../../state/PassiveGoldFromFoodVillagerModifiersSlice";
import PassiveGoldFromFoodVillagerModifierId
    from "../../../../data/passive-gold-from-food-vilager-modifiers/PassiveGoldFromFoodVillagerModifierId";
import Tooltip from "../../../tooltip/Tooltip";

function Enclosures() {
    const dispatch = useAppDispatch();
    const passiveGoldFromFoodVillagerModifiers: PassiveGoldFromFoodVillagerModifiersState = useAppSelector((rootState) => rootState.passiveGoldFromFoodVillagerModifiers);
    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Enclosures'} text={'It will have an effect only with farm food source selected!'}>
                <UpgradeItem icon={enclosuresIcon}
                             selected={passiveGoldFromFoodVillagerModifiers[PassiveGoldFromFoodVillagerModifierId.ENCLOSURES].selected}
                             onClick={() => dispatch(togglePassiveGoldFromFoodVillagerModifier(PassiveGoldFromFoodVillagerModifierId.ENCLOSURES))}/>
            </Tooltip>
        </div>
    );
}

export default Enclosures;
