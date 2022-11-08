import farimbaGarrisonIcon from "../../../../icons/farimba-garrison.png";
import cancelIcon from "../../../../icons/cancel.png";
import donsoIcon from "../../../../icons/donso.png";
import musofadiWarriorIcon from "../../../../icons/musofadi-warrior.png";
import archerIcon from "../../../../icons/archer.png";
import javelinThrowerIcon from "../../../../icons/javelin_thrower.png";
import musofadiGunnerIcon from "../../../../icons/musofadi-gunner.png";
import shared from '../../../../shared.module.css';
import ImageItem from "../../../image-item/ImageItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {UnitsState, unselectSelectUnits} from "../../../../state/UnitsSlice";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";

const FARIMBA_GARRISON_UNITS = ['FARIMBA_GARRISON_DONSO', 'FARIMBA_GARRISON_MUSOFADI_WARRIOR', 'FARIMBA_GARRISON_ARCHER', 'FARIMBA_GARRISON_JAVELIN_THROWER', 'FARIMBA_GARRISON_MUSOFADI_GUNNER'];

function FarimbaGarrison() {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);
    let noneSelected = !FARIMBA_GARRISON_UNITS.some(unitId => units[unitId] > 0);

    function unselectAll() {
        dispatch(unselectSelectUnits({
            unselect: FARIMBA_GARRISON_UNITS,
            select: []
        }));
    }

    function selectUnit(unitId: string) {
        dispatch(unselectSelectUnits({
            unselect: FARIMBA_GARRISON_UNITS,
            select: [unitId],
            selectCount: 5
        }));
    }

    return (
        <div className={shared.civilizationSpecificFeature}>
            <div><img className={shared.civilizationSpecificFeatureIcon} src={farimbaGarrisonIcon}
                      alt={'farimba-garrison'}/></div>
            <div>:</div>
            <div>

            </div>
            <div className={shared.items}>
                <ImageItem selected={noneSelected} icon={cancelIcon} onClick={unselectAll}/>
                <UpgradeItem icon={donsoIcon} selected={units['FARIMBA_GARRISON_DONSO'] > 0} onClick={() => selectUnit('FARIMBA_GARRISON_DONSO')}/>
                <UpgradeItem icon={musofadiWarriorIcon} selected={units['FARIMBA_GARRISON_MUSOFADI_WARRIOR'] > 0} onClick={() => selectUnit('FARIMBA_GARRISON_MUSOFADI_WARRIOR')}/>
                <UpgradeItem icon={archerIcon} selected={units['FARIMBA_GARRISON_ARCHER'] > 0} onClick={() => selectUnit('FARIMBA_GARRISON_ARCHER')}/>
                <UpgradeItem icon={javelinThrowerIcon} selected={units['FARIMBA_GARRISON_JAVELIN_THROWER'] > 0} onClick={() => selectUnit('FARIMBA_GARRISON_JAVELIN_THROWER')}/>
                <UpgradeItem icon={musofadiGunnerIcon} selected={units['FARIMBA_GARRISON_MUSOFADI_GUNNER'] > 0} onClick={() => selectUnit('FARIMBA_GARRISON_MUSOFADI_GUNNER')}/>
            </div>
        </div>
    );
}

export default FarimbaGarrison;
