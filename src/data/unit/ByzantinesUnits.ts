import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import limitaneiIcon from "../../icons/limitanei.png";
import cataphractIcon from "../../icons/cataphract.png";
import varangianGuardIcon from "../../icons/varangian-guard.png";
import cheirosiphonIcon from "../../icons/cheirosiphon.png";
import dromonIcon from "../../icons/dromon.png";

const BYZANTINES_UNITS: Unit[] = [
    {
        id: 'LIMITANEI',
        icon: limitaneiIcon,
        name: 'limitanei',
        productionTime: 17,
        cost: new UnitCost(80, 0, 10, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.BYZANTINES],
        common: false,
        displayOrder: 1400
    },
    {
        id: 'CATAPHRACT',
        icon: cataphractIcon,
        name: 'cataphract',
        productionTime: 40,
        cost: new UnitCost(180, 150, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.BYZANTINES],
        common: false,
        displayOrder: 3700
    },
    {
        id: 'VARANGIAN_GUARD',
        icon: varangianGuardIcon,
        name: 'varangian guard',
        productionTime: 25,
        cost: new UnitCost(90, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.BYZANTINES, CivilizationsEnum.MACEDONIAN_DYNASTY],
        common: false,
        displayOrder: 4700
    },
    {
        id: 'CHEIROSIPHON',
        icon: cheirosiphonIcon,
        name: 'cheirosiphon',
        productionTime: 35,
        cost: new UnitCost(0, 60, 200, 0),
        types: [UnitType.SIEGE],
        building: null,
        civilizations: [CivilizationsEnum.BYZANTINES, CivilizationsEnum.MACEDONIAN_DYNASTY],
        common: false,
        displayOrder: 10200
    },
    {
        id: 'DROMON',
        icon: dromonIcon,
        name: 'dromon',
        productionTime: 30,
        cost: new UnitCost(100, 60, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.BYZANTINES, CivilizationsEnum.MACEDONIAN_DYNASTY],
        common: false,
        displayOrder: 13000
    },
];

export default BYZANTINES_UNITS;
