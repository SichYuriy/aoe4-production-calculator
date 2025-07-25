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
import {selectActiveLimitedFoodGatheringSourceModifiers} from "../../state/LimitedFoodGatheringSourceModifiersSlice";
import {selectActivePassiveIncomeFromGatheringVillagerModifiers} from "../../state/PassiveIncomeFromGatheringVillagerModifiersSlice";
import {selectActiveResourceDropOffModifiers} from "../../state/ResourceDropOffModifiersSlice";
import {CalculationUtil} from "../../service/production-calculator-service/CalculationUtil";

const productionCalculatorService = serviceLocator.PRODUCTION_CALCULATOR_SERVICE;
const gatheringRatesService = serviceLocator.GATHERING_RATES_SERVICE;
const passiveIncomeService = serviceLocator.PASSIVE_INCOME_SERVICE;
let limitedFoodGatheringSourceService = serviceLocator.LIMITED_FOOD_GATHERING_SOURCE_SERVICE;

function ProductionCalculator() {
    const [seePreciseNumbers, setSeePreciseNumbers] = useState(false);
    const selectedUnits = useAppSelector(rootState => rootState.units);
    const foodSource = useAppSelector(rootState => rootState.gatheringRates.foodSource);
    const useCustomGatheringRates = useAppSelector(rootState => rootState.gatheringRates.useCustomGatheringRates);
    const customGatheringRates = useAppSelector(rootState => rootState.gatheringRates.customGatheringRates);
    const gatheringRateModifiers = useAppSelector(selectActiveGatheringRateModifiers);
    const costModifiers = useAppSelector(selectActiveCostModifiers);
    const costModifiersPerUnit = useAppSelector(rootState => rootState.costModifiersPerUnit);
    const productionSpeedModifiers = useAppSelector(selectActiveProductionSpeedModifiers);
    const passiveIncomeModifiers = useAppSelector(rootState => rootState.passiveIncomeModifiers);
    const dynamicPassiveIncomeModifiers = useAppSelector(rootState => rootState.dynamicPassiveIncomeModifiers);
    const passiveIncomeSources = useAppSelector(rootState => rootState.passiveIncomeSources);
    const limitedFoodGatheringSourceModifiers = useAppSelector(selectActiveLimitedFoodGatheringSourceModifiers);
    const passiveIncomeFromGatheringVillagerModifiers = useAppSelector(selectActivePassiveIncomeFromGatheringVillagerModifiers);
    const resourceDropOffModifiers = useAppSelector(selectActiveResourceDropOffModifiers);
    let gatheringRates = gatheringRatesService.getGatheringRates(foodSource, useCustomGatheringRates, customGatheringRates,
        gatheringRateModifiers, resourceDropOffModifiers);
    let passiveIncome = passiveIncomeService.getPassiveIncome(passiveIncomeModifiers, passiveIncomeSources);
    let dynamicPassiveIncome = passiveIncomeService.getDynamicPassiveIncome(dynamicPassiveIncomeModifiers, passiveIncomeSources);
    let limitedFoodGatheringSources = limitedFoodGatheringSourceService.getAvailableGatheringSources(limitedFoodGatheringSourceModifiers,
        gatheringRateModifiers, resourceDropOffModifiers);
    let minFoodVillagers: number = useAppSelector(rootState => rootState.minFoodWorkers.value);
    let villagerCost = productionCalculatorService.calculateProductionVillagerCost(
        gatheringRates,
        selectedUnits,
        productionSpeedModifiers,
        costModifiers,
        passiveIncome,
        dynamicPassiveIncome,
        limitedFoodGatheringSources,
        passiveIncomeFromGatheringVillagerModifiers,
        foodSource,
        minFoodVillagers,
        costModifiersPerUnit
    );
    if (!seePreciseNumbers) {
        villagerCost = {
            foodVillagers: CalculationUtil.roundVillagerCost(villagerCost.foodVillagers),
            woodVillagers: CalculationUtil.roundVillagerCost(villagerCost.woodVillagers),
            goldVillagers: CalculationUtil.roundVillagerCost(villagerCost.goldVillagers),
            stoneVillagers: CalculationUtil.roundVillagerCost(villagerCost.stoneVillagers),
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
                <input type={'checkbox'} checked={seePreciseNumbers} onChange={e => setSeePreciseNumbers(e.target.checked)}/>See fractions
            </div>
        </div>
    );
}

export default ProductionCalculator;
