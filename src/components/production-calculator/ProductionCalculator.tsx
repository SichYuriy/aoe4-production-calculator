import {useAppSelector} from "../../hooks";
import serviceLocator from "../../application/ServiceLocator";
import foodIcon from "../../icons/food.png";
import woodIcon from "../../icons/wood.png";
import goldIcon from "../../icons/gold.png";
import stoneIcon from "../../icons/stone.png";
import './production-calculator.css'
import VillagerCounter from "./villager-counter/VillagerCounter";

const productionCalculatorService = serviceLocator.PRODUCTION_CALCULATOR_SERVICE;
const gatheringRatesService = serviceLocator.GATHERING_RATES_SERVICE;

function ProductionCalculator() {
    const selectedUnits = useAppSelector(rootState => rootState.units);
    const foodSource = useAppSelector(rootState => rootState.foodSource.value);
    let gatheringRates = gatheringRatesService.getGatheringRates(foodSource);
    let villagerCost = productionCalculatorService.calculateProductionVillagerCost(gatheringRates, selectedUnits, [], [], []);
    return (
        <div className={'villagers-by-resources-block'}>
            <div className={'resource-villager-block'}>
                <img src={foodIcon} alt='food' className={'resource-icon'}/><VillagerCounter count={villagerCost.foodVillagers}/>
            </div>
            <div className={'resource-villager-block'}>
                <img src={woodIcon} alt='wood' className={'resource-icon'}/><VillagerCounter count={villagerCost.woodVillagers}/>
            </div>
            <div className={'resource-villager-block'}>
                <img src={goldIcon} alt='gold' className={'resource-icon'}/><VillagerCounter count={villagerCost.goldVillagers}/>
            </div>
            <div className={'resource-villager-block'}>
                <img src={stoneIcon} alt='stone' className={'resource-icon'}/><VillagerCounter count={villagerCost.stoneVillagers}/>
            </div>
        </div>
    );
}

export default ProductionCalculator;
