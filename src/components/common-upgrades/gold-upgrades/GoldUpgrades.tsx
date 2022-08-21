import UpgradeGroup, {UpgradeGroupItem} from "../upgrade-group/UpgradeGroup";
import GATHERING_RATES_MODIFIERS, {GATHERING_RATE_MODIFIERS_ID} from "../../../data/AllGatheringRateModifiers";
import icon1 from '../../../icons/specialized-pick.png';
import icon2 from '../../../icons/acid-distilization.png';
import icon3 from '../../../icons/cupellation.png';

function GoldUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.SPECIALIZED_PICK],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.ACID_DISTILLATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.CUPELLATION],
        },
    ]

    return (
        <UpgradeGroup items={items}/>
    );
}

export default GoldUpgrades;
