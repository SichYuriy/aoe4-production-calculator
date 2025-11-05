import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import villagerIcon from "../../icons/villager.png";
import CivilizationsEnum from "../CivilizationsEnum";
import yumiAshigaruIcon from "../../icons/yumi-ashigaru.png";
import onnaBugeishaIcon from "../../icons/onna-bugeisha.png";
import shinobiIcon from "../../icons/shinobi.png";
import buddhistIcon from "../../icons/buddhist-monk.png";
import shintoPriestIcon from "../../icons/shinto-priest.png";
import samuraiIcon from "../../icons/samurai.png";
import mountedSamuraiIcon from "../../icons/mounted-samurai.png";
import onnaMushaIcon from "../../icons/onna-musha.png";
import ozutsuIcon from "../../icons/ozutsu.png";
import atakebuneIcon from "../../icons/atakebune.png";

const VILLAGER_PRODUCTION_TIME = 20;

const JAPANESE_UNITS: Unit[] = [
    {
        id: 'FLOATING_GATE_VILLAGER',
        icon: villagerIcon,
        name: 'Yorishiro TC villager',
        productionTime: VILLAGER_PRODUCTION_TIME * (1 / 1.30),
        cost: new UnitCost(50, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 400
    },
    {
        id: 'YUMI_ASHIGARU',
        icon: yumiAshigaruIcon,
        name: 'yumi ashigaru',
        productionTime: 13,
        cost: new UnitCost(25, 0, 35, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 800
    },
    {
        id: 'ONNA_BUGEISHA',
        icon: onnaBugeishaIcon,
        name: 'onna-bugeisha',
        productionTime: 15,
        cost: new UnitCost(60, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 1600
    },
    {
        id: 'SHINOBI',
        icon: shinobiIcon,
        name: 'shinobi',
        productionTime: 20,
        cost: new UnitCost(50, 50, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 1700
    },
    {
        id: 'BUDDHIST_MONK',
        icon: buddhistIcon,
        name: 'buddhist monk',
        productionTime: 30,
        cost: new UnitCost(0, 80, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 3200
    },
    {
        id: 'SHINTO_PRIEST',
        icon: shintoPriestIcon,
        name: 'shinto priest',
        productionTime: 30,
        cost: new UnitCost(0, 150, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 3300
    },
    {
        id: 'MOUNTED_SAMURAI',
        icon: mountedSamuraiIcon,
        name: 'mounted samurai',
        productionTime: 35,
        cost: new UnitCost(140, 110, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 3800
    },
    {
        id: 'SAMURAI',
        icon: samuraiIcon,
        name: 'samurai',
        productionTime: 20,
        cost: new UnitCost(100, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 4600
    },
    {
        id: 'ONNA_MUSHA',
        icon: onnaMushaIcon,
        name: 'onna-musha',
        productionTime: 24,
        cost: new UnitCost(80, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 5900
    },
    {
        id: 'OZUTSU',
        icon: ozutsuIcon,
        name: 'ozutsu',
        productionTime: 35,
        cost: new UnitCost(85, 155, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 7700
    },
    {
        id: 'ATAKEBUNE',
        icon: atakebuneIcon,
        name: 'atakebune',
        productionTime: 45,
        cost: new UnitCost(100, 220, 220, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 13800
    },
];

export default JAPANESE_UNITS;
