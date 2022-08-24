import Unit, {UnitCost, UnitType} from "../../model/Unit";
import spearmanIcon from '../../icons/spearman.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'
import villagerIcon from '../../icons/villager.png'
import horseArcherIcon from '../../icons/horse-archer.png'
import scoutIcon from '../../icons/scout.png'
import fishingBoatIcon from '../../icons/fishing-boat.png'
import tradeShipIcon from '../../icons/trade-ship.png'
import dhowIcon from '../../icons/dhow.png'
import baghlahIcon from '../../icons/baghlah.png'
import traderIcon from '../../icons/trader.png'
import archerIcon from '../../icons/archer.png'
import camelArcherIcon from '../../icons/camel-archer.png'
import crossbowmanIcon from '../../icons/crossbowman.png'
import handcannoneerIcon from '../../icons/handcannoneer.png'
import horsemanIcon from '../../icons/horseman.png'
import lancerIcon from '../../icons/lancer.png'
import camelRiderIcon from '../../icons/camel-rider.png'
import imperialOfficialIcon from '../../icons/imperial-official.png'
import zhugeNuIcon from '../../icons/zhuge-nu.png'
import fireLancerIcon from '../../icons/fire-lancer.png'
import grenadierIcon from '../../icons/grenadier.png'

const UNITS: Map<string, Unit> = new Map<string, Unit>(Object.entries({
    VILLAGER: {
        id: 'VILLAGER',
        icon: villagerIcon,
        name: 'villager',
        productionTime: 20,
        cost: new UnitCost(50, 0, 0, 0),
        types: [],
    },
    ARCHER: {
        id: 'ARCHER',
        icon: archerIcon,
        name: 'archer',
        productionTime: 15,
        cost: new UnitCost(30, 0, 50, 0),
        types: [UnitType.INFANTRY],
    },
    SPEARMAN: {
        id: 'SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: 15,
        cost: new UnitCost(60, 0, 20, 0),
        types: [UnitType.INFANTRY],
    },
    HORSEMAN: {
        id: 'HORSEMAN',
        icon: horsemanIcon,
        name: 'horseman',
        productionTime: 22,
        cost: new UnitCost(100, 0, 20, 0),
        types: [UnitType.CAVALRY],
    },
    LANCER: {
        id: 'LANCER',
        icon: lancerIcon,
        name: 'lancer',
        productionTime: 35,
        cost: new UnitCost(140, 100, 0, 0),
        types: [UnitType.CAVALRY],
    },
    MAN_AT_ARMS: {
        id: 'MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: 22,
        cost: new UnitCost(100, 20, 0, 0),
        types: [UnitType.INFANTRY],
    },
    CROSSBOWMAN: {
        id: 'CROSSBOWMAN',
        icon: crossbowmanIcon,
        name: 'crossbowman',
        productionTime: 22,
        cost: new UnitCost(80, 40, 0, 0),
        types: [UnitType.INFANTRY],
    },
    HANDCANNONEER: {
        id: 'HANDCANNONEER',
        icon: handcannoneerIcon,
        name: 'handcannoneer',
        productionTime: 35,
        cost: new UnitCost(120, 120, 0, 0),
        types: [UnitType.INFANTRY],
    },
    HORSE_ARCHER: {
        id: 'HORSE_ARCHER',
        icon: horseArcherIcon,
        name: 'horse archer',
        productionTime: 22,
        cost: new UnitCost(80, 0, 40, 0),
        types: [UnitType.CAVALRY],
    },
    TRADER: {
        id: 'TRADER',
        icon: traderIcon,
        name: 'trader',
        productionTime: 35,
        cost: new UnitCost(0, 75, 75, 0),
        types: [],
    },
    CAMEL_ARCHER: {
        id: 'CAMEL_ARCHER',
        icon: camelArcherIcon,
        name: 'camel archer',
        productionTime: 35,
        cost: new UnitCost(180, 0, 60, 0),
        types: [UnitType.CAVALRY],
    },
    CAMEL_RIDER: {
        id: 'CAMEL_RIDER',
        icon: camelRiderIcon,
        name: 'camel rider',
        productionTime: 22,
        cost: new UnitCost(180, 60, 0, 0),
        types: [UnitType.CAVALRY],
    },
    ZHUGE_NU: {
        id: 'ZHUGE_NU',
        icon: zhugeNuIcon,
        name: 'zhuge nu',
        productionTime: 22,
        cost: new UnitCost(60, 30, 30, 0),
        types: [UnitType.INFANTRY],
    },
    GRENADIER: {
        id: 'GRENADIER',
        icon: grenadierIcon,
        name: 'grenadier',
        productionTime: 30,
        cost: new UnitCost(120, 60, 60, 0),
        types: [UnitType.INFANTRY],
    },
    FIRE_LANCER: {
        id: 'FIRE_LANCER',
        icon: fireLancerIcon,
        name: 'fire lancer',
        productionTime: 22,
        cost: new UnitCost(80, 20, 20, 0),
        types: [UnitType.CAVALRY],
    },
    SCOUT: {
        id: 'SCOUT',
        icon: scoutIcon,
        name: 'scout',
        productionTime: 25,
        cost: new UnitCost(60, 0, 0, 0),
        types: [UnitType.CAVALRY],
    },
    FISHING_BOAT: {
        id: 'FISHING_BOAT',
        icon: fishingBoatIcon,
        name: 'fishing boat',
        productionTime: 25,
        cost: new UnitCost(0, 0, 60, 0),
        types: [],
    },
    TRADE_SHIP: {
        id: 'TRADE_SHIP',
        icon: tradeShipIcon,
        name: 'trade ship',
        productionTime: 60,
        cost: new UnitCost(0, 100, 300, 0),
        types: [UnitType.TRANSPORT],
    },
    DHOW: {
        id: 'DHOW',
        icon: dhowIcon,
        name: 'dhow',
        productionTime: 40,
        cost: new UnitCost(0, 90, 180, 0),
        types: [],
    },
    BAGHLAH: {
        id: 'BAGHLAH',
        icon: baghlahIcon,
        name: 'baghlah',
        productionTime: 45,
        cost: new UnitCost(0, 180, 240, 0),
        types: [],
    },
    IMPERIAL_OFFICIAL: {
        id: 'IMPERIAL_OFFICIAL',
        icon: imperialOfficialIcon,
        name: 'imperial official',
        productionTime: 20,
        cost: new UnitCost(150, 0, 0, 0),
        types: [],
    }
}));

export default UNITS;
