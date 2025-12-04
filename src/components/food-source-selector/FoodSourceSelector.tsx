import sheepIcon from '../../icons/sheep.png';
import berryIcon from '../../icons/berrybush.png';
import deerIcon from '../../icons/deer.png';
import farmIcon from '../../icons/farm.png';
import cattleIcon from '../../icons/cattle.png';
import stockyardIcon from '../../icons/stockyard-1.png';
import s from './food-source-selector.module.css'
import FoodSource from "../../model/FoodSource";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeFoodSource} from "../../state/GatheringRatesSlice";
import Tooltip from "../tooltip/Tooltip";

function FoodSourceSelector() {
    const dispatch = useAppDispatch();
    const foodSource: FoodSource = useAppSelector((rootState) => rootState.gatheringRates.foodSource);

    function dispatchChange(event:any) {
        dispatch(changeFoodSource(event.target.value));
    }

    return (
        <div>
            <div className={s.foodSourceTitle}><h3>Food source:</h3></div>

            <label>
                <input type={'radio'} value={FoodSource.SHEEP} name={'food-source'} onChange={dispatchChange} checked={foodSource === FoodSource.SHEEP}/>
                <img src={sheepIcon} className={s.foodSourceRadioIcon} alt={'sheep'}/>
            </label>
            <label>
                <input type={'radio'} value={FoodSource.BERRY} name={'food-source'} onChange={dispatchChange} checked={foodSource === FoodSource.BERRY}/>
                <img src={berryIcon} className={s.foodSourceRadioIcon} alt={'berry'}/>
            </label>
            <label>
                <input type={'radio'} value={FoodSource.DEER} name={'food-source'} onChange={dispatchChange} checked={foodSource === FoodSource.DEER}/>
                <img src={deerIcon} className={s.foodSourceRadioIcon} alt={'deer'}/>
            </label>
            <label>
                <input type={'radio'} value={FoodSource.FARM} name={'food-source'} onChange={dispatchChange} checked={foodSource === FoodSource.FARM}/>
                <img src={farmIcon} className={s.foodSourceRadioIcon} alt={'farm'}/>
            </label>
            <label>
                <Tooltip text={'Use only with Malians'} header={'Cattle'}>
                    <input type={'radio'} value={FoodSource.CATTLE} name={'food-source'} onChange={dispatchChange} checked={foodSource === FoodSource.CATTLE}/>
                    <img src={cattleIcon} className={s.foodSourceRadioIcon} alt={'cattle'}/>
                </Tooltip>
            </label>
            <label>
                <Tooltip text={'Use only with Golden Horde'} header={'Stockyard'}>
                    <input type={'radio'} value={FoodSource.STOCKYARD} name={'food-source'} onChange={dispatchChange} checked={foodSource === FoodSource.STOCKYARD}/>
                    <img src={stockyardIcon} className={s.foodSourceRadioIcon} alt={'stockyard'}/>
                </Tooltip>
            </label>
        </div>
    )
}

export default FoodSourceSelector;
