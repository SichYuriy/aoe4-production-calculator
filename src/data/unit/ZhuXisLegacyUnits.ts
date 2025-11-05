import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import yuanRaiderIcon from "../../icons/yuan-raider.png";
import shaolinMonkIcon from "../../icons/shaolin-monk.png";
import imperialGuardIcon from "../../icons/imperial-guard.png";

const ZHU_XIS_LEGACY_UNITS: Unit[] = [
    {
        id: 'YUAN_RAIDER',
        icon: yuanRaiderIcon,
        name: 'yuan raider',
        productionTime: 22.5,
        cost: new UnitCost(80, 20, 20, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 2000
    },
    {
        id: 'SHAOLIN_MONK',
        icon: shaolinMonkIcon,
        name: 'shaolin monk',
        productionTime: 20,
        cost: new UnitCost(200, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 3100
    },
    {
        id: 'IMPERIAL_GUARD',
        icon: imperialGuardIcon,
        name: 'imperial guard',
        productionTime: 35,
        cost: new UnitCost(140, 140, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 4000
    },
];

export default ZHU_XIS_LEGACY_UNITS;
