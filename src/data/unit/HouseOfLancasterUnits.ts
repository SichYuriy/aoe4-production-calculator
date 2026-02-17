import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import yeomanIcon from "../../icons/yeoman-1.png";
import hobelarIcon from "../../icons/hobelar-2.png";
import earlsGuardIcon from "../../icons/earls-guard-1.png";
import earlsRetinueIcon from "../../icons/earls-retinue-1.png";
import garrisonCommandIcon from "../../icons/garrison-command-1.png";
import gunpowderContingentIcon from "../../icons/gunpowder-contingent-1.png";

const HOUSE_OF_LANCASTER_UNITS: Unit[] = [
    {
        id: 'YEOMAN',
        icon: yeomanIcon,
        name: 'YEOMAN',
        productionTime: 15,
        cost: new UnitCost(50, 0, 45, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 700
    },
    {
        id: 'HOBELAR',
        icon: hobelarIcon,
        name: 'hobelar',
        productionTime: 15,
        cost: new UnitCost(75, 20, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 1900
    },
    {
        id: 'EARLS_GUARD',
        icon: earlsGuardIcon,
        name: 'earls guard',
        productionTime: 23,
        cost: new UnitCost(100, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 4500
    },
    {
        id: 'EARLS_RETINUE',
        icon: earlsRetinueIcon,
        name: 'earls retinue',
        productionTime: 50,
        cost: new UnitCost(650, 200, 0, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 12200
    },
    {
        id: 'GARRISON_COMMAND',
        icon: garrisonCommandIcon,
        name: 'garrison command',
        productionTime: 30,
        cost: new UnitCost(300, 0, 200, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 12300
    },
    {
        id: 'GUNPOWDER_CONTINGENT',
        icon: gunpowderContingentIcon,
        name: 'gunpowder contingent',
        productionTime: 65,
        cost: new UnitCost(0, 1050, 850, 0),
        types: [UnitType.SIEGE],
        building: null,
        civilizations: [CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 12400
    },
];

export default HOUSE_OF_LANCASTER_UNITS;
