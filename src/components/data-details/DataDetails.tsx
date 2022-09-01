import {useState} from "react";
import s from './data-details.module.css';
import UnitsDataDetails from "./units-data-details/UnitsDataDetails";
import {useAppSelector} from "../../hooks";
import {selectActiveGatheringRateModifiers} from "../../state/GatheringRateModifiersSlice";
import ModifierDetails from "./modifier-details/ModifierDetails";
import {selectActiveProductionSpeedModifiers} from "../../state/ProducationSpeedModifiersSlice";
import {selectActiveCostModifiers} from "../../state/CostModifiersSlice";

function DataDetails() {
    const [seeDataDetails, setSeeDataDetails] = useState(false);
    const gatheringRateModifiers = useAppSelector(selectActiveGatheringRateModifiers);
    const productionSpeedModifiers = useAppSelector(selectActiveProductionSpeedModifiers);
    const costModifiers = useAppSelector(selectActiveCostModifiers);

    return (
        <div className={s.dataDetails}>
            <div>
                <input type={'checkbox'} checked={seeDataDetails} onChange={e => setSeeDataDetails(e.target.checked)}/>See
                data details
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
                  <ModifierDetails modifiersLabel={'Unit cost:'} items={costModifiers}/>
                </div>
              </div>
            }
        </div>
    );
}

export default DataDetails;
