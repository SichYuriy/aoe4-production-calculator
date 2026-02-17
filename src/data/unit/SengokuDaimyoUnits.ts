import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import naginataSamuraiIcon from "../../icons/naginata-samurai-1.png";
import kanaboSamuraiIcon from "../../icons/kanabo-samurai-2.png";
import tanegashimaAshigaruIcon from "../../icons/tanegashima-ashigaru-3.png";
import yariCavalryIcon from "../../icons/yari-cavalry-2.png";
import CivilizationsEnum from "../CivilizationsEnum";
import mountedSamuraiIcon from "../../icons/mounted-samurai.png";

const SENGOKU_DAIMYO_UNITS: Unit[] = [
    {
        id: 'NAGINATA_SAMURAI',
        icon: naginataSamuraiIcon,
        name: 'naginata samurai',
        productionTime: 23,
        cost: new UnitCost(100, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.SENGOKU_DAIMYO],
        common: false,
        displayOrder: 4600
    },
    {
        id: 'KANABO_SAMURAI',
        icon: kanaboSamuraiIcon,
        name: 'kanabo samurai',
        productionTime: 24,
        cost: new UnitCost(130, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.SENGOKU_DAIMYO],
        common: false,
        displayOrder: 4550
    },
    {
        id: 'TANEGASHIMA_ASHIGARU',
        icon: tanegashimaAshigaruIcon,
        name: 'tanegashima ashigaru',
        productionTime: 24,
        cost: new UnitCost(70, 70, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.SENGOKU_DAIMYO],
        common: false,
        displayOrder: 5700
    },
    {
        id: 'YARI_CAVALRY',
        icon: yariCavalryIcon,
        name: 'yari cavalry',
        productionTime: 23,
        cost: new UnitCost(115, 0, 30, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.SENGOKU_DAIMYO],
        common: false,
        displayOrder: 1800
    },
    {
        id: 'SENGOKU_MOUNTED_SAMURAI',
        icon: mountedSamuraiIcon,
        name: 'mounted samurai',
        productionTime: 35,
        cost: new UnitCost(140, 100, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.SENGOKU_DAIMYO],
        common: false,
        displayOrder: 3800
    },
];

export default SENGOKU_DAIMYO_UNITS;