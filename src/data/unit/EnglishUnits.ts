import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import longbowmanIcon from "../../icons/longbowman.png";
import wynguardRaidersIcon from "../../icons/wynguard-raiders.png";
import wynguardRangersIcon from "../../icons/wynguard-rangers.png";
import wynguardFootmanIcon from "../../icons/wynguard_footman.png";
import knightIcon from "../../icons/knight.png";
import manAtArmsIcon from "../../icons/man-at-arms.png";
import crossbowmanIcon from "../../icons/crossbowman.png";
import spearmanIcon from "../../icons/spearman.png";
import horsemanIcon from "../../icons/horseman.png";
import {
    CROSSBOWMAN_PRODUCTION_TIME, CROSSBOWMAN_UNIT_COST, HORSEMAN_PRODUCTION_TIME, HORSEMAN_UNIT_COST,
    KNIGHT_PRODUCTION_TIME,
    KNIGHT_UNIT_COST,
    MAN_AT_ARMS_PRODUCTION_TIME,
    MAN_AT_ARMS_UNIT_COST, SPEARMAN_PRODUCTION_TIME, SPEARMAN_UNIT_COST
} from "./CommonUnitsConstants";

const LONGBOWMAN_UNIT_COST = new UnitCost(40, 0, 50, 0);
const LONGBOWMAN_PRODUCTION_TIME = 15;

const ENGLISH_UNITS: Unit[] = [
    {
        id: 'LONGBOWMAN',
        icon: longbowmanIcon,
        name: 'longbowman',
        productionTime: LONGBOWMAN_PRODUCTION_TIME,
        cost: LONGBOWMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        displayOrder: 1000
    },
    {
        id: 'WYNGUARD_RAIDERS',
        icon: wynguardRaidersIcon,
        name: 'wynguard raiders',
        productionTime: 25,
        cost: new UnitCost(650, 200, 0, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 11900
    },
    {
        id: 'WYNGUARD_RANGERS',
        icon: wynguardRangersIcon,
        name: 'wynguard rangers',
        productionTime: 45,
        cost: new UnitCost(0, 300, 450, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 12000
    },
    {
        id: 'WYNGUARD_FOOTMAN',
        icon: wynguardFootmanIcon,
        name: 'wynguard footmen',
        productionTime: 45,
        cost: new UnitCost(300, 400, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 12100
    },
    {
        id: 'WHITE_TOWER_KNIGHT',
        icon: knightIcon,
        name: 'knight',
        productionTime: KNIGHT_PRODUCTION_TIME,
        cost: KNIGHT_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 14300
    },
    {
        id: 'WHITE_TOWER_MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: MAN_AT_ARMS_PRODUCTION_TIME,
        cost: MAN_AT_ARMS_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 14400
    },
    {
        id: 'WHITE_TOWER_CROSSBOWMAN',
        icon: crossbowmanIcon,
        name: 'crossbowman',
        productionTime: CROSSBOWMAN_PRODUCTION_TIME,
        cost: CROSSBOWMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 14500
    },
    {
        id: 'WHITE_TOWER_LONGBOWMAN',
        icon: longbowmanIcon,
        name: 'longbowman',
        productionTime: LONGBOWMAN_PRODUCTION_TIME,
        cost: LONGBOWMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 14600
    },
    {
        id: 'WHITE_TOWER_SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: SPEARMAN_PRODUCTION_TIME,
        cost: SPEARMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 14700
    },
    {
        id: 'WHITE_TOWER_HORSEMAN',
        icon: horsemanIcon,
        name: 'horseman',
        productionTime: HORSEMAN_PRODUCTION_TIME,
        cost: HORSEMAN_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 14800
    },
];

export default ENGLISH_UNITS;
