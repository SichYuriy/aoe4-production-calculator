import {useAppSelector} from "../../hooks";
import serviceLocator from "../../application/ServiceLocator";
import foodIcon from "../../icons/food.png";
import woodIcon from "../../icons/wood.png";
import goldIcon from "../../icons/gold.png";
import stoneIcon from "../../icons/stone.png";
import s from './production-calculator.module.css'
import VillagerCounter from "./villager-counter/VillagerCounter";

const productionCalculatorService = serviceLocator.PRODUCTION_CALCULATOR_SERVICE;
const gatheringRatesService = serviceLocator.GATHERING_RATES_SERVICE;

function ProductionCalculator() {
    const selectedUnits = useAppSelector(rootState => rootState.units);
    const foodSource = useAppSelector(rootState => rootState.foodSource.value);
    let gatheringRates = gatheringRatesService.getGatheringRates(foodSource);
    let villagerCost = productionCalculatorService.calculateProductionVillagerCost(gatheringRates, selectedUnits, [], [], []);
    return (
        <div className={s.villagersByResourcesBlock}>
            <div className={s.resourceVillagerBlock}>
                <img src={foodIcon} alt='food' className={s.resourceIcon}/><VillagerCounter count={villagerCost.foodVillagers}/>
            </div>
            <div className={s.resourceVillagerBlock}>
                <img src={woodIcon} alt='wood' className={s.resourceIcon}/><VillagerCounter count={villagerCost.woodVillagers}/>
            </div>
            <div className={s.resourceVillagerBlock}>
                <img src={goldIcon} alt='gold' className={s.resourceIcon}/><VillagerCounter count={villagerCost.goldVillagers}/>
            </div>
            <div className={s.resourceVillagerBlock}>
                <img src={stoneIcon} alt='stone' className={s.resourceIcon}/><VillagerCounter count={villagerCost.stoneVillagers}/>
            </div>
        </div>
    );
}

export default ProductionCalculator;
