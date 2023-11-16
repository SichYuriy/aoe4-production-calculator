import CostModifierPerUnitFeature from "../../cost-modifier-per-unit/CostModifierPerUnitFeature";
import CostModifierPerUnitId from "../../../../data/cost-modifiers-per-unit/CostModifierPerUnitId";
import consecrateIcon from "../../../../icons/ability-consecrate.png"
import {useAppSelector} from "../../../../hooks";
import {FeatureFlags} from "../../../../data/FeatureFlags";

function JeanneConsecrate() {
    const ordinanceCompanyEnabled = !!useAppSelector(rootState => rootState.featureFlags[FeatureFlags.ORDINANCE_COMPANY]);
    const modifierId = ordinanceCompanyEnabled ? CostModifierPerUnitId.ORDINANCE_COMPANY : CostModifierPerUnitId.CONSECRATE;
    return (
        <div>
            <CostModifierPerUnitFeature modifierId={modifierId} icon={consecrateIcon} tooltip={{header: 'Consecrate', text: 'Reduces cost for selected units'}}/>
        </div>
    );
}

export default JeanneConsecrate