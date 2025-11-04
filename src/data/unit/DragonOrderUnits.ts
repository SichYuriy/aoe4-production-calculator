import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import villagerIcon from "../../icons/villager.png";
import CivilizationsEnum from "../CivilizationsEnum";
import gildedArcherIcon from "../../icons/gilded-archer.png";
import gildedSpearmanIcon from "../../icons/gilded-spearman.png";
import gildedHorsemanIcon from "../../icons/gilded-horseman.png";
import gildedKnightIcon from "../../icons/gilded-knight.png";
import gildedManAtArmsIcon from "../../icons/gilded-man-at-arms.png";
import gildedLandsknechtIcon from "../../icons/gilded-landsknecht.png";
import gildedCrossbowmanIcon from "../../icons/gilded-crossbowman.png";
import dragonHandcannoneerIcon from "../../icons/dragon-handcannoneer.png";

const DRAGON_VILLAGER_COST = 60;
const DRAGON_VILLAGER_PRODUCTION_TIME = 23;
const DRAGON_ORDER_BURGRAVE_PRODUCTION_SPEED_BONUS = 0.35;
const DRAGON_ORDER_BURGRAVE_COST_DISCOUNT = 0.35;

const DRAGON_ORDER_UNITS: Unit[] = [
    {
        id: 'DRAGON_ORDER_VILLAGER',
        icon: villagerIcon,
        name: 'dragon villager',
        productionTime: DRAGON_VILLAGER_PRODUCTION_TIME,
        cost: new UnitCost(DRAGON_VILLAGER_COST, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 100
    },
    {
        id: 'PALACE_OF_SWABIA_DRAGON_VILLAGER',
        icon: villagerIcon,
        name: 'dragon villager',
        productionTime: DRAGON_VILLAGER_PRODUCTION_TIME / 3,
        cost: new UnitCost(DRAGON_VILLAGER_COST / 3, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 200
    },
    {
        id: 'GILDED_ARCHER',
        icon: gildedArcherIcon,
        name: 'gilded archer',
        productionTime: 18,
        cost: new UnitCost(60, 0, 100, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 900
    },
    {
        id: 'GILDED_SPEARMAN',
        icon: gildedSpearmanIcon,
        name: 'gilded spearman',
        productionTime: 18,
        cost: new UnitCost(120, 0, 40, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 1200
    },
    {
        id: 'BURGRAVE_PALACE_GILDED_SPEARMAN',
        icon: gildedSpearmanIcon,
        name: 'gilded spearman',
        productionTime: 18 * (1 / (1 + DRAGON_ORDER_BURGRAVE_PRODUCTION_SPEED_BONUS)),
        cost: new UnitCost(120 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 0, 40 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 1300
    },
    {
        id: 'GILDED_HORSEMAN',
        icon: gildedHorsemanIcon,
        name: 'gilded horseman',
        productionTime: 27,
        cost: new UnitCost(200, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 2200
    },
    {
        id: 'GILDED_KNIGHT',
        icon: gildedKnightIcon,
        name: 'gilded knight',
        productionTime: 42,
        cost: new UnitCost(280, 200, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 3600
    },
    {
        id: 'GILDED_MAN_AT_ARMS',
        icon: gildedManAtArmsIcon,
        name: 'gilded man at arms',
        productionTime: 27,
        cost: new UnitCost(200, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 4800
    },
    {
        id: 'BURGRAVE_PALACE_GILDED_MAN_AT_ARMS',
        icon: gildedManAtArmsIcon,
        name: 'gilded man at arms',
        productionTime: 27 * (1 / (1 + DRAGON_ORDER_BURGRAVE_PRODUCTION_SPEED_BONUS)),
        cost: new UnitCost(200 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 40 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 4900
    },
    {
        id: 'GILDED_LANDSKNECHT',
        icon: gildedLandsknechtIcon,
        name: 'gilded landsknecht',
        productionTime: 27,
        cost: new UnitCost(120, 200, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 5500
    },
    {
        id: 'BURGRAVE_PALACE_GILDED_LANDSKNECHT',
        icon: gildedLandsknechtIcon,
        name: 'gilded landsknecht',
        productionTime: 27 * (1 / (1 + DRAGON_ORDER_BURGRAVE_PRODUCTION_SPEED_BONUS)),
        cost: new UnitCost(120 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 200 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 5600
    },
    {
        id: 'GILDED_LANDSKNECHT',
        icon: gildedLandsknechtIcon,
        name: 'gilded landsknecht',
        productionTime: 27,
        cost: new UnitCost(120, 200, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 5500
    },
    {
        id: 'BURGRAVE_PALACE_GILDED_LANDSKNECHT',
        icon: gildedLandsknechtIcon,
        name: 'gilded landsknecht',
        productionTime: 27 * (1 / (1 + DRAGON_ORDER_BURGRAVE_PRODUCTION_SPEED_BONUS)),
        cost: new UnitCost(120 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 200 * (1 - DRAGON_ORDER_BURGRAVE_COST_DISCOUNT), 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 5600
    },
    {
        id: 'GILDED_CROSSBOWMAN',
        icon: gildedCrossbowmanIcon,
        name: 'gilded crossbowman',
        productionTime: 27,
        cost: new UnitCost(160, 80, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 5800
    },
    {
        id: 'DRAGON_HANDCANNONEER',
        icon: dragonHandcannoneerIcon,
        name: 'dragon handcannoneer',
        productionTime: 35,
        cost: new UnitCost(240, 240, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        displayOrder: 7600
    },
];

export default DRAGON_ORDER_UNITS;