import {useState} from "react";
import s from './data-details.module.css';
import UnitsDataDetails from "./units-data-details/UnitsDataDetails";
import {useAppSelector} from "../../hooks";
import {selectActiveGatheringRateModifiers} from "../../state/GatheringRateModifiersSlice";
import ModifierDetails from "./modifier-details/ModifierDetails";

function DataDetails() {
    const [seeDataDetails, setSeeDataDetails] = useState(false);
    const gatheringRateModifiers = useAppSelector(selectActiveGatheringRateModifiers);


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
              </div>
            }

        </div>
    );
}

export default DataDetails;
