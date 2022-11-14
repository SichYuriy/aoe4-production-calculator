import {useAppDispatch, useAppSelector} from "../../hooks";
import UpgradeItem from "../upgrade-item/UpgradeItem";
import wheelbarrowIcon from '../../icons/wheelbarrow.png';
import forestryIcon from '../../icons/forestry.png';
import militaryAcademyIcon from '../../icons/military-academy.png';
import {toggleGatheringRateModifier} from "../../state/GatheringRateModifiersSlice";
import s from './common-upgrades.module.css';
import WoodUpgrades from "./wood-upgrades/WoodUpgrades";
import FoodUpgrades from "./food-upgrades/FoodUpgrades";
import GoldUpgrades from "./gold-upgrades/GoldUpgrades";
import {toggleProductionSpeedModifier} from "../../state/ProducationSpeedModifiersSlice";
import ProductionSpeedModifierId from "../../data/production-speed-modifiers/ProductionSpeedModifierId";
import GatheringRateModifierId from "../../data/gathering-rate-modifiers/GatheringRateModifierId";
import UpgradeItemCounter from "../upgrade-item-counter/UpgradeItemCounter";
import relicIcon from "../../icons/relic.png";
import sacredSiteIcon from "../../icons/sacred_site.png";
import PassiveIncomeModifierId from "../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {
    decrementPassiveIncome,
    incrementPassiveIncome, PassiveIncomeModifiersState,
} from "../../state/PassiveIncomeModifiersSlice";

function CommonUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    let wheelbarrowItem =  <UpgradeItem icon={wheelbarrowIcon}
                                        selected={gatheringRateModifiers[GatheringRateModifierId.WHEELBARROW]}
                                        onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.WHEELBARROW))}/>
    let forestryItem =  <UpgradeItem icon={forestryIcon}
                                        selected={gatheringRateModifiers[GatheringRateModifierId.FORESTRY]}
                                        onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.FORESTRY))}/>
    let militaryAcademyItem =  <UpgradeItem icon={militaryAcademyIcon}
                                     selected={productionSpeedModifiers[ProductionSpeedModifierId.MILITARY_ACADEMY]}
                                     onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.MILITARY_ACADEMY))}/>
    let relicsItem = <UpgradeItemCounter icon={relicIcon}
                                                    count={passiveIncomeModifiers[PassiveIncomeModifierId.RELICS].count}
                                                    onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.RELICS))}
                                                    onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.RELICS))}/>
    let sacredSitesItem = <UpgradeItemCounter icon={sacredSiteIcon}
                                         count={passiveIncomeModifiers[PassiveIncomeModifierId.SACRED_SITES].count}
                                         onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeModifierId.SACRED_SITES))}
                                         onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeModifierId.SACRED_SITES))}/>
    return (
        <div>
            <div><h3>Upgrades:</h3></div>
            <div className={s.upgradesBlock}>
                <div className={s.upgradesColumn}>
                    <div className={s.upgradesRow}>
                        <div className={s.singleUpgrade}>{wheelbarrowItem}</div>
                        <div className={s.singleUpgrade}>{forestryItem}</div>
                        <div className={s.singleUpgrade}>{militaryAcademyItem}</div>
                    </div>
                    <WoodUpgrades/>
                    <FoodUpgrades/>
                    <GoldUpgrades/>
                    <div className={s.upgradesRow}>
                        <div className={s.singleUpgrade}>{relicsItem}</div>
                        <div className={s.singleUpgrade}>{sacredSitesItem}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonUpgrades;
