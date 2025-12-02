import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import villagerIcon from "../../icons/villager.png";
import kharashIcon from "../../icons/kharash-2.png";
import torguudIcon from "../../icons/torguud-2.png";
import kipchakIcon from "../../icons/kipchak-archer-3.png";
import CivilizationsEnum from "../CivilizationsEnum";
import traderIcon from "../../icons/trader.png";
import spearmanIcon from "../../icons/spearman.png";
import {CROSSBOWMAN_UNIT_COST, HORSEMAN_UNIT_COST, MAN_AT_ARMS_UNIT_COST} from "./CommonUnitsConstants";
import manAtArmsIcon from "../../icons/man-at-arms.png";
import archerIcon from "../../icons/archer.png";
import crossbowmanIcon from "../../icons/crossbowman.png";
import handcannoneerIcon from "../../icons/handcannoneer.png";
import scoutIcon from "../../icons/scout.png";
import horsemanIcon from "../../icons/horseman.png";
import keshikIcon from "../../icons/keshik-2.png";
import tradeShipIcon from "../../icons/trade-ship.png";
import hulkIcon from "../../icons/hulk.png";
import ResourcesAmount from "../../model/ResourcesAmount";

const GOLDEN_HORDE_UNITS: Unit[] = [
    {
        id: 'GOLDEN_HORDE_VILLAGER',
        icon: villagerIcon,
        name: 'villager',
        productionTime: 37,
        cost: ResourcesAmount.ofObj(new UnitCost(50, 0, 0, 0)).multiplyByNumber(2),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 300
    },
    {
        id: 'GOLDEN_HORDE_TRADER',
        icon: traderIcon,
        name: 'trader',
        productionTime: 60,
        cost:  ResourcesAmount.ofObj(new UnitCost(0, 60, 60, 0)).multiplyByNumber(2),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 8400
    },
    {
        id: 'GOLDEN_HORDE_SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: 30,
        cost:  ResourcesAmount.ofObj(new UnitCost(60, 0, 20, 0)).multiplyByNumber(2),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 1100
    },
    {
        id: 'GOLDEN_HORDE_MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: 45,
        cost:  ResourcesAmount.ofObj(MAN_AT_ARMS_UNIT_COST).multiplyByNumber(2),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 4400
    },
    {
        id: 'KHARASH',
        icon: kharashIcon,
        name: 'kharash',
        productionTime: 20,
        cost:  ResourcesAmount.ofObj(new UnitCost(50, 0, 0, 0)).multiplyByNumber(2),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 4350
    },
    {
        id: 'GOLDEN_HORDE_ARCHER',
        icon: archerIcon,
        name: 'archer',
        productionTime: 30,
        cost:  ResourcesAmount.ofObj(new UnitCost(30, 0, 50, 0)).multiplyByNumber(2),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 600
    },
    {
        id: 'GOLDEN_HORDE_CROSSBOWMAN',
        icon: crossbowmanIcon,
        name: 'crossbowman',
        productionTime: 45,
        cost:  ResourcesAmount.ofObj(CROSSBOWMAN_UNIT_COST).multiplyByNumber(2),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 5700
    },
    {
        id: 'GOLDEN_HORDE_HANDCANNONEER',
        icon: handcannoneerIcon,
        name: 'handcannoneer',
        productionTime: 70,
        cost:  ResourcesAmount.ofObj(new UnitCost(120, 120, 0, 0)).multiplyByNumber(2),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 7500
    },
    {
        id: 'GOLDEN_HORDE_SCOUT',
        icon: scoutIcon,
        name: 'scout',
        productionTime: 43,
        cost:  ResourcesAmount.ofObj(new UnitCost(65, 0, 0, 0)).multiplyByNumber(2),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 9700
    },
    {
        id: 'GOLDEN_HORDE_HORSEMAN',
        icon: horsemanIcon,
        name: 'horseman',
        productionTime: 45,
        cost:  ResourcesAmount.ofObj(HORSEMAN_UNIT_COST).multiplyByNumber(2),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 1800
    },
    {
        id: 'GOLDEN_HORDE_KESHIK',
        icon: keshikIcon,
        name: 'keshik',
        productionTime: 60,
        cost:  ResourcesAmount.ofObj(new UnitCost(120, 80, 0, 0)).multiplyByNumber(2),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 2700
    },
    {
        id: 'TORGUUD',
        icon: torguudIcon,
        name: 'torguud',
        productionTime: 20,
        cost: new UnitCost(75, 0, 0, 100),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 2750
    },
    {
        id: 'KIPCHAK_ARCHER',
        icon: kipchakIcon,
        name: 'kipchak archer',
        productionTime: 48,
        cost:  ResourcesAmount.ofObj(new UnitCost(80, 0, 70, 0)).multiplyByNumber(2),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 8300
    },
    {
        id: 'GOLDEN_HORDE_TRADE_SHIP',
        icon: tradeShipIcon,
        name: 'trade ship',
        productionTime: 30,
        cost:  ResourcesAmount.ofObj(new UnitCost(0, 90, 90, 0)).multiplyByNumber(2),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 12500
    },
    {
        id: 'GOLDEN_HORDE_WAR_JUNK',
        icon: hulkIcon,
        name: 'war junk',
        productionTime: 60,
        cost:  ResourcesAmount.ofObj(new UnitCost(110, 30, 200, 0)).multiplyByNumber(2),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.GOLDEN_HORDE],
        common: false,
        displayOrder: 13300
    }

];

export default GOLDEN_HORDE_UNITS;