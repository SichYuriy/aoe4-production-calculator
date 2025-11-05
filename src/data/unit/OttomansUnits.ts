import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import sipahiIcon from "../../icons/sipahi.png";
import mehterIcon from "../../icons/mehter.png";
import janissaryIcon from "../../icons/janissary.png";
import horseArcherIcon from "../../icons/horse-archer.png";
import greatBombardIcon from "../../icons/great_bombard.png";
import grandGalleyIcon from "../../icons/grand_galley.png";

const OTTOMANS_UNITS: Unit[] = [
    {
        id: 'SIPAHI',
        icon: sipahiIcon,
        name: 'sipahi',
        productionTime: 30,
        cost: new UnitCost(120, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 2300
    },
    {
        id: 'MEHTER',
        icon: mehterIcon,
        name: 'mehter',
        productionTime: 28,
        cost: new UnitCost(100, 80, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 5300
    },
    {
        id: 'JANISSARY',
        icon: janissaryIcon,
        name: 'janissary',
        productionTime: 24,
        cost: new UnitCost(60, 100, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 7900
    },
    {
        id: 'AKINJI',
        icon: horseArcherIcon,
        name: 'akinji',
        productionTime: 24,
        cost: new UnitCost(80, 0, 80, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 8200
    },
    {
        id: 'GREAT_BOMBARD',
        icon: greatBombardIcon,
        name: 'great bombard',
        productionTime: 60,
        cost: new UnitCost(0, 800, 450, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 11100
    },
    {
        id: 'GRAND_GALLEY',
        icon: grandGalleyIcon,
        name: 'grand galley',
        productionTime: 50,
        cost: new UnitCost(135, 300, 360, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 13900
    },
];

export default OTTOMANS_UNITS;
