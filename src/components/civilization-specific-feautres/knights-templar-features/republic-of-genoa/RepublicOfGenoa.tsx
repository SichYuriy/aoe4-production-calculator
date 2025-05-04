import republicOfGenoaIcon from "../../../../icons/republic-of-genoa-3.png";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {FeatureFlags} from "../../../../data/FeatureFlags";
import {disableFeature, enableFeature} from "../../../../state/FeatureFlagsSlice";
import DynamicPassiveIncomeModifierId from "../../../../data/dynamic-passive-income-modifiers/DynamicPassiveIncomeModifierId";
import {setDynamicPassiveIncomeModifierValue} from "../../../../state/DynamicPassiveIncomeModifiersSlice";
import ResourcesAmount from "../../../../model/ResourcesAmount";

function RepublicOfGenoa() {
    const dispatch = useAppDispatch();
    const republicOfGenoaEnabled = !!useAppSelector(rootState => rootState.featureFlags[FeatureFlags.REPUBLIC_OF_GENOA]);
    const currentGoldValue: number = useAppSelector(rootState => rootState.dynamicPassiveIncomeModifiers[DynamicPassiveIncomeModifierId.PILGRIM].value.gold);

    function toggle() {
        if (republicOfGenoaEnabled) {
            const newGoldValue = Math.max(Math.ceil(currentGoldValue / 1.3), 40);
            dispatch(setDynamicPassiveIncomeModifierValue({
                id: DynamicPassiveIncomeModifierId.PILGRIM,
                income: ResourcesAmount.ofGold(newGoldValue).toSerializableObject()
            }));
            dispatch(disableFeature(FeatureFlags.REPUBLIC_OF_GENOA));
        } else {
            const newGoldValue = Math.floor(currentGoldValue * 1.3);
            dispatch(setDynamicPassiveIncomeModifierValue({
                id: DynamicPassiveIncomeModifierId.PILGRIM,
                income: ResourcesAmount.ofGold(newGoldValue).toSerializableObject()
            }));
            dispatch(enableFeature(FeatureFlags.REPUBLIC_OF_GENOA));
        }
    }

    return (
        <div>
            <UpgradeItem icon={republicOfGenoaIcon}
                         selected={republicOfGenoaEnabled}
                         onClick={toggle}
                         tooltip={{header: 'Republic of Genoa', text: 'Pilgrims generate +30% gold'}}
                         iconHeight={'auto'}/>
        </div>
    );
}

export default RepublicOfGenoa;