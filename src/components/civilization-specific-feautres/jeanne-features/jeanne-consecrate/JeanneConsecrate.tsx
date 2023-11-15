import CostModifierPerUnitFeature from "../../cost-modifier-per-unit/CostModifierPerUnitFeature";
import CostModifierPerUnitId from "../../../../data/cost-modifiers-per-unit/CostModifierPerUnitId";
import consecrateIcon from "../../../../icons/ability-consecrate.png"

function JeanneConsecrate() {
    return (
        <div>
            <CostModifierPerUnitFeature modifierId={CostModifierPerUnitId.CONSECRATE} icon={consecrateIcon} tooltip={{header: 'Consecrate', text: 'Reduces cost for selected units'}}/>
        </div>
    );
}

export default JeanneConsecrate