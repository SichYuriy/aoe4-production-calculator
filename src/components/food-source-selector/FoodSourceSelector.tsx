import sheepIcon from '../../icons/sheep.png';
import berryIcon from '../../icons/berrybush.png';
import deerIcon from '../../icons/deer.png';
import farmIcon from '../../icons/farm.png';
import s from './food-source-selector.module.css'
import FoodSource from "../../model/FoodSource";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeFoodSource} from "../../state/FoodSourceSlice";

function FoodSourceSelector() {
    const dispatch = useAppDispatch();
    const foodSource: FoodSource = useAppSelector((rootState) => rootState.foodSource.value);

    function dispatchChange(event:any) {
        dispatch(changeFoodSource(event.target.value));
    }

    return (
        <div>
            <div className={s.foodSourceTitle}><h3>Food source:</h3></div>

            <label>
                <input type={'radio'} value={FoodSource.SHEEP} name={'name-1'} onChange={dispatchChange} checked={foodSource === FoodSource.SHEEP}/>
                <img src={sheepIcon} className={s.foodSourceRadioIcon} alt={'sheep'}/>
            </label>
            <label>
                <input type={'radio'} value={FoodSource.BERRY} name={'name-1'} onChange={dispatchChange} checked={foodSource === FoodSource.BERRY}/>
                <img src={berryIcon} className={s.foodSourceRadioIcon} alt={'berry'}/>
            </label>
            <label>
                <input type={'radio'} value={FoodSource.DEER} name={'name-1'} onChange={dispatchChange} checked={foodSource === FoodSource.DEER}/>
                <img src={deerIcon} className={s.foodSourceRadioIcon} alt={'deer'}/>
            </label>
            <label>
                <input type={'radio'} value={FoodSource.FARM} name={'name-1'} onChange={dispatchChange} checked={foodSource === FoodSource.FARM}/>
                <img src={farmIcon} className={s.foodSourceRadioIcon} alt={'farm'}/>
            </label>
        </div>
    )
}

export default FoodSourceSelector;
