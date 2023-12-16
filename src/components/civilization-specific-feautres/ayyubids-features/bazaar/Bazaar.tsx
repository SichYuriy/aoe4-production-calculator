import AgeSelector from "../../age-selectror/AgeSelector";
import AgeEnum from "../../age-selectror/AgeEnum";
import shared from "../../../../shared.module.css";
import bazaarIcon from "../../../../icons/trade-wing-bazaar.png";
import Tooltip from "../../../tooltip/Tooltip";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";

const UNITS = ['FEUDAL_BAZAAR', 'CASTLE_BAZAAR', 'IMPERIAL_BAZAAR'];

function Bazaar() {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);
    let currentAge = AgeEnum.DARK_AGE;
    if (units['FEUDAL_BAZAAR'] > 0) {
        currentAge = AgeEnum.FEUDAL_AGE;
    } else if (units['CASTLE_BAZAAR'] > 0) {
        currentAge = AgeEnum.CASTLE_AGE;
    } else if (units['IMPERIAL_BAZAAR'] > 0) {
        currentAge = AgeEnum.IMPERIAL_AGE;
    }

    function selectBazaarAge(age: AgeEnum) {
        if (age === AgeEnum.DARK_AGE) {
            unselectAll();
        } else if (age === AgeEnum.FEUDAL_AGE) {
            selectUnit('FEUDAL_BAZAAR');
        } else if (age === AgeEnum.CASTLE_AGE) {
            selectUnit('CASTLE_BAZAAR');
        } else if (age === AgeEnum.IMPERIAL_AGE) {
            selectUnit('IMPERIAL_BAZAAR');
        }
    }

    function unselectAll() {
        dispatch(unselectSelectUnits({
            unselect: UNITS,
            select: []
        }));
    }

    function selectUnit(unitId: string) {
        dispatch(unselectSelectUnits({
            unselect: UNITS,
            select: [unitId]
        }));
    }

    return (
        <Tooltip header={'Bazaar'} text={'Calculate villagers required for spending all the tickets'}>
            <div className={shared.civilizationSpecificFeature}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={bazaarIcon} alt={'bazaar'}/>
                </div>
                <div>:</div>
                <AgeSelector inputName={'bazaar'} selected={currentAge} onSelect={selectBazaarAge}/>
            </div>
        </Tooltip>
    );
}

export default Bazaar;