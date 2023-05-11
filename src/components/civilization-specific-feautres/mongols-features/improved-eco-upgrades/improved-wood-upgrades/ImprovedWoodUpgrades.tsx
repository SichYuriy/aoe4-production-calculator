import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../../../../common-upgrades/upgrade-group/UpgradeGroup";
import icon1 from "../../../../../icons/double-broadaxe.png";
import GATHERING_RATES_MODIFIERS from "../../../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import GatheringRateModifierId from "../../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import icon2 from "../../../../../icons/lumber-preservation.png";
import icon3 from "../../../../../icons/crosscut-saw.png";

function ImprovedWoodUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_DOUBLE_BROADAX],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_LUMBER_PRESERVATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_CROSSCUT_SAW],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default ImprovedWoodUpgrades;
