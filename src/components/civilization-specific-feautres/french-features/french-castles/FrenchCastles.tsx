import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../../../common-upgrades/upgrade-group/UpgradeGroup";
import icon1 from "../../../../icons/keep.png";
import icon2 from "../../../../icons/enlistment-incentives.png";
import COST_MODIFIERS from "../../../../data/cost-modifiers/AllCostModifiers";
import CostModifierId from "../../../../data/cost-modifiers/CostModifierId";

function FrenchCastles() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: COST_MODIFIERS[CostModifierId.FRENCH_CASTLE],
        },
        {
            icon: icon2,
            modifier: COST_MODIFIERS[CostModifierId.ENLISTMENTS_INCENTIVES],
        }
    ]
    return (
        <UpgradeGroup items={items} type={UpgradeType.COST}/>
    );
}

export default FrenchCastles;
