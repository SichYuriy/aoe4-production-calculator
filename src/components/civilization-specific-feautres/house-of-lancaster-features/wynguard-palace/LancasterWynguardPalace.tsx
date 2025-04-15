import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";
import shared from "../../../../shared.module.css";
import wynguardPalaceIcon from "../../../../icons/wynguard-palace.png";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import wynguardArmyIcon from "../../../../icons/wynguard-army.png";
import earlsRetinueIcon from '../../../../icons/earls-retinue-1.png'
import garrisonCommandIcon from '../../../../icons/garrison-command-1.png'
import gunpowderContingentIcon from '../../../../icons/gunpowder-contingent-1.png'

const UNITS = ['WYNGUARD_ARMY', 'EARLS_RETINUE', 'GARRISON_COMMAND', 'GUNPOWDER_CONTINGENT'];

export function LancasterWynguardPalace() {
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
            <div><img className={shared.civilizationSpecificFeatureIcon} src={wynguardPalaceIcon}
                      alt={'wynguard palace'}/></div>
            <div>:</div>
            <div className={shared.items}>
                <ImageItem selected={noneSelected} icon={cancelIcon} onClick={unselectAll}/>
                <ImageItem selected={units['WYNGUARD_ARMY'] > 0} icon={wynguardArmyIcon} onClick={() => selectUnit('WYNGUARD_ARMY')}/>
                <ImageItem selected={units['EARLS_RETINUE'] > 0} icon={earlsRetinueIcon} onClick={() => selectUnit('EARLS_RETINUE')}/>
                <ImageItem selected={units['GARRISON_COMMAND'] > 0} icon={garrisonCommandIcon} onClick={() => selectUnit('GARRISON_COMMAND')}/>
                <ImageItem selected={units['GUNPOWDER_CONTINGENT'] > 0} icon={gunpowderContingentIcon} onClick={() => selectUnit('GUNPOWDER_CONTINGENT')}/>
            </div>
        </div>
    );
}