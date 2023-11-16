import {useState} from "react";
import s from './data-details.module.css';
import UnitsDataDetails from "./units-data-details/UnitsDataDetails";
import {useAppSelector} from "../../hooks";
import {selectActiveGatheringRateModifiers} from "../../state/GatheringRateModifiersSlice";
import ModifierDetails from "./modifier-details/ModifierDetails";
import {selectActiveProductionSpeedModifiers} from "../../state/ProducationSpeedModifiersSlice";
import {selectActiveCostModifiers} from "../../state/CostModifiersSlice";
import PassiveIncomeDetails from "./passive-income-details/PassiveIncomeDetails";
import {selectActiveLimitedFoodGatheringSourceModifiers} from "../../state/LimitedFoodGatheringSourceModifiersSlice";
import LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS
    from "../../data/limited-food-gathering-source-modifiers/AllLimitedFoodGatheringSourceModifiers";
import {selectActiveCostModifiersPerUnit} from "../../state/CostModifiersPerUnitSlice";

function DataDetails() {
    const [seeDataDetails, setSeeDataDetails] = useState(false);
    const gatheringRateModifiers = useAppSelector(selectActiveGatheringRateModifiers);
    const productionSpeedModifiers = useAppSelector(selectActiveProductionSpeedModifiers);
    const costModifiers: {id: string, description: string}[] = useAppSelector(selectActiveCostModifiers);
    const costModifiersPerUnit = useAppSelector(selectActiveCostModifiersPerUnit);
    let limitedFoodGatheringSourceModifiers = useAppSelector(selectActiveLimitedFoodGatheringSourceModifiers)
        .map(state => LIMITED_FOOD_GATHERING_SOURCE_MODIFIERS[state.id]);

    return (
        <div className={s.dataDetails}>
            <div>
                <input type={'checkbox'} checked={seeDataDetails} onChange={e => setSeeDataDetails(e.target.checked)}/>See
                data details.
                You can report wrong data writing <a href="mailto:aoe4production@gmail.com">aoe4production@gmail.com</a>
            </div>
            {seeDataDetails &&
                <div className={s.detailsRow}>
                    <div className={s.unitsDetailsBlock}>
                        <UnitsDataDetails/>
                    </div>
                    <div>
                        <ModifierDetails modifiersLabel={'Gathering rates:'} items={gatheringRateModifiers}/>
                    </div>
                    <div>
                        <ModifierDetails modifiersLabel={'Production time:'} items={productionSpeedModifiers}/>
                    </div>
                    <div>
                        <ModifierDetails modifiersLabel={'Unit cost:'} items={costModifiers.concat(costModifiersPerUnit)}/>
                    </div>
                    <div>
                        <PassiveIncomeDetails/>
                    </div>
                    <div>
                        <ModifierDetails modifiersLabel={'Unique food source:'} items={limitedFoodGatheringSourceModifiers}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default DataDetails;
