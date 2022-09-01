import {useState} from "react";
import s from './data-details.module.css';
import UnitsDataDetails from "./units-data-details/UnitsDataDetails";

function DataDetails() {
    const [seeDataDetails, setSeeDataDetails] = useState(false);

    return (
        <div className={s.dataDetails}>
            <div>
                <input type={'checkbox'} checked={seeDataDetails} onChange={e => setSeeDataDetails(e.target.checked)}/>See
                data details
            </div>
            {seeDataDetails &&
              <div>
                <UnitsDataDetails/>
              </div>
            }

        </div>
    );
}

export default DataDetails;
