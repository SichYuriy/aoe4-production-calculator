import {useAppSelector} from "../../hooks";
import serviceLocator from "../../application/ServiceLocator";
import foodIcon from "../../icons/food.png";
import woodIcon from "../../icons/wood.png";
import goldIcon from "../../icons/gold.png";
import stoneIcon from "../../icons/stone.png";
import s from './production-calculator.module.css'
import VillagerCounter from "./villager-counter/VillagerCounter";
import {selectActiveGatheringRateModifiers} from "../../state/GatheringRateModifiersSlice";
import {selectActiveProductionSpeedModifiers} from "../../state/ProducationSpeedModifiersSlice";
import {selectActiveCostModifiers} from "../../state/CostModifiersSlice";
import {useState} from "react";

const productionCalculatorService = serviceLocator.PRODUCTION_CALCULATOR_SERVICE;
const gatheringRatesService = serviceLocator.GATHERING_RATES_SERVICE;

function ProductionCalculator() {
    const [seePreciseNumbers, setSeePreciseNumbers] = useState(false);
    const selectedUnits = useAppSelector(rootState => rootState.units);
    const foodSource = useAppSelector(rootState => rootState.gatheringRates.foodSource);
    const useCustomGatheringRates = useAppSelector(rootState => rootState.gatheringRates.useCustomGatheringRates);
    const customGatheringRates = useAppSelector(rootState => rootState.gatheringRates.customGatheringRates);
    const gatheringRateModifiers = useAppSelector(selectActiveGatheringRateModifiers);
    const costModifiers = useAppSelector(selectActiveCostModifiers);
    const productionSpeedModifiers = useAppSelector(selectActiveProductionSpeedModifiers);
    let gatheringRates = gatheringRatesService.getGatheringRates(foodSource, useCustomGatheringRates, customGatheringRates, gatheringRateModifiers);
    let villagerCost = productionCalculatorService.calculateProductionVillagerCost(gatheringRates, selectedUnits, productionSpeedModifiers, costModifiers);
    if (!seePreciseNumbers) {
        villagerCost = {
            foodVillagers: roundVillagerCount(villagerCost.foodVillagers),
            woodVillagers: roundVillagerCount(villagerCost.woodVillagers),
            goldVillagers: roundVillagerCount(villagerCost.goldVillagers),
            stoneVillagers: roundVillagerCount(villagerCost.stoneVillagers),
        }
    }
    let factionDigits = seePreciseNumbers ? 2 : 0;
    return (
        <div>
            <div className={s.villagersByResourcesBlock}>
                <div className={s.resourceVillagerBlock}>
                    <img src={foodIcon} alt='food' className={s.resourceIcon}/><VillagerCounter count={villagerCost.foodVillagers} factionDigits={factionDigits}/>
                </div>
                <div className={s.resourceVillagerBlock}>
                    <img src={woodIcon} alt='wood' className={s.resourceIcon}/><VillagerCounter count={villagerCost.woodVillagers} factionDigits={factionDigits}/>
                </div>
                <div className={s.resourceVillagerBlock}>
                    <img src={goldIcon} alt='gold' className={s.resourceIcon}/><VillagerCounter count={villagerCost.goldVillagers} factionDigits={factionDigits}/>
                </div>
                <div className={s.resourceVillagerBlock}>
                    <img src={stoneIcon} alt='stone' className={s.resourceIcon}/><VillagerCounter count={villagerCost.stoneVillagers} factionDigits={factionDigits}/>
                </div>
            </div>
            <div className={s.seePreciseNumbersInput}>
                <input type={'checkbox'} checked={seePreciseNumbers} onChange={e => setSeePreciseNumbers(e.target.checked)}/>See faction
            </div>
        </div>
    );
}

function roundVillagerCount(val: number): number {
    if (val - Math.floor(val) < 0.3) {
        return Math.floor(val);
    } else {
        return Math.ceil(val);
    }
}

export default ProductionCalculator;
