import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import desertRaiderIcon from "../../icons/desert-raider.png";
import camelLancerIcon from "../../icons/camel-lancer.png";
import dervishIcon from "../../icons/dervish.png";
import bazaarIcon from "../../icons/trade-wing-bazaar.png";
import mangonelIcon from "../../icons/mangonel.png";
import towerOfTheSultanIcon from "../../icons/tower-of-the-sultan.png";

const AYYUBIDS_UNITS: Unit[] = [
    {
        id: 'DESERT_RAIDER',
        icon: desertRaiderIcon,
        name: 'desert raider',
        productionTime: 30,
        cost: new UnitCost(80, 50, 50, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 2100
    },
    {
        id: 'CAMEL_LANCER',
        icon: camelLancerIcon,
        name: 'camel lancer',
        productionTime: 35,
        cost: new UnitCost(130, 110, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 2600
    },
    {
        id: 'DERVISH',
        icon: dervishIcon,
        name: 'dervish',
        productionTime: 40,
        cost: new UnitCost(60, 140, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 3400
    },
    {
        id: 'FEUDAL_BAZAAR',
        icon: bazaarIcon,
        name: 'feudal bazaar',
        productionTime: 60 * 3,
        cost: new UnitCost(0, 150 * 4, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        civilizationSpecificFeature: true,
        notAffectedByModifiers: true,
        displayOrder: 8700
    },
    {
        id: 'CASTLE_BAZAAR',
        icon: bazaarIcon,
        name: 'castle bazaar',
        productionTime: 60 * 3,
        cost: new UnitCost(0, 350 * 4, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        civilizationSpecificFeature: true,
        notAffectedByModifiers: true,
        displayOrder: 8800
    },
    {
        id: 'IMPERIAL_BAZAAR',
        icon: bazaarIcon,
        name: 'imperial bazaar',
        productionTime: 60 * 3,
        cost: new UnitCost(0, 425 * 4, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        civilizationSpecificFeature: true,
        notAffectedByModifiers: true,
        displayOrder: 8900
    },
    {
        id: 'MANJANIQ',
        icon: mangonelIcon,
        name: 'manganiq',
        productionTime: 40,
        cost: new UnitCost(0, 200, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 10500
    },
    {
        id: 'TOWER_OF_SULTAN',
        icon: towerOfTheSultanIcon,
        name: 'tower of sultan',
        productionTime: 140,
        cost: new UnitCost(0, 350, 650, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 10900
    },
];

export default AYYUBIDS_UNITS;
