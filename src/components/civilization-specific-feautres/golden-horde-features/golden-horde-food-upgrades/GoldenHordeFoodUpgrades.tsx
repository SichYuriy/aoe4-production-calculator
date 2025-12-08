import UpgradeGroup, {UpgradeType} from "../../../common-upgrades/upgrade-group/UpgradeGroup";
import rotationGrazingIcon from "../../../../icons/rotation-grazing-2.png";
import overGrazingIcon from "../../../../icons/over-grazing-3.png";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";


const items = [
    {
        icon: rotationGrazingIcon,
        modifier: {id: GatheringRateModifierId.ROTATION_GRAZING}
    },
    {
        icon: overGrazingIcon,
        modifier: {id: GatheringRateModifierId.OVER_GRAZING}
    }
]

function GoldenHordeFoodUpgrades() {
    return (
        <div>
            <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
        </div>
    );
}

export default GoldenHordeFoodUpgrades;