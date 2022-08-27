import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../upgrade-group/UpgradeGroup";
import GATHERING_RATES_MODIFIERS from "../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import icon1 from '../../../icons/specialized-pick.png';
import icon2 from '../../../icons/acid-distilization.png';
import icon3 from '../../../icons/cupellation.png';
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";

function GoldUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.SPECIALIZED_PICK],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.ACID_DISTILLATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.CUPELLATION],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default GoldUpgrades;
