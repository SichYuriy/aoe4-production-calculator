import shared from "../../../../shared.module.css";
import whiteTowerIcon from "../../../../icons/white-tower.png";
import Tooltip from "../../../tooltip/Tooltip";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import knightIcon from "../../../../icons/knight.png";
import manAtArmsIcon from "../../../../icons/man-at-arms.png";
import longbowIcon from "../../../../icons/longbowman.png";
import crossbowmanIcon from "../../../../icons/crossbowman.png";
import spearmanIcon from "../../../../icons/spearman.png";
import horsemanIcon from "../../../../icons/horseman.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";

const UNITS = ['WHITE_TOWER_KNIGHT', 'WHITE_TOWER_MAN_AT_ARMS', 'WHITE_TOWER_CROSSBOWMAN', 'WHITE_TOWER_LONGBOWMAN', 'WHITE_TOWER_SPEARMAN', 'WHITE_TOWER_HORSEMAN'];

function WhiteTower() {
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
            <Tooltip header={'White tower'} text={'Produces unit with increased speed'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={whiteTowerIcon} alt={'white tower'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <div className={shared.items}>
                <ImageItem selected={noneSelected} icon={cancelIcon} onClick={unselectAll}/>
                <ImageItem selected={units['WHITE_TOWER_KNIGHT'] > 0} icon={knightIcon} onClick={() => selectUnit('WHITE_TOWER_KNIGHT')}/>
                <ImageItem selected={units['WHITE_TOWER_MAN_AT_ARMS'] > 0} icon={manAtArmsIcon} onClick={() => selectUnit('WHITE_TOWER_MAN_AT_ARMS')}/>
                <ImageItem selected={units['WHITE_TOWER_CROSSBOWMAN'] > 0} icon={crossbowmanIcon} onClick={() => selectUnit('WHITE_TOWER_CROSSBOWMAN')}/>
                <ImageItem selected={units['WHITE_TOWER_LONGBOWMAN'] > 0} icon={longbowIcon} onClick={() => selectUnit('WHITE_TOWER_LONGBOWMAN')}/>
                <ImageItem selected={units['WHITE_TOWER_SPEARMAN'] > 0} icon={spearmanIcon} onClick={() => selectUnit('WHITE_TOWER_SPEARMAN')}/>
                <ImageItem selected={units['WHITE_TOWER_HORSEMAN'] > 0} icon={horsemanIcon} onClick={() => selectUnit('WHITE_TOWER_HORSEMAN')}/>
            </div>
        </div>
    );
}

export default WhiteTower;