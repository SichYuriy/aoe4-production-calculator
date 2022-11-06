import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import spearmanIcon from '../../icons/spearman.png'
import donsoIcon from '../../icons/donso.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'
import palaceGuardIcon from '../../icons/palace-guard.png'
import musofadiWarriorIcon from '../../icons/musofadi-warrior.png'
import sofaIcon from '../../icons/sofa.png'
import javelinThrowerIcon from '../../icons/javelin_thrower.png'
import musofadiGunnerIcon from '../../icons/musofadi-gunner.png'
import warriorScoutIcon from '../../icons/warrior_scout.png'
import sipahiIcon from '../../icons/sipahi.png'
import mehterIcon from '../../icons/mehter.png'
import janissaryIcon from '../../icons/janissary.png'
import greatBombardIcon from '../../icons/great_bombard.png'
import landsknechtIcon from '../../icons/landsknecht.png'
import villagerIcon from '../../icons/villager.png'
import horseArcherIcon from '../../icons/horse-archer.png'
import mangudaiIcon from '../../icons/mangudai.png'
import springaldIcon from '../../icons/springald.png'
import mangonelIcon from '../../icons/mangonel.png'
import counterweightTrebuchetIcon from '../../icons/counterweight-trebuchet.png'
import tractionTrebuchetIcon from '../../icons/traction-trebuchet.png'
import nestOfBeesIcon from '../../icons/nest-of-bees.png'
import bombardIcon from '../../icons/bombard.png'
import scoutIcon from '../../icons/scout.png'
import fishingBoatIcon from '../../icons/fishing-boat.png'
import traderIcon from '../../icons/trader.png'
import archerIcon from '../../icons/archer.png'
import longbowmanIcon from '../../icons/longbowman.png'
import camelArcherIcon from '../../icons/camel-archer.png'
import crossbowmanIcon from '../../icons/crossbowman.png'
import arbaletrierIcon from '../../icons/arbaletrier.png'
import handcannoneerIcon from '../../icons/handcannoneer.png'
import streltsyIcon from '../../icons/streltsy.png'
import horsemanIcon from '../../icons/horseman.png'
import lancerIcon from '../../icons/lancer.png'
import knightIcon from '../../icons/knight.png'
import royalKnightIcon from '../../icons/royal-knight.png'
import camelRiderIcon from '../../icons/camel-rider.png'
import imperialOfficialIcon from '../../icons/imperial-official.png'
import zhugeNuIcon from '../../icons/zhuge-nu.png'
import fireLancerIcon from '../../icons/fire-lancer.png'
import grenadierIcon from '../../icons/grenadier.png'
import towerWarElephantIcon from '../../icons/tower-war-elephant.png'
import warElephantIcon from '../../icons/war-elephant.png'
import CivilizationsEnum from "../CivilizationsEnum";

const ALL_CIVILIZATIONS: CivilizationsEnum[] = [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS];

const UNITS: Map<string, Unit> = new Map<string, Unit>(Object.entries({
    VILLAGER: {
        id: 'VILLAGER',
        icon: villagerIcon,
        name: 'villager',
        productionTime: 20,
        cost: new UnitCost(50, 0, 0, 0),
        types: [],
        building: null,
        civilizations: ALL_CIVILIZATIONS,
        common: true
    },
    ARCHER: {
        id: 'ARCHER',
        icon: archerIcon,
        name: 'archer',
        productionTime: 15,
        cost: new UnitCost(30, 0, 50, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS],
        common: true
    },
    LONGBOWMAN: {
        id: 'LONGBOWMAN',
        icon: longbowmanIcon,
        name: 'longbowman',
        productionTime: 15,
        cost: new UnitCost(40, 0, 50, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false
    },
    SPEARMAN: {
        id: 'SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: 15,
        cost: new UnitCost(60, 0, 20, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    DONSO: {
        id: 'DONSO',
        icon: donsoIcon,
        name: 'donso',
        productionTime: 15,
        cost: new UnitCost(60, 0, 30, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    HORSEMAN: {
        id: 'HORSEMAN',
        icon: horsemanIcon,
        name: 'horseman',
        productionTime: 22,
        cost: new UnitCost(100, 0, 20, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS],
        common: true
    },
    SIPAHI: {
        id: 'SIPAHI',
        icon: sipahiIcon,
        name: 'sipahi',
        productionTime: 24,
        cost: new UnitCost(110, 0, 20, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false
    },
    LANCER: {
        id: 'LANCER',
        icon: lancerIcon,
        name: 'lancer',
        productionTime: 35,
        cost: new UnitCost(140, 100, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.DELHI, CivilizationsEnum.MONGOLS],
        common: true
    },
    KNIGHT: {
        id: 'KNIGHT',
        icon: knightIcon,
        name: 'knight',
        productionTime: 35,
        cost: new UnitCost(140, 100, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    ROYAL_KNIGHT: {
        id: 'ROYAL_KNIGHT',
        icon: royalKnightIcon,
        name: 'royal knight',
        productionTime: 35,
        cost: new UnitCost(140, 100, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.FRENCH],
        common: false
    },
    SOFA: {
        id: 'SOFA',
        icon: sofaIcon,
        name: 'sofa',
        productionTime: 30,
        cost: new UnitCost(120, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    MAN_AT_ARMS: {
        id: 'MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: 22,
        cost: new UnitCost(100, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    PALACE_GUARD: {
        id: 'PALACE_GUARD',
        icon: palaceGuardIcon,
        name: 'palace guard',
        productionTime: 22,
        cost: new UnitCost(100, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    },
    MUSOFADI_WARRIOR: {
        id: 'MUSOFADI_WARRIOR',
        icon: musofadiWarriorIcon,
        name: 'musofadi warrior',
        productionTime: 15,
        cost: new UnitCost(50, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    MEHTER: {
        id: 'MEHTER',
        icon: mehterIcon,
        name: 'mehter',
        productionTime: 28,
        cost: new UnitCost(100, 80, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false
    },
    LANDSKNECHT: {
        id: 'LANDSKNECHT',
        icon: landsknechtIcon,
        name: 'landsknecht',
        productionTime: 22,
        cost: new UnitCost(60, 100, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.HRE],
        common: false
    },
    CROSSBOWMAN: {
        id: 'CROSSBOWMAN',
        icon: crossbowmanIcon,
        name: 'crossbowman',
        productionTime: 22,
        cost: new UnitCost(80, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    ARBALETRIER: {
        id: 'ARBALETRIER',
        icon: arbaletrierIcon,
        name: 'arbaletrier',
        productionTime: 22,
        cost: new UnitCost(80, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.FRENCH],
        common: false
    },
    JAVELIN_THROWER: {
        id: 'JAVELIN_THROWER',
        icon: javelinThrowerIcon,
        name: 'javelin thrower',
        productionTime: 22,
        cost: new UnitCost(80, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    HANDCANNONEER: {
        id: 'HANDCANNONEER',
        icon: handcannoneerIcon,
        name: 'handcannoneer',
        productionTime: 35,
        cost: new UnitCost(120, 120, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS],
        common: true
    },
    STRELTSY: {
        id: 'STRELTSY',
        icon: streltsyIcon,
        name: 'streltsy',
        productionTime: 35,
        cost: new UnitCost(90, 90, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.RUS],
        common: false
    },
    JANISSARY: {
        id: 'JANISSARY',
        icon: janissaryIcon,
        name: 'janissary',
        productionTime: 24,
        cost: new UnitCost(60, 100, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false
    },
    MUSOFADI_GUNNER: {
        id: 'MUSOFADI_GUNNER',
        icon: musofadiGunnerIcon,
        name: 'musofadi gunner',
        productionTime: 35,
        cost: new UnitCost(110, 130, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    HORSE_ARCHER: {
        id: 'HORSE_ARCHER',
        icon: horseArcherIcon,
        name: 'horse archer',
        productionTime: 22,
        cost: new UnitCost(80, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.RUS],
        common: false
    },
    MANGUDAI: {
        id: 'MANGUDAI',
        icon: mangudaiIcon,
        name: 'mangudai',
        productionTime: 30,
        cost: new UnitCost(120, 40, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false
    },
    TRADER: {
        id: 'TRADER',
        icon: traderIcon,
        name: 'trader',
        productionTime: 35,
        cost: new UnitCost(0, 75, 75, 0),
        types: [],
        building: null,
        civilizations: ALL_CIVILIZATIONS,
        common: true
    },
    CAMEL_ARCHER: {
        id: 'CAMEL_ARCHER',
        icon: camelArcherIcon,
        name: 'camel archer',
        productionTime: 35,
        cost: new UnitCost(180, 0, 60, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID],
        common: false
    },
    CAMEL_RIDER: {
        id: 'CAMEL_RIDER',
        icon: camelRiderIcon,
        name: 'camel rider',
        productionTime: 22,
        cost: new UnitCost(180, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID],
        common: false
    },
    ZHUGE_NU: {
        id: 'ZHUGE_NU',
        icon: zhugeNuIcon,
        name: 'zhuge nu',
        productionTime: 15,
        cost: new UnitCost(20, 30, 30, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    },
    GRENADIER: {
        id: 'GRENADIER',
        icon: grenadierIcon,
        name: 'grenadier',
        productionTime: 30,
        cost: new UnitCost(120, 60, 60, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    },
    FIRE_LANCER: {
        id: 'FIRE_LANCER',
        icon: fireLancerIcon,
        name: 'fire lancer',
        productionTime: 22,
        cost: new UnitCost(120, 20, 20, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    },
    TOWER_WAR_ELEPHANT: {
        id: 'TOWER_WAR_ELEPHANT',
        icon: towerWarElephantIcon,
        name: 'tower war elephant',
        productionTime: 60,
        cost: new UnitCost(400, 600, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DELHI],
        common: false
    },
    WAR_ELEPHANT: {
        id: 'WAR_ELEPHANT',
        icon: warElephantIcon,
        name: 'war elephant',
        productionTime: 60,
        cost: new UnitCost(600, 400, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DELHI],
        common: false
    },
    SCOUT: {
        id: 'SCOUT',
        icon: scoutIcon,
        name: 'scout',
        productionTime: 25,
        cost: new UnitCost(70, 0, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    WARRIOR_SCOUT: {
        id: 'WARRIOR_SCOUT',
        icon: warriorScoutIcon,
        name: 'warrior scout',
        productionTime: 15,
        cost: new UnitCost(90, 0, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    FISHING_BOAT: {
        id: 'FISHING_BOAT',
        icon: fishingBoatIcon,
        name: 'fishing boat',
        productionTime: 25,
        cost: new UnitCost(0, 0, 75, 0),
        types: [],
        building: Building.DOCK,
        civilizations: ALL_CIVILIZATIONS,
        common: true
    },
    SPRINGALD: {
        id: 'SPRINGALD',
        icon: springaldIcon,
        name: 'springald',
        productionTime: 30,
        cost: new UnitCost(0, 250, 250, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: ALL_CIVILIZATIONS,
        common: true
    },
    MANGONEL: {
        id: 'MANGONEL',
        icon: mangonelIcon,
        name: 'mangonel',
        productionTime: 40,
        cost: new UnitCost(0, 200, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS],
        common: true
    },
    NEST_OF_BEES: {
        id: 'NEST_OF_BEES',
        icon: nestOfBeesIcon,
        name: 'nest of bees',
        productionTime: 40,
        cost: new UnitCost(0, 300, 300, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    },
    COUNTERWEIGHT_TREBUCHET: {
        id: 'COUNTERWEIGHT_TREBUCHET',
        icon: counterweightTrebuchetIcon,
        name: 'counterweight trebuchet',
        productionTime: 40,
        cost: new UnitCost(0, 250, 500, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.CHINESE, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS],
        common: true
    },
    TRACTION_TREBUCHET: {
        id: 'TRACTION_TREBUCHET',
        icon: tractionTrebuchetIcon,
        name: 'traction trebuchet',
        productionTime: 35,
        cost: new UnitCost(0, 150, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false
    },
    BOMBARD: {
        id: 'BOMBARD',
        icon: bombardIcon,
        name: 'bombard',
        productionTime: 45,
        cost: new UnitCost(0, 600, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.MALIANS],
        common: true
    },
    GREAT_BOMBARD: {
        id: 'GREAT_BOMBARD',
        icon: greatBombardIcon,
        name: 'great bombard',
        productionTime: 60,
        cost: new UnitCost(0, 900, 600, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false
    },
    IMPERIAL_OFFICIAL: {
        id: 'IMPERIAL_OFFICIAL',
        icon: imperialOfficialIcon,
        name: 'imperial official',
        productionTime: 20,
        cost: new UnitCost(100, 50, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    }
}));

export default UNITS;
