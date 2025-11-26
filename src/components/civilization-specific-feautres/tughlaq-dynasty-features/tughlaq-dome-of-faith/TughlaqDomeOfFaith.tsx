import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";
import shared from "../../../../shared.module.css";
import domeOfFaithIcon from "../../../../icons/dome-of-faith.png";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import healerElephantIcon from "../../../../icons/healer-elephant-2.png";
import imamIcon from "../../../../icons/imam.png";

const UNITS = ['DOME_OF_FAITH_HEALER_ELEPHANT', 'DOME_OF_FAITH_IMAM'];

function TughlaqDomeOfFaith() {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);
    let noneSelected = !UNITS.some(unitId => units[unitId] > 0);

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
        <div className={shared.civilizationSpecificFeature}>
            <div><img className={shared.civilizationSpecificFeatureIcon} src={domeOfFaithIcon}
                      alt={'dome of faith'}/></div>
            <div>:</div>
            <div className={shared.items}>
                <ImageItem selected={noneSelected} icon={cancelIcon} onClick={unselectAll}/>
                <ImageItem selected={units['DOME_OF_FAITH_HEALER_ELEPHANT'] > 0} icon={healerElephantIcon} onClick={() => selectUnit('DOME_OF_FAITH_HEALER_ELEPHANT')}/>
                <ImageItem selected={units['DOME_OF_FAITH_IMAM'] > 0} icon={imamIcon} onClick={() => selectUnit('DOME_OF_FAITH_IMAM')}/>
            </div>
        </div>
    );
}

export default TughlaqDomeOfFaith;