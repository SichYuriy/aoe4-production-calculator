import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../upgrade-group/UpgradeGroup";
import GATHERING_RATES_MODIFIERS from "../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import icon1 from '../../../icons/double-broadaxe.png';
import icon2 from '../../../icons/lumber-preservation.png';
import icon3 from '../../../icons/crosscut-saw.png';
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";

function WoodUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.DOUBLE_BROADAX],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.LUMBER_PRESERVATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.CROSSCUT_SAW],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default WoodUpgrades;
