import shared from "../../../../shared.module.css";
import wynguardPalaceIcon from "../../../../icons/wynguard-palace.png";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import wynguardArmyIcon from "../../../../icons/wynguard-army.png";
import wynguardRaidersIcon from "../../../../icons/wynguard-raiders.png";
import mmaIcon from "../../../../icons/man-at-arms.png";
import wynguardRangersIcon from "../../../../icons/wynguard-rangers.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";

const UNITS = ['WYNGUARD_ARMY', 'WYNGUARD_RAIDERS', 'WYNGUARD_RANGERS', 'WYNGUARD_FOOTMAN'];


function WynguardPalace() {
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
                <ImageItem selected={units['WYNGUARD_RAIDERS'] > 0} icon={wynguardRaidersIcon} onClick={() => selectUnit('WYNGUARD_RAIDERS')}/>
                <ImageItem selected={units['WYNGUARD_RANGERS'] > 0} icon={wynguardRangersIcon} onClick={() => selectUnit('WYNGUARD_RANGERS')}/>
                <ImageItem selected={units['WYNGUARD_FOOTMAN'] > 0} icon={mmaIcon} onClick={() => selectUnit('WYNGUARD_FOOTMAN')}/>
            </div>
        </div>
    );
}

export default WynguardPalace;
