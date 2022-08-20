import foodIcon from '../../icons/food.png';
import woodIcon from '../../icons/wood.png';
import goldIcon from '../../icons/gold.png';
import stoneIcon from '../../icons/stone.png';
import s from './gathering-rates.module.css'
import FoodSource from "../../model/FoodSource";
import {useAppDispatch, useAppSelector} from "../../hooks";
import serviceLocator from "../../application/ServiceLocator";
import {
    changeCustomFoodGatheringRate, changeCustomGoldGatheringRate, changeCustomStoneGatheringRate,
    changeCustomWoodGatheringRate,
    toggleUseCustomGatheringRates
} from "../../state/GatheringRatesSlice";
import GatheringRates from "../../model/GatheringRates";

const gatheringRatesService = serviceLocator.GATHERING_RATES_SERVICE;

function GatheringRatesManagement() {
    const dispatch = useAppDispatch();
    const foodSource: FoodSource = useAppSelector((rootState) => rootState.gatheringRates.foodSource);
    const useCustomGatheringRates: boolean = useAppSelector((rootState) => rootState.gatheringRates.useCustomGatheringRates);
    let customGatheringRates: GatheringRates = useAppSelector((rootState) => rootState.gatheringRates.customGatheringRates);
    let calculatedGatheringRates = gatheringRatesService.getCalculatedGatheringRates(foodSource);
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th><img src={foodIcon} className={s.resourceIcon} alt={'food'}/></th>
                    <th><img src={woodIcon} className={s.resourceIcon} alt={'wood'}/></th>
                    <th><img src={goldIcon} className={s.resourceIcon} alt={'gold'}/></th>
                    <th><img src={stoneIcon} className={s.resourceIcon} alt={'stone'}/></th>
                </tr>
                </thead>
                <tbody>
                <tr className={useCustomGatheringRates ? s.disabled : ''}>
                    <td>{calculatedGatheringRates.food.toFixed(2)}/min</td>
                    <td>{calculatedGatheringRates.wood.toFixed(2)}/min</td>
                    <td>{calculatedGatheringRates.gold.toFixed(2)}/min</td>
                    <td>{calculatedGatheringRates.stone.toFixed(2)}/min</td>
                </tr>
                <tr>
                    <td colSpan={4}><input type={'checkbox'} checked={useCustomGatheringRates} onChange={(e) => dispatch(toggleUseCustomGatheringRates(e.target.checked))}/>Use custom gathering rates</td>
                </tr>
                <tr className={useCustomGatheringRates ? '' : s.disabled}>
                    <td><input type={'number'} disabled={!useCustomGatheringRates} value={customGatheringRates.food} onChange={e => dispatch(changeCustomFoodGatheringRate(+e.target.value))}/>/min</td>
                    <td><input type={'number'} disabled={!useCustomGatheringRates} value={customGatheringRates.wood} onChange={e => dispatch(changeCustomWoodGatheringRate(+e.target.value))}/>/min</td>
                    <td><input type={'number'} disabled={!useCustomGatheringRates} value={customGatheringRates.gold} onChange={e => dispatch(changeCustomGoldGatheringRate(+e.target.value))}/>/min</td>
                    <td><input type={'number'} disabled={!useCustomGatheringRates} value={customGatheringRates.stone} onChange={e => dispatch(changeCustomStoneGatheringRate(+e.target.value))}/>/min</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GatheringRatesManagement;
