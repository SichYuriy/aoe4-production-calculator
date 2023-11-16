import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {FeatureFlags} from "../../../../data/FeatureFlags";
import ordinanceCompanyIcon from "../../../../icons/ordinance-company.png";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {switchCostModifierPerUnit} from "../../../../state/CostModifiersPerUnitSlice";
import CostModifierPerUnitId from "../../../../data/cost-modifiers-per-unit/CostModifierPerUnitId";
import {disableFeature, enableFeature} from "../../../../state/FeatureFlagsSlice";

function OrdinanceCompany() {
    const dispatch = useAppDispatch();
    const ordinanceCompanyEnabled = !!useAppSelector(rootState => rootState.featureFlags[FeatureFlags.ORDINANCE_COMPANY]);

    function toggleOrdinanceCompany() {
        if (ordinanceCompanyEnabled) {
            dispatch(switchCostModifierPerUnit({from: CostModifierPerUnitId.ORDINANCE_COMPANY, to: CostModifierPerUnitId.CONSECRATE}));
            dispatch(disableFeature(FeatureFlags.ORDINANCE_COMPANY));
        } else {
            dispatch(switchCostModifierPerUnit({from: CostModifierPerUnitId.CONSECRATE, to: CostModifierPerUnitId.ORDINANCE_COMPANY}));
            dispatch(enableFeature(FeatureFlags.ORDINANCE_COMPANY));
        }
    }

    return (
        <UpgradeItem icon={ordinanceCompanyIcon}
                     selected={ordinanceCompanyEnabled}
                     onClick={toggleOrdinanceCompany}
                     tooltip={{header: 'Ordinance Company', text: 'Consecrated buildings also reduce the Wood and Gold cost of units by 25%'}}/>
    );
}

export default OrdinanceCompany;