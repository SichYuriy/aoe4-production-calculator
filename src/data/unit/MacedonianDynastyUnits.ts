import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import atgeirmadrIcon from "../../icons/atgeirmadr-1.png";
import bogmadrIcon from "../../icons/bogmadr-2.png";
import CivilizationsEnum from "../CivilizationsEnum";
import riddariIcon from "../../icons/riddari-3.png";

const MACEDONIAN_DYNASTY_UNITS: Unit[] = [
    {
        id: 'ATGEIRMADR',
        icon: atgeirmadrIcon,
        name: 'atgeirmadr',
        productionTime: 17,
        cost: new UnitCost(70, 0, 20, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MACEDONIAN_DYNASTY],
        common: false,
        displayOrder: 1100
    },
    {
        id: 'BOGMADR',
        icon: bogmadrIcon,
        name: 'bogmadr',
        productionTime: 15,
        cost: new UnitCost(40, 0, 50, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MACEDONIAN_DYNASTY],
        common: false,
        displayOrder: 600
    },
    {
        id: 'RIDDARI',
        icon: riddariIcon,
        name: 'riddari',
        productionTime: 35,
        cost: new UnitCost(130, 110, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MACEDONIAN_DYNASTY],
        common: false,
        displayOrder: 2500
    }
];

export default MACEDONIAN_DYNASTY_UNITS;