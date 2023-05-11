import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../../../../common-upgrades/upgrade-group/UpgradeGroup";
import icon1 from "../../../../../icons/specialized-pick.png";
import GATHERING_RATES_MODIFIERS from "../../../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import GatheringRateModifierId from "../../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import icon2 from "../../../../../icons/acid-distilization.png";
import icon3 from "../../../../../icons/cupellation.png";

function ImprovedGoldUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_ACID_DISTILLATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_CUPELLATION],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default ImprovedGoldUpgrades;
