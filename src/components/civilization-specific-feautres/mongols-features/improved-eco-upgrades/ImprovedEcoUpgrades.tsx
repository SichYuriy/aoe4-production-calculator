import s from './improved-eco-upgrades.module.css'
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import icon1 from "../../../../icons/double-broadaxe.png";
import icon2 from "../../../../icons/horticulture.png";
import icon3 from "../../../../icons/specialized-pick.png";
import GATHERING_RATES_MODIFIERS from "../../../../data/gathering-rate-modifiers/AllGatheringRateModifiers";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../../state/GatheringRateModifiersSlice";

function ImprovedEcoUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const improvedWood = {
        icon: icon1,
        modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_DOUBLE_BROADAX],
    };
    const improvedFood = {
        icon: icon2,
        modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_HORTICULTURE],
    }
    const improvedGold = {
        icon: icon3,
        modifier: GATHERING_RATES_MODIFIERS[GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK],
    };

    return (
        <div>
            <span>Improved eco upgrades:</span>
            <div className={s.improvedUpgrades}>
                <UpgradeItem key={improvedWood.modifier.id}
                             icon={improvedWood.icon}
                             selected={gatheringRateModifiers[improvedWood.modifier.id]}
                             onClick={() => dispatch(toggleGatheringRateModifier(improvedWood.modifier.id))}/>
                <UpgradeItem key={improvedFood.modifier.id}
                             icon={improvedFood.icon}
                             selected={gatheringRateModifiers[improvedFood.modifier.id]}
                             onClick={() => dispatch(toggleGatheringRateModifier(improvedFood.modifier.id))}/>
                <UpgradeItem key={improvedGold.modifier.id}
                             icon={improvedGold.icon}
                             selected={gatheringRateModifiers[improvedGold.modifier.id]}
                             onClick={() => dispatch(toggleGatheringRateModifier(improvedGold.modifier.id))}/>
            </div>
        </div>
    );
}

export default ImprovedEcoUpgrades;
