import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../upgrade-group/UpgradeGroup";
import GATHERING_RATES_MODIFIERS from "../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import icon1 from '../../../icons/horticulture.png';
import icon2 from '../../../icons/fertilization.png';
import icon3 from '../../../icons/precision-cross-breeding.png';
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";

function FoodUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.HORTICULTURE],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.FERTILIZATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.CROSS_BREEDING],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default FoodUpgrades;
