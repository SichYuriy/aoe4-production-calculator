import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";
import shared from "../../../../shared.module.css";
import burgravePalaceIcon from "../../../../icons/burgrave-palace.png";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import UnitItem from "../../../unit-item/UnitItem";
import Tooltip from "../../../tooltip/Tooltip";

const UNITS = ['BURGRAVE_PALACE_GILDED_SPEARMAN', 'BURGRAVE_PALACE_GILDED_MAN_AT_ARMS', 'BURGRAVE_PALACE_GILDED_LANDSKNECHT'];

function BurgravePalace() {
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
            <div>
                <Tooltip header={'Burgrave Palace'} text={'Produces units 30% faster and 30% cheaper'}>
                    <img className={shared.civilizationSpecificFeatureIcon} src={burgravePalaceIcon}
                          alt={'burgrave palace'}/>
                </Tooltip>
            </div>
            <div>:</div>
            <div className={shared.items}>
                <ImageItem selected={noneSelected} icon={cancelIcon} onClick={unselectAll}/>
                <UnitItem selected={units['BURGRAVE_PALACE_GILDED_SPEARMAN'] > 0} unitId={'BURGRAVE_PALACE_GILDED_SPEARMAN'} onClick={() => selectUnit('BURGRAVE_PALACE_GILDED_SPEARMAN')}/>
                <UnitItem selected={units['BURGRAVE_PALACE_GILDED_MAN_AT_ARMS'] > 0} unitId={'BURGRAVE_PALACE_GILDED_MAN_AT_ARMS'} onClick={() => selectUnit('BURGRAVE_PALACE_GILDED_MAN_AT_ARMS')}/>
                <UnitItem selected={units['BURGRAVE_PALACE_GILDED_LANDSKNECHT'] > 0} unitId={'BURGRAVE_PALACE_GILDED_LANDSKNECHT'} onClick={() => selectUnit('BURGRAVE_PALACE_GILDED_LANDSKNECHT')}/>
            </div>
        </div>
    );
}

export default BurgravePalace;