import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import spearmanIcon from '../../icons/spearman.png'
import donsoIcon from '../../icons/donso.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'
import ghulamIcon from '../../icons/ghulam-3.png'
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
import cattleIcon from '../../icons/cattle.png'
import horseArcherIcon from '../../icons/horse-archer.png'
import mangudaiIcon from '../../icons/mangudai.png'
import springaldIcon from '../../icons/springald.png'
import ramIcon from '../../icons/ram.png'
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
import ghaziRaiderIcon from '../../icons/ghazi-raider-2.png'
import lancerIcon from '../../icons/lancer.png'
import keshikIcon from '../../icons/keshik-2.png'
import knightIcon from '../../icons/knight.png'
import royalKnightIcon from '../../icons/royal-knight.png'
import camelRiderIcon from '../../icons/camel-rider.png'
import imperialOfficialIcon from '../../icons/imperial-official.png'
import zhugeNuIcon from '../../icons/zhuge-nu.png'
import fireLancerIcon from '../../icons/fire-lancer.png'
import grenadierIcon from '../../icons/grenadier.png'
import towerElephantIcon from '../../icons/tower-war-elephant.png'
import warElephantIcon from '../../icons/war-elephant.png'
import wynguardArmyIcon from '../../icons/wynguard-army.png'
import wynguardRaidersIcon from '../../icons/wynguard-raiders.png'
import wynguardRangersIcon from '../../icons/wynguard-rangers.png'
import monkIcon from '../../icons/monk.png'
import tradeShipIcon from '../../icons/trade-ship.png'
import dhowIcon from '../../icons/dhow.png'
import hulkIcon from '../../icons/hulk.png'
import warCogIcon from '../../icons/war-cog-2.png'
import demolitionShipIcon from '../../icons/demolition_ship.png'
import carrackIcon from '../../icons/carrack.png'
import grandGalleyIcon from '../../icons/grand_galley.png'
import galleyIcon from '../../icons/galley.png'
import galleasIcon from '../../icons/galleass.png'
import baghlahIcon from '../../icons/baghlah.png'
import wynguardFootmanIcon from '../../icons/wynguard_footman.png'

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
    CATTLE: {
        id: 'CATTLE',
        icon: cattleIcon,
        name: 'cattle',
        productionTime: 15,
        cost: new UnitCost(0, 90, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS],
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
    GHAZI_RAIDER: {
        id: 'GHAZI_RAIDER',
        icon: ghaziRaiderIcon,
        name: 'ghazi raider',
        productionTime: 25,
        cost: new UnitCost(110, 0, 30, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DELHI],
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.DELHI],
        common: true
    },
    KESHIK: {
        id: 'KESHIK',
        icon: keshikIcon,
        name: 'keshik',
        productionTime: 30,
        cost: new UnitCost(120, 80, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false
    },
    SCHOLAR: {
        id: 'SCHOLAR',
        icon: monkIcon,
        name: 'scholar',
        productionTime: 30,
        cost: new UnitCost(0, 130, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false
    },
    DOME_OF_FAIT_SCHOLAR: {
        id: 'DOME_OF_FAIT_SCHOLAR',
        icon: monkIcon,
        name: 'scholar',
        productionTime: 45,
        cost: new UnitCost(0, 65, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        civilizationSpecificFeature: true
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
        productionTime: 26,
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
        productionTime: 22.5,
        cost: new UnitCost(100, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    PALACE_GUARD: {
        id: 'PALACE_GUARD',
        icon: palaceGuardIcon,
        name: 'palace guard',
        productionTime: 22.5,
        cost: new UnitCost(100, 25, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE],
        common: false
    },
    GHULAM: {
        id: 'GHULAM',
        icon: ghulamIcon,
        name: 'ghulam',
        productionTime: 26,
        cost: new UnitCost(120, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID],
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
        productionTime: 25,
        cost: new UnitCost(0, 60, 60, 0),
        types: [],
        building: null,
        civilizations: ALL_CIVILIZATIONS,
        common: true
    },
    SILVER_TREE_TRADER: {
        id: 'SILVER_TREE_TRADER',
        icon: traderIcon,
        name: 'silver tree trader',
        productionTime: 16,
        cost: new UnitCost(0, 30, 60, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        civilizationSpecificFeature: true
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
        productionTime: 35,
        cost: new UnitCost(160, 30, 30, 0),
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
        cost: new UnitCost(30, 20, 30, 0),
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
    TOWER_ELEPHANT: {
        id: 'TOWER_ELEPHANT',
        icon: towerElephantIcon,
        name: 'tower elephant',
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
        cost: new UnitCost(400, 350, 0, 0),
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
        civilizations: ALL_CIVILIZATIONS.filter(civilization => CivilizationsEnum.RUS !== civilization),
        common: true
    },
    RUS_FISHING_BOAT: {
        id: 'RUS_FISHING_BOAT',
        icon: fishingBoatIcon,
        name: 'fishing boat',
        productionTime: 38,
        cost: new UnitCost(0, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.RUS],
        common: false
    },
    RAM: {
        id: 'RAM',
        icon: ramIcon,
        name: 'ram',
        productionTime: 30,
        cost: new UnitCost(0, 0, 250, 0),
        types: [],
        building: null,
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
        productionTime: 30,
        cost: new UnitCost(0, 150, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.CHINESE, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS],
        common: true
    },
    TRACTION_TREBUCHET: {
        id: 'TRACTION_TREBUCHET',
        icon: tractionTrebuchetIcon,
        name: 'traction trebuchet',
        productionTime: 30,
        cost: new UnitCost(0, 100, 300, 0),
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
        cost: new UnitCost(0, 600, 300, 0),
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
        cost: new UnitCost(0, 900, 450, 0),
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
    },
    FARIMBA_GARRISON_DONSO: {
        id: 'FARIMBA_GARRISON_DONSO',
        icon: donsoIcon,
        name: 'donso',
        productionTime: 24,
        cost: new UnitCost(0, 81, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        civilizationSpecificFeature: true
    },
    FARIMBA_GARRISON_MUSOFADI_WARRIOR: {
        id: 'FARIMBA_GARRISON_MUSOFADI_WARRIOR',
        icon: musofadiWarriorIcon,
        name: 'musofadi warrior',
        productionTime: 24,
        cost: new UnitCost(0, 72, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        civilizationSpecificFeature: true
    },
    FARIMBA_GARRISON_ARCHER: {
        id: 'FARIMBA_GARRISON_ARCHER',
        icon: archerIcon,
        name: 'archer',
        productionTime: 24,
        cost: new UnitCost(0, 72, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        civilizationSpecificFeature: true
    },
    FARIMBA_GARRISON_JAVELIN_THROWER: {
        id: 'FARIMBA_GARRISON_JAVELIN_THROWER',
        icon: javelinThrowerIcon,
        name: 'javelin thrower',
        productionTime: 37,
        cost: new UnitCost(0, 108, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        civilizationSpecificFeature: true
    },
    FARIMBA_GARRISON_MUSOFADI_GUNNER: {
        id: 'FARIMBA_GARRISON_MUSOFADI_GUNNER',
        icon: musofadiGunnerIcon,
        name: 'musofadi gunner',
        productionTime: 57,
        cost: new UnitCost(0, 216, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false,
        civilizationSpecificFeature: true
    },
    WYNGUARD_ARMY: {
        id: 'WYNGUARD_ARMY',
        icon: wynguardArmyIcon,
        name: 'wynguard army',
        productionTime: 75,
        cost: new UnitCost(100, 200, 100, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true
    },
    WYNGUARD_RAIDERS: {
        id: 'WYNGUARD_RAIDERS',
        icon: wynguardRaidersIcon,
        name: 'wynguard raiders',
        productionTime: 25,
        cost: new UnitCost(650, 200, 0, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true
    },
    WYNGUARD_RANGERS: {
        id: 'WYNGUARD_RANGERS',
        icon: wynguardRangersIcon,
        name: 'wynguard rangers',
        productionTime: 50,
        cost: new UnitCost(0, 250, 450, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true
    },
    WYNGUARD_FOOTMAN: {
        id: 'WYNGUARD_FOOTMAN',
        icon: wynguardFootmanIcon,
        name: 'wynguard footmen',
        productionTime: 50,
        cost: new UnitCost(200, 500, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND],
        common: false,
        civilizationSpecificFeature: true
    },
    TRADE_SHIP: {
        id: 'TRADE_SHIP',
        icon: tradeShipIcon,
        name: 'trade ship',
        productionTime: 30,
        cost: new UnitCost(0, 100, 100, 0),
        types: [],
        building: Building.DOCK,
        civilizations: ALL_CIVILIZATIONS,
        common: false
    },
    DHOW: {
        id: 'DHOW',
        icon: dhowIcon,
        name: 'dhow',
        productionTime: 25,
        cost: new UnitCost(90, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI],
        common: false
    },
    GALLEY: {
        id: 'GALLEY',
        icon: galleyIcon,
        name: 'galley',
        productionTime: 25,
        cost: new UnitCost(90, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.RUS],
        common: false
    },
    JUNK: {
        id: 'JUNK',
        icon: galleyIcon,
        name: 'junk',
        productionTime: 25,
        cost: new UnitCost(90, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS],
        common: false
    },
    HULK: {
        id: 'HULK',
        icon: hulkIcon,
        name: 'hulk',
        productionTime: 30,
        cost: new UnitCost(120, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.HRE, CivilizationsEnum.RUS],
        common: false
    },
    WAR_COG: {
        id: 'WAR_COG',
        icon: warCogIcon,
        name: 'war cog',
        productionTime: 30,
        cost: new UnitCost(85, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.FRENCH],
        common: false
    },
    BAGHLAH: {
        id: 'BAGHLAH',
        icon: baghlahIcon,
        name: 'baghlah',
        productionTime: 30,
        cost: new UnitCost(120, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI],
        common: false
    },
    WAR_JUNK: {
        id: 'WAR_JUNK',
        icon: hulkIcon,
        name: 'war junk',
        productionTime: 30,
        cost: new UnitCost(120, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS],
        common: false
    },
    DEMOLITION_SHIP: {
        id: 'DEMOLITION_SHIP',
        icon: demolitionShipIcon,
        name: 'demolition ship',
        productionTime: 15,
        cost: new UnitCost(0, 80, 80, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.RUS, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI],
        common: false
    },
    EXPLOSIVE_JUNK: {
        id: 'EXPLOSIVE_JUNK',
        icon: demolitionShipIcon,
        name: 'explosive junk',
        productionTime: 15,
        cost: new UnitCost(0, 80, 80, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS],
        common: false
    },
    CARRACK: {
        id: 'CARRACK',
        icon: carrackIcon,
        name: 'carrack',
        productionTime: 45,
        cost: new UnitCost(200, 200, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI],
        common: false
    },
    BAOCHUAN: {
        id: 'BAOCHUAN',
        icon: carrackIcon,
        name: 'baochuan',
        productionTime: 45,
        cost: new UnitCost(200, 200, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS],
        common: false
    },
    GRAND_GALLEY: {
        id: 'GRAND_GALLEY',
        icon: grandGalleyIcon,
        name: 'grand galley',
        productionTime: 50,
        cost: new UnitCost(150, 300, 360, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false
    },
    HUNTING_CANOE: {
        id: 'HUNTING_CANOE',
        icon: dhowIcon,
        name: 'hunting canoe',
        productionTime: 25,
        cost: new UnitCost(90, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    WAR_CANOE: {
        id: 'WAR_CANOE',
        icon: hulkIcon,
        name: 'war canoe',
        productionTime: 30,
        cost: new UnitCost(120, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.MALIANS],
        common: false
    },
    GALLEAS: {
        id: 'GALLEAS',
        icon: galleasIcon,
        name: 'galleas',
        productionTime: 50,
        cost: new UnitCost(200, 300, 360, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.FRENCH],
        common: false
    },
}));

export default UNITS;
