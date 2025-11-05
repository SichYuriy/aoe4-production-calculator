import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import warriorMonkIcon from "../../icons/warrior_monk.png";
import streltsyIcon from "../../icons/streltsy.png";
import horseArcherIcon from "../../icons/horse-archer.png";
import fishingBoatIcon from "../../icons/fishing-boat.png";

const RUS_UNITS: Unit[] = [
    {
        id: 'WARRIOR_MONK',
        icon: warriorMonkIcon,
        name: 'warrior monk',
        productionTime: 35,
        cost: new UnitCost(40, 200, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.RUS],
        common: false,
        displayOrder: 3000
    },
    {
        id: 'STRELTSY',
        icon: streltsyIcon,
        name: 'streltsy',
        productionTime: 35,
        cost: new UnitCost(90, 90, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.RUS],
        common: false,
        displayOrder: 7800
    },
    {
        id: 'HORSE_ARCHER',
        icon: horseArcherIcon,
        name: 'horse archer',
        productionTime: 22,
        cost: new UnitCost(80, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.RUS],
        common: false,
        displayOrder: 8100
    },
    {
        id: 'RUS_FISHING_BOAT',
        icon: fishingBoatIcon,
        name: 'fishing boat',
        productionTime: 46,
        cost: new UnitCost(0, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.RUS],
        common: false,
        displayOrder: 10000
    },
];

export default RUS_UNITS;
