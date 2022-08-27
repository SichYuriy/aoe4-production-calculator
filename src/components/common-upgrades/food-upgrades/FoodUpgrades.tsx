import UpgradeGroup, {UpgradeGroupItem, UpgradeType} from "../upgrade-group/UpgradeGroup";
import GATHERING_RATES_MODIFIERS, {GATHERING_RATE_MODIFIERS_ID} from "../../../data/AllGatheringRateModifiers";
import icon1 from '../../../icons/horticulture.png';
import icon2 from '../../../icons/fertilization.png';
import icon3 from '../../../icons/precision-cross-breeding.png';

function FoodUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.HORTICULTURE],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.FERTILIZATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.CROSS_BREEDING],
        },
    ]

    return (
        <UpgradeGroup items={items} type={UpgradeType.GATHERING_RATE}/>
    );
}

export default FoodUpgrades;
