import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import raiderElephant from "../../icons/raider-elephant-2.png";
import healerElephant from "../../icons/healer-elephant-2.png";
import ballistaElephant from "../../icons/ballista-elephant-3.png";
import CivilizationsEnum from "../CivilizationsEnum";

const TUGHLAQ_DYNASTY_UNITS: Unit[] = [
    {
        id: 'RAIDER_ELEPHANT',
        icon: raiderElephant,
        name: 'raider elephant',
        productionTime: 25,
        cost: new UnitCost(200, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.TUGHLAQ_DYNASTY],
        common: false,
        displayOrder: 1800
    },
    {
        id: 'HEALER_ELEPHANT',
        icon: healerElephant,
        name: 'healer elephant',
        productionTime: 40,
        cost: new UnitCost(150, 220, 0, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.TUGHLAQ_DYNASTY],
        common: false,
        displayOrder: 1850
    },
    {
        id: 'BALLISTA_ELEPHANT',
        icon: ballistaElephant,
        name: 'ballista elephant',
        productionTime: 45,
        cost: new UnitCost(300, 350, 0, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.TUGHLAQ_DYNASTY],
        common: false,
        displayOrder: 10300
    },
];

export default TUGHLAQ_DYNASTY_UNITS;