import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../../../../common-upgrades/upgrade-group/UpgradeGroup";
import icon1 from "../../../../../icons/horticulture.png";
import GATHERING_RATES_MODIFIERS from "../../../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import GatheringRateModifierId from "../../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import icon2 from "../../../../../icons/fertilization.png";
import icon3 from "../../../../../icons/precision-cross-breeding.png";

function ImprovedFoodUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_HORTICULTURE],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_FERTILIZATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_CROSS_BREEDING],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default ImprovedFoodUpgrades;
