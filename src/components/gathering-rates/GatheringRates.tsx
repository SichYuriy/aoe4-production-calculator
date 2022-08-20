import foodIcon from '../../icons/food.png';
import woodIcon from '../../icons/wood.png';
import goldIcon from '../../icons/gold.png';
import stoneIcon from '../../icons/stone.png';
import s from './gathering-rates.module.css'
import FoodSource from "../../model/FoodSource";
import {useAppSelector} from "../../hooks";
import serviceLocator from "../../application/ServiceLocator";

const gatheringRatesService = serviceLocator.GATHERING_RATES_SERVICE;

function GatheringRates() {
    const foodSource: FoodSource = useAppSelector((rootState) => rootState.foodSource.value);
    let gatheringRates = gatheringRatesService.getGatheringRates(foodSource);
    return (
        <div>
            <table>
                <tr>
                    <th><img src={foodIcon} className={s.resourceIcon} alt={'food'}/></th>
                    <th><img src={woodIcon} className={s.resourceIcon} alt={'wood'}/></th>
                    <th><img src={goldIcon} className={s.resourceIcon} alt={'gold'}/></th>
                    <th><img src={stoneIcon} className={s.resourceIcon} alt={'stone'}/></th>
                </tr>
                <tr>
                    <td>{gatheringRates.food.toFixed(2)}/min</td>
                    <td>{gatheringRates.wood.toFixed(2)}/min</td>
                    <td>{gatheringRates.gold.toFixed(2)}/min</td>
                    <td>{gatheringRates.stone.toFixed(2)}/min</td>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
    )
}

export default GatheringRates;
