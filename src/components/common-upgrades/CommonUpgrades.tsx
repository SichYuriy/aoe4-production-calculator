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
import titheBarnIcon from "../../icons/tithe_barn.png";
import PassiveIncomeSource from "../../data/passive-income-modifiers/PassiveIncomeSource";
import {decrementPassiveIncome, incrementPassiveIncome, PassiveIncomeSourcesState} from "../../state/PassiveIncomeSourcesSlice";
import {PassiveIncomeModifiersState, togglePassiveIncomeModifier} from "../../state/PassiveIncomeModifiersSlice";
import PassiveIncomeModifierId from "../../data/passive-income-modifiers/PassiveIncomeModifierId";
import CivilizationsEnum from "../../data/CivilizationsEnum";

function CommonUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    const civilization: CivilizationsEnum = useAppSelector(rootState => rootState.civilization.selected)
    let wheelbarrowItem = <UpgradeItem icon={wheelbarrowIcon}
                                       selected={gatheringRateModifiers[GatheringRateModifierId.WHEELBARROW]}
                                       onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.WHEELBARROW))}/>
    let forestryItem = <UpgradeItem icon={forestryIcon}
                                    selected={gatheringRateModifiers[GatheringRateModifierId.FORESTRY]}
                                    onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.FORESTRY))}/>
    let militaryAcademyItem = <UpgradeItem icon={militaryAcademyIcon}
                                           selected={productionSpeedModifiers[ProductionSpeedModifierId.MILITARY_ACADEMY]}
                                           onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.MILITARY_ACADEMY))}
                                           tooltip={{header: 'Military academy', text: 'Reduce military production time'}}/>
    let relicsItem = <UpgradeItemCounter icon={relicIcon}
                                         count={passiveIncomeSources[PassiveIncomeSource.RELICS].count}
                                         onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.RELICS))}
                                         onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.RELICS))}
                                         tooltip={{header: 'Relics', text: 'Passive gold income'}}/>
    let sacredSitesItem = <UpgradeItemCounter icon={sacredSiteIcon}
                                              count={passiveIncomeSources[PassiveIncomeSource.SACRED_SITES].count}
                                              onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.SACRED_SITES))}
                                              onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.SACRED_SITES))}
                                              tooltip={{header: 'Sacred sites', text: 'Passive gold income'}}/>
    let titheBarnItem = <UpgradeItem icon={titheBarnIcon}
                                     selected={passiveIncomeModifiers[PassiveIncomeModifierId.TITHE_BARN].selected}
                                     onClick={() => dispatch(togglePassiveIncomeModifier(PassiveIncomeModifierId.TITHE_BARN))}
                                     tooltip={{header: 'Tithe barn', text: 'Passive wood, stone, food income from relics'}}/>

    const showWoodUpgrades = civilization !== CivilizationsEnum.KNIGHTS_TEMPLAR;

    return (
        <div>
            <div><h3>Upgrades:</h3></div>
            <div className={s.upgradesBlock}>
                <div className={s.upgradesColumn}>
                    <div className={s.upgradesRow}>
                        <div className={s.singleUpgrade}>{wheelbarrowItem}</div>
                        {showWoodUpgrades ? <div className={s.singleUpgrade}>{forestryItem}</div> : ''}
                        <div className={s.singleUpgrade}>{militaryAcademyItem}</div>
                    </div>
                    {showWoodUpgrades ? <WoodUpgrades/> : ''}
                    <FoodUpgrades/>
                    <GoldUpgrades/>
                    <div className={s.upgradesRow}>
                        <div className={s.singleUpgrade}>{relicsItem}</div>
                        <div className={s.singleUpgrade}>{sacredSitesItem}</div>
                        <div className={s.singleUpgrade}>{titheBarnItem}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonUpgrades;
