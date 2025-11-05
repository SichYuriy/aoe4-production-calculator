import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import keshikIcon from "../../icons/keshik-2.png";
import traderIcon from "../../icons/trader.png";
import mangudaiIcon from "../../icons/mangudai.png";
import tractionTrebuchetIcon from "../../icons/traction-trebuchet.png";

const TRADER_PRODUCTION_TIME = 30;
const TRADER_GOLD_COST = 60;

const MONGOLS_UNITS: Unit[] = [
    {
        id: 'KESHIK',
        icon: keshikIcon,
        name: 'keshik',
        productionTime: 30,
        cost: new UnitCost(120, 80, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        displayOrder: 2700
    },
    {
        id: 'SILVER_TREE_TRADER',
        icon: traderIcon,
        name: 'silver tree trader',
        productionTime: TRADER_PRODUCTION_TIME * (1 / 1.4),
        cost: new UnitCost(0, TRADER_GOLD_COST * 0.6, 60, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 8600
    },
    {
        id: 'MANGUDAI',
        icon: mangudaiIcon,
        name: 'mangudai',
        productionTime: 28,
        cost: new UnitCost(90, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        displayOrder: 8300
    },
    {
        id: 'TRACTION_TREBUCHET',
        icon: tractionTrebuchetIcon,
        name: 'traction trebuchet',
        productionTime: 30,
        cost: new UnitCost(0, 100, 300, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        displayOrder: 10800
    },
];

export default MONGOLS_UNITS;
