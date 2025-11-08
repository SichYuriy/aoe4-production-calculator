import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import cattleIcon from "../../icons/cattle.png";
import donsoIcon from "../../icons/donso.png";
import sofaIcon from "../../icons/sofa.png";
import musofadiWarriorIcon from "../../icons/musofadi-warrior.png";
import javelinThrowerIcon from "../../icons/javelin_thrower.png";
import mansaJavelineerIcon from "../../icons/mansa-javelineer-3.png";
import mansaMusofadiWarriorIcon from "../../icons/mansa-musofadi-warrior-3.png";
import freebornWarriorIcon from "../../icons/freeborn-warrior-3.png";
import musofadiGunnerIcon from "../../icons/musofadi-gunner.png";
import warriorScoutIcon from "../../icons/warrior_scout.png";
import dhowIcon from "../../icons/dhow.png";
import hulkIcon from "../../icons/hulk.png";

const MALIAN_UNITS: Unit[] = [
    {
        id: 'CATTLE',
        icon: cattleIcon,
        name: 'cattle',
        productionTime: 15,
        cost: new UnitCost(0, 90, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 500
    },
    {
        id: 'DONSO',
        icon: donsoIcon,
        name: 'donso',
        productionTime: 15,
        cost: new UnitCost(60, 0, 30, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 1500
    },
    {
        id: 'SOFA',
        icon: sofaIcon,
        name: 'sofa',
        productionTime: 26,
        cost: new UnitCost(120, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 4100
    },
    {
        id: 'MUSOFADI_WARRIOR',
        icon: musofadiWarriorIcon,
        name: 'musofadi warrior',
        productionTime: 15,
        cost: new UnitCost(45, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 5200
    },
    {
        id: 'JAVELIN_THROWER',
        icon: javelinThrowerIcon,
        name: 'javelin thrower',
        productionTime: 22,
        cost: new UnitCost(80, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 6100
    },
    {
        id: 'MANSA_JAVELINEER',
        icon: mansaJavelineerIcon,
        name: 'mansa javelineer',
        productionTime: 23,
        cost: new UnitCost(80, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 6200
    },
    {
        id: 'MANSA_MUSOFADI_WARRIOR',
        icon: mansaMusofadiWarriorIcon,
        name: 'mansa musofadi',
        productionTime: 15,
        cost: new UnitCost(45, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 6300
    },
    {
        id: 'FREEBORN_WARRIOR',
        icon: freebornWarriorIcon,
        name: 'freeborn warrior',
        productionTime: 15,
        cost: new UnitCost(80, 35, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 6400
    },
    {
        id: 'MUSOFADI_GUNNER',
        icon: musofadiGunnerIcon,
        name: 'musofadi gunner',
        productionTime: 35,
        cost: new UnitCost(110, 130, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 8000
    },
    {
        id: 'WARRIOR_SCOUT',
        icon: warriorScoutIcon,
        name: 'warrior scout',
        productionTime: 14,
        cost: new UnitCost(90, 0, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 9800
    },
    {
        id: 'HUNTING_CANOE',
        icon: dhowIcon,
        name: 'hunting canoe',
        productionTime: 25,
        cost: new UnitCost(80, 0, 150, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 14000
    },
    {
        id: 'WAR_CANOE',
        icon: hulkIcon,
        name: 'war canoe',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        displayOrder: 14100
    },
];

export default MALIAN_UNITS;
