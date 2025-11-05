import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import ghaziRaiderIcon from "../../icons/ghazi-raider-2.png";
import monkIcon from "../../icons/monk.png";
import towerElephantIcon from "../../icons/tower-war-elephant.png";
import warElephantIcon from "../../icons/war-elephant.png";

const DELHI_UNITS: Unit[] = [
    {
        id: 'GHAZI_RAIDER',
        icon: ghaziRaiderIcon,
        name: 'ghazi raider',
        productionTime: 25,
        cost: new UnitCost(110, 0, 30, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        displayOrder: 2400
    },
    {
        id: 'SCHOLAR',
        icon: monkIcon,
        name: 'scholar',
        productionTime: 30,
        cost: new UnitCost(0, 135, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        displayOrder: 2800
    },
    {
        id: 'DOME_OF_FAIT_SCHOLAR',
        icon: monkIcon,
        name: 'scholar',
        productionTime: 30,
        cost: new UnitCost(0, 80, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 2900
    },
    {
        id: 'TOWER_ELEPHANT',
        icon: towerElephantIcon,
        name: 'tower elephant',
        productionTime: 60,
        cost: new UnitCost(400, 600, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        displayOrder: 9500
    },
    {
        id: 'WAR_ELEPHANT',
        icon: warElephantIcon,
        name: 'war elephant',
        productionTime: 60,
        cost: new UnitCost(400, 350, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        displayOrder: 9600
    },
];

export default DELHI_UNITS;
