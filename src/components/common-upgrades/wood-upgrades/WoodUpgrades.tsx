import UpgradeGroup, {UpgradeGroupItem} from "../upgrade-group/UpgradeGroup";
import GATHERING_RATES_MODIFIERS, {GATHERING_RATE_MODIFIERS_ID} from "../../../data/AllGatheringRateModifiers";
import icon1 from '../../../icons/double-broadaxe.png';
import icon2 from '../../../icons/lumber-preservation.png';
import icon3 from '../../../icons/crosscut-saw.png';

function WoodUpgrades() {
    let items: UpgradeGroupItem[] = [
        {
            icon: icon1,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.DOUBLE_BROADAX],
        },
        {
            icon: icon2,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.LUMBER_PRESERVATION],
        },
        {
            icon: icon3,
            modifier: GATHERING_RATES_MODIFIERS[GATHERING_RATE_MODIFIERS_ID.CROSSCUT_SAW],
        },
    ]

    return (
        <UpgradeGroup items={items}/>
    );
}

export default WoodUpgrades;
