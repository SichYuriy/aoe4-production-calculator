import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import spearmanIcon from '../../icons/spearman.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'
import jeannesChampionIcon from '../../icons/jeannes-champion.png'
import jeannesRiderIcon from '../../icons/jeannes-rider.png'
import ghulamIcon from '../../icons/ghulam-3.png'
import palaceGuardIcon from '../../icons/palace-guard.png'
import sipahiIcon from '../../icons/sipahi.png'
import mehterIcon from '../../icons/mehter.png'
import janissaryIcon from '../../icons/janissary.png'
import greatBombardIcon from '../../icons/great_bombard.png'
import landsknechtIcon from '../../icons/landsknecht.png'
import villagerIcon from '../../icons/villager.png'
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
import warriorMonkIcon from '../../icons/warrior_monk.png'
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
import dervishIcon from '../../icons/dervish.png'
import desertRaiderIcon from '../../icons/desert-raider.png'
import camelLancerIcon from '../../icons/camel-lancer.png'
import towerOfTheSultanIcon from '../../icons/tower-of-the-sultan.png'
import shaolinMonkIcon from '../../icons/shaolin-monk.png'
import imperialGuardIcon from '../../icons/imperial-guard.png'
import yuanRaiderIcon from '../../icons/yuan-raider.png'
import limitaneiIcon from '../../icons/limitanei.png'
import varangianGuardIcon from '../../icons/varangian-guard.png'
import cataphractIcon from '../../icons/cataphract.png'
import cheirosiphonIcon from '../../icons/cheirosiphon.png'
import dromonIcon from '../../icons/dromon.png'
import bazaarIcon from '../../icons/trade-wing-bazaar.png'
import venetianTraderIcon from '../../icons/venetian-trader.png'
import serjeantIcon from '../../icons/serjeant.png'
import hospitallerKnightIcon from '../../icons/hospitaller-knight.png'
import genoeseCrossbowmanIcon from '../../icons/genoese-crossbowman.png'
import heavySpearmanIcon from '../../icons/heavy-spearman.png'
import condottieroIcon from '../../icons/condottiero.png'
import teutonicKnightIcon from '../../icons/teutonic-knight.png'
import chevalierConfrereIcon from '../../icons/chevalier-confrere.png'
import genitourIcon from '../../icons/genitour.png'
import templarBrotherIcon from '../../icons/templar-brother.png'
import szlachtaCavalryIcon from '../../icons/szlachta-cavalry.png'
import venetianGalleyIcon from '../../icons/venetian-galley.png'

import CivilizationsEnum from "../CivilizationsEnum";
import DRAGON_ORDER_UNITS from "./DragonOrderUnits";
import JAPANESE_UNITS from "./JapaneseUnits";
import MALIAN_UNITS from "./MalianUnits";
import HOUSE_OF_LANCASTER_UNITS from "./HouseOfLancasterUnits";

const ALL_CIVILIZATIONS: CivilizationsEnum[] = [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE,
    CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS,
    CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC,
    CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.AYYUBIDS,
    CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
    CivilizationsEnum.HOUSE_OF_LANCASTER];

const TRADER_PRODUCTION_TIME = 30;
const TRADER_GOLD_COST = 60;
const VILLAGER_PRODUCTION_TIME = 20;

const KNIGHT_UNIT_COST = new UnitCost(140, 100, 0, 0);
const KNIGHT_PRODUCTION_TIME = 35;

const MAN_AT_ARMS_UNIT_COST = new UnitCost(100, 20, 0, 0);
const MAN_AT_ARMS_PRODUCTION_TIME = 22.5;

const CROSSBOWMAN_UNIT_COST = new UnitCost(80, 40, 0, 0);
const CROSSBOWMAN_PRODUCTION_TIME = 22.5;

const LONGBOWMAN_UNIT_COST = new UnitCost(40, 0, 50, 0);
const LONGBOWMAN_PRODUCTION_TIME = 15;

const SPEARMAN_UNIT_COST = new UnitCost(60, 0, 20, 0);
const SPEARMAN_PRODUCTION_TIME = 15;

const HORSEMAN_UNIT_COST = new UnitCost(100, 0, 20, 0);
const HORSEMAN_PRODUCTION_TIME = 22.5;

const UNITS: Map<string, Unit> = new Map<string, Unit>(Object.entries({
    VILLAGER: {
        id: 'VILLAGER',
        icon: villagerIcon,
        name: 'villager',
        productionTime: VILLAGER_PRODUCTION_TIME,
        cost: new UnitCost(50, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE,
            CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS,
            CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC,
            CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.AYYUBIDS,
            CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
            CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 300
    },
    ARCHER: {
        id: 'ARCHER',
        icon: archerIcon,
        name: 'archer',
        productionTime: 15,
        cost: new UnitCost(30, 0, 50, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: true,
        displayOrder: 600
    },
    LONGBOWMAN: {
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
    SPEARMAN: {
        id: 'SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: SPEARMAN_PRODUCTION_TIME,
        cost: SPEARMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND,
            CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS,
            CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE,
            CivilizationsEnum.KNIGHTS_TEMPLAR, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 1100
    },
    LIMITANEI: {
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
    HORSEMAN: {
        id: 'HORSEMAN',
        icon: horsemanIcon,
        name: 'horseman',
        productionTime: HORSEMAN_PRODUCTION_TIME,
        cost: HORSEMAN_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: true,
        displayOrder: 1800
    },
    YUAN_RAIDER: {
        id: 'YUAN_RAIDER',
        icon: yuanRaiderIcon,
        name: 'yuan raider',
        productionTime: 22.5,
        cost: new UnitCost(80, 20, 20, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 2000
    },
    DESERT_RAIDER: {
        id: 'DESERT_RAIDER',
        icon: desertRaiderIcon,
        name: 'desert raider',
        productionTime: 30,
        cost: new UnitCost(80, 50, 50, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 2100
    },
    SIPAHI: {
        id: 'SIPAHI',
        icon: sipahiIcon,
        name: 'sipahi',
        productionTime: 30,
        cost: new UnitCost(120, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 2300
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
        common: false,
        displayOrder: 2400
    },
    LANCER: {
        id: 'LANCER',
        icon: lancerIcon,
        name: 'lancer',
        productionTime: KNIGHT_PRODUCTION_TIME,
        cost: KNIGHT_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.DELHI, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: true,
        displayOrder: 2500
    },
    CAMEL_LANCER: {
        id: 'CAMEL_LANCER',
        icon: camelLancerIcon,
        name: 'camel lancer',
        productionTime: 35,
        cost: new UnitCost(130, 110, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 2600
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
        common: false,
        displayOrder: 2700
    },
    SCHOLAR: {
        id: 'SCHOLAR',
        icon: monkIcon,
        name: 'scholar',
        productionTime: 30,
        cost: new UnitCost(0, 135, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        displayOrder: 2800
    },
    DOME_OF_FAIT_SCHOLAR: {
        id: 'DOME_OF_FAIT_SCHOLAR',
        icon: monkIcon,
        name: 'scholar',
        productionTime: 30,
        cost: new UnitCost(0, 80, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 2900
    },
    WARRIOR_MONK: {
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
    SHAOLIN_MONK: {
        id: 'SHAOLIN_MONK',
        icon: shaolinMonkIcon,
        name: 'shaolin monk',
        productionTime: 20,
        cost: new UnitCost(200, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 3100
    },
    DERVISH: {
        id: 'DERVISH',
        icon: dervishIcon,
        name: 'dervish',
        productionTime: 40,
        cost: new UnitCost(60, 140, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 3400
    },
    KNIGHT: {
        id: 'KNIGHT',
        icon: knightIcon,
        name: 'knight',
        productionTime: KNIGHT_PRODUCTION_TIME,
        cost: KNIGHT_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS,
            CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 3500
    },
    CATAPHRACT: {
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
    ROYAL_KNIGHT: {
        id: 'ROYAL_KNIGHT',
        icon: royalKnightIcon,
        name: 'royal knight',
        productionTime: KNIGHT_PRODUCTION_TIME,
        cost: KNIGHT_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.FRENCH, CivilizationsEnum.JEANNE_D_ARC],
        common: false,
        displayOrder: 3900
    },
    IMPERIAL_GUARD: {
        id: 'IMPERIAL_GUARD',
        icon: imperialGuardIcon,
        name: 'imperial guard',
        productionTime: 35,
        cost: new UnitCost(140, 140, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 4000
    },
    JEANNES_RIDER: {
        id: 'JEANNES_RIDER',
        icon: jeannesRiderIcon,
        name: 'jeanne\'s rider',
        productionTime: 15,
        cost: new UnitCost(180, 20, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.KEEP,
        civilizations: [CivilizationsEnum.JEANNE_D_ARC],
        common: false,
        displayOrder: 4200
    },
    JEANNES_CHAMPION: {
        id: 'JEANNES_CHAMPION',
        icon: jeannesChampionIcon,
        name: 'jeanne\'s champion',
        productionTime: 15,
        cost: new UnitCost(160, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.KEEP,
        civilizations: [CivilizationsEnum.JEANNE_D_ARC],
        common: false,
        displayOrder: 4300
    },
    MAN_AT_ARMS: {
        id: 'MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: MAN_AT_ARMS_PRODUCTION_TIME,
        cost: MAN_AT_ARMS_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: true,
        displayOrder: 4400
    },
    VARANGIAN_GUARD: {
        id: 'VARANGIAN_GUARD',
        icon: varangianGuardIcon,
        name: 'varangian guard',
        productionTime: 25,
        cost: new UnitCost(90, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.BYZANTINES],
        common: false,
        displayOrder: 4700
    },
    PALACE_GUARD: {
        id: 'PALACE_GUARD',
        icon: palaceGuardIcon,
        name: 'palace guard',
        productionTime: 22.5,
        cost: new UnitCost(100, 25, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 5000
    },
    GHULAM: {
        id: 'GHULAM',
        icon: ghulamIcon,
        name: 'ghulam',
        productionTime: 26,
        cost: new UnitCost(120, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 5100
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
        common: false,
        displayOrder: 5300
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
        common: false,
        displayOrder: 5400
    },
    CROSSBOWMAN: {
        id: 'CROSSBOWMAN',
        icon: crossbowmanIcon,
        name: 'crossbowman',
        productionTime: CROSSBOWMAN_PRODUCTION_TIME,
        cost: CROSSBOWMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND,
            CivilizationsEnum.DELHI, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS,
            CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
            CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 5700
    },
    ARBALETRIER: {
        id: 'ARBALETRIER',
        icon: arbaletrierIcon,
        name: 'arbaletrier',
        productionTime: CROSSBOWMAN_PRODUCTION_TIME,
        cost: CROSSBOWMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.FRENCH, CivilizationsEnum.JEANNE_D_ARC],
        common: false,
        displayOrder: 6000
    },
    SERJEANT: {
        id: 'SERJEANT',
        icon: serjeantIcon,
        name: 'serjeant',
        productionTime: 23,
        cost: new UnitCost(70, 50, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 6500
    },
    HOSPITALLER_KNIGHT: {
        id: 'HOSPITALLER_KNIGHT',
        icon: hospitallerKnightIcon,
        name: 'hospitaller knight',
        productionTime: 21,
        cost: new UnitCost(50, 60, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 6600
    },
    GENOESE_CROSSBOWMAN: {
        id: 'GENOESE_CROSSBOWMAN',
        icon: genoeseCrossbowmanIcon,
        name: 'genoese crossbowman',
        productionTime: 26,
        cost: new UnitCost(80, 100, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 6700
    },
    HEAVY_SPEARMAN: {
        id: 'HEAVY_SPEARMAN',
        icon: heavySpearmanIcon,
        name: 'heavy spearman',
        productionTime: 19,
        cost: new UnitCost(80, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 6800
    },
    CONDOTTIERO: {
        id: 'CONDOTTIERO',
        icon: condottieroIcon,
        name: 'condottiero',
        productionTime: 19,
        cost: new UnitCost(0, 120, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 6900
    },
    TEUTONIC_KNIGHT: {
        id: 'TEUTONIC_KNIGHT',
        icon: teutonicKnightIcon,
        name: 'teutonic knight',
        productionTime: 28,
        cost: new UnitCost(80, 100, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 7000
    },
    CHEVALIER_CONFRERE: {
        id: 'CHEVALIER_CONFRERE',
        icon: chevalierConfrereIcon,
        name: 'chevalier confrere',
        productionTime: 26,
        cost: new UnitCost(90, 80, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 7100
    },
    GENITOUR: {
        id: 'GENITOUR',
        icon: genitourIcon,
        name: 'genitour',
        productionTime: 23,
        cost: new UnitCost(60, 0, 60, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 7200
    },
    TEMPLAR_BROTHER: {
        id: 'TEMPLAR_BROTHER',
        icon: templarBrotherIcon,
        name: 'templar brother',
        productionTime: 38,
        cost: new UnitCost(120, 140, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 7300
    },
    SZLACHTA_CAVALRY: {
        id: 'SZLACHTA_CAVALRY',
        icon: szlachtaCavalryIcon,
        name: 'szlachta cavalry',
        productionTime: 40,
        cost: new UnitCost(180, 120, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 7400
    },
    HANDCANNONEER: {
        id: 'HANDCANNONEER',
        icon: handcannoneerIcon,
        name: 'handcannoneer',
        productionTime: 35,
        cost: new UnitCost(120, 120, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND,
            CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.JEANNE_D_ARC,
            CivilizationsEnum.AYYUBIDS, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 7500
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
        common: false,
        displayOrder: 7800
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
        common: false,
        displayOrder: 7900
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
        common: false,
        displayOrder: 8100
    },
    AKINJI: {
        id: 'AKINJI',
        icon: horseArcherIcon,
        name: 'akinji',
        productionTime: 24,
        cost: new UnitCost(80, 0, 80, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 8200
    },
    MANGUDAI: {
        id: 'MANGUDAI',
        icon: mangudaiIcon,
        name: 'mangudai',
        productionTime: 28,
        cost: new UnitCost(90, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        displayOrder: 8300
    },
    TRADER: {
        id: 'TRADER',
        icon: traderIcon,
        name: 'trader',
        productionTime: TRADER_PRODUCTION_TIME,
        cost: new UnitCost(0, 60, 60, 0),
        types: [],
        building: null,
        civilizations: ALL_CIVILIZATIONS.filter(civilization => CivilizationsEnum.KNIGHTS_TEMPLAR !== civilization),
        common: true,
        displayOrder: 8400
    },
    VENETIAN_TRADER: {
        id: 'VENETIAN_TRADER',
        icon: venetianTraderIcon,
        name: 'venetian trader',
        productionTime: 20,
        cost: new UnitCost(0, 120, 80, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 8500
    },
    SILVER_TREE_TRADER: {
        id: 'SILVER_TREE_TRADER',
        icon: traderIcon,
        name: 'silver tree trader',
        productionTime: TRADER_PRODUCTION_TIME * (1 / 1.4),
        cost: new UnitCost(0, TRADER_GOLD_COST * 0.6, 60, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 8600
    },
    FEUDAL_BAZAAR: {
        id: 'FEUDAL_BAZAAR',
        icon: bazaarIcon,
        name: 'feudal bazaar',
        productionTime: 60 * 3,
        cost: new UnitCost(0, 150 * 4, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        civilizationSpecificFeature: true,
        notAffectedByModifiers: true,
        displayOrder: 8700
    },
    CASTLE_BAZAAR: {
        id: 'CASTLE_BAZAAR',
        icon: bazaarIcon,
        name: 'castle bazaar',
        productionTime: 60 * 3,
        cost: new UnitCost(0, 350 * 4, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        civilizationSpecificFeature: true,
        notAffectedByModifiers: true,
        displayOrder: 8800
    },
    IMPERIAL_BAZAAR: {
        id: 'IMPERIAL_BAZAAR',
        icon: bazaarIcon,
        name: 'imperial bazaar',
        productionTime: 60 * 3,
        cost: new UnitCost(0, 425 * 4, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        civilizationSpecificFeature: true,
        notAffectedByModifiers: true,
        displayOrder: 8900
    },
    CAMEL_ARCHER: {
        id: 'CAMEL_ARCHER',
        icon: camelArcherIcon,
        name: 'camel archer',
        productionTime: 35,
        cost: new UnitCost(170, 0, 60, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID],
        common: false,
        displayOrder: 9000
    },
    CAMEL_RIDER: {
        id: 'CAMEL_RIDER',
        icon: camelRiderIcon,
        name: 'camel rider',
        productionTime: 35,
        cost: new UnitCost(130, 45, 45, 0),
        types: [UnitType.CAVALRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID],
        common: false,
        displayOrder: 9100
    },
    ZHUGE_NU: {
        id: 'ZHUGE_NU',
        icon: zhugeNuIcon,
        name: 'zhuge nu',
        productionTime: 15,
        cost: new UnitCost(30, 20, 30, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 9200
    },
    GRENADIER: {
        id: 'GRENADIER',
        icon: grenadierIcon,
        name: 'grenadier',
        productionTime: 30,
        cost: new UnitCost(100, 60, 60, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 9300
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
        common: false,
        displayOrder: 9400
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
        common: false,
        displayOrder: 9500
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
        common: false,
        displayOrder: 9600
    },
    SCOUT: {
        id: 'SCOUT',
        icon: scoutIcon,
        name: 'scout',
        productionTime: 23,
        cost: new UnitCost(65, 0, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND,
            CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS,
            CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY,
            CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
            CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 9700
    },
    FISHING_BOAT: {
        id: 'FISHING_BOAT',
        icon: fishingBoatIcon,
        name: 'fishing boat',
        productionTime: 30,
        cost: new UnitCost(0, 0, 75, 0),
        types: [],
        building: Building.DOCK,
        civilizations: ALL_CIVILIZATIONS.filter(civilization => CivilizationsEnum.RUS !== civilization),
        common: true,
        displayOrder: 9900
    },
    RUS_FISHING_BOAT: {
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
    RAM: {
        id: 'RAM',
        icon: ramIcon,
        name: 'ram',
        productionTime: 35,
        cost: new UnitCost(0, 0, 200, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE,
            CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS,
            CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC,
            CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.AYYUBIDS,
            CivilizationsEnum.JAPANESE, CivilizationsEnum.KNIGHTS_TEMPLAR, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 10100
    },
    CHEIROSIPHON: {
        id: 'CHEIROSIPHON',
        icon: cheirosiphonIcon,
        name: 'cheirosiphon',
        productionTime: 30,
        cost: new UnitCost(0, 60, 200, 0),
        types: [UnitType.SIEGE],
        building: null,
        civilizations: [CivilizationsEnum.BYZANTINES],
        common: false,
        displayOrder: 10200
    },
    SPRINGALD: {
        id: 'SPRINGALD',
        icon: springaldIcon,
        name: 'springald',
        productionTime: 30,
        cost: new UnitCost(0, 100, 150, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: ALL_CIVILIZATIONS,
        common: true,
        displayOrder: 10300
    },
    MANGONEL: {
        id: 'MANGONEL',
        icon: mangonelIcon,
        name: 'mangonel',
        productionTime: 40,
        cost: new UnitCost(0, 200, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI,
            CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS,
            CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.JAPANESE,
            CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 10400
    },
    MANJANIQ: {
        id: 'MANJANIQ',
        icon: mangonelIcon,
        name: 'manganiq',
        productionTime: 40,
        cost: new UnitCost(0, 200, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 10500
    },
    NEST_OF_BEES: {
        id: 'NEST_OF_BEES',
        icon: nestOfBeesIcon,
        name: 'nest of bees',
        productionTime: 40,
        cost: new UnitCost(0, 300, 300, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 10600
    },
    COUNTERWEIGHT_TREBUCHET: {
        id: 'COUNTERWEIGHT_TREBUCHET',
        icon: counterweightTrebuchetIcon,
        name: 'counterweight trebuchet',
        productionTime: 30,
        cost: new UnitCost(0, 150, 400, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI,
            CivilizationsEnum.FRENCH, CivilizationsEnum.CHINESE, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS,
            CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS,
            CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
            CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: true,
        displayOrder: 10700
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
        common: false,
        displayOrder: 10800
    },
    TOWER_OF_SULTAN: {
        id: 'TOWER_OF_SULTAN',
        icon: towerOfTheSultanIcon,
        name: 'tower of sultan',
        productionTime: 140,
        cost: new UnitCost(0, 350, 650, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 10900
    },
    BOMBARD: {
        id: 'BOMBARD',
        icon: bombardIcon,
        name: 'bombard',
        productionTime: 45,
        cost: new UnitCost(0, 500, 350, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND,
            CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS,
            CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS,
            CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
        common: true,
        displayOrder: 11000
    },
    GREAT_BOMBARD: {
        id: 'GREAT_BOMBARD',
        icon: greatBombardIcon,
        name: 'great bombard',
        productionTime: 60,
        cost: new UnitCost(0, 800, 450, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 11100
    },
    IMPERIAL_OFFICIAL: {
        id: 'IMPERIAL_OFFICIAL',
        icon: imperialOfficialIcon,
        name: 'imperial official',
        productionTime: 20,
        cost: new UnitCost(100, 50, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 11200
    },
    WYNGUARD_ARMY: {
        id: 'WYNGUARD_ARMY',
        icon: wynguardArmyIcon,
        name: 'wynguard army',
        productionTime: 55,
        cost: new UnitCost(100, 200, 100, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ENGLAND, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        civilizationSpecificFeature: true,
        displayOrder: 11800
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
        civilizationSpecificFeature: true,
        displayOrder: 11900
    },
    WYNGUARD_RANGERS: {
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
    WYNGUARD_FOOTMAN: {
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
    TRADE_SHIP: {
        id: 'TRADE_SHIP',
        icon: tradeShipIcon,
        name: 'trade ship',
        productionTime: 30,
        cost: new UnitCost(0, 100, 100, 0),
        types: [],
        building: Building.DOCK,
        civilizations: ALL_CIVILIZATIONS,
        common: false,
        displayOrder: 12500
    },
    DHOW: {
        id: 'DHOW',
        icon: dhowIcon,
        name: 'dhow',
        productionTime: 25,
        cost: new UnitCost(80, 0, 150, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 12600
    },
    GALLEY: {
        id: 'GALLEY',
        icon: galleyIcon,
        name: 'galley',
        productionTime: 25,
        cost: new UnitCost(80, 0, 150, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.RUS,
            CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
            CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 12700
    },
    JUNK: {
        id: 'JUNK',
        icon: galleyIcon,
        name: 'junk',
        productionTime: 25,
        cost: new UnitCost(80, 0, 150, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 12800
    },
    HULK: {
        id: 'HULK',
        icon: hulkIcon,
        name: 'hulk',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.HRE, CivilizationsEnum.RUS,
            CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.KNIGHTS_TEMPLAR, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 12900
    },
    DROMON: {
        id: 'DROMON',
        icon: dromonIcon,
        name: 'dromon',
        productionTime: 30,
        cost: new UnitCost(100, 60, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.BYZANTINES],
        common: false,
        displayOrder: 13000
    },
    WAR_COG: {
        id: 'WAR_COG',
        icon: warCogIcon,
        name: 'war cog',
        productionTime: 30,
        cost: new UnitCost(75, 30, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.FRENCH, CivilizationsEnum.JEANNE_D_ARC],
        common: false,
        displayOrder: 13100
    },
    BAGHLAH: {
        id: 'BAGHLAH',
        icon: baghlahIcon,
        name: 'baghlah',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.AYYUBIDS],
        common: false,
        displayOrder: 13200
    },
    WAR_JUNK: {
        id: 'WAR_JUNK',
        icon: hulkIcon,
        name: 'war junk',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 13300
    },
    DEMOLITION_SHIP: {
        id: 'DEMOLITION_SHIP',
        icon: demolitionShipIcon,
        name: 'demolition ship',
        productionTime: 15,
        cost: new UnitCost(0, 80, 80, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH,
            CivilizationsEnum.HRE, CivilizationsEnum.RUS, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI,
            CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.BYZANTINES,
            CivilizationsEnum.KNIGHTS_TEMPLAR, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 13400
    },
    EXPLOSIVE_JUNK: {
        id: 'EXPLOSIVE_JUNK',
        icon: demolitionShipIcon,
        name: 'explosive junk',
        productionTime: 15,
        cost: new UnitCost(0, 80, 80, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
        common: false,
        displayOrder: 13500
    },
    CARRACK: {
        id: 'CARRACK',
        icon: carrackIcon,
        name: 'carrack',
        productionTime: 45,
        cost: new UnitCost(200, 200, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE,
            CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER,
            CivilizationsEnum.BYZANTINES, CivilizationsEnum.HOUSE_OF_LANCASTER],
        common: false,
        displayOrder: 13600
    },
    BAOCHUAN: {
        id: 'BAOCHUAN',
        icon: carrackIcon,
        name: 'baochuan',
        productionTime: 45,
        cost: new UnitCost(200, 200, 200, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false,
        displayOrder: 13700
    },
    GRAND_GALLEY: {
        id: 'GRAND_GALLEY',
        icon: grandGalleyIcon,
        name: 'grand galley',
        productionTime: 50,
        cost: new UnitCost(135, 300, 360, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS],
        common: false,
        displayOrder: 13900
    },
    GALLEAS: {
        id: 'GALLEAS',
        icon: galleasIcon,
        name: 'galleas',
        productionTime: 50,
        cost: new UnitCost(200, 300, 360, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.FRENCH, CivilizationsEnum.JEANNE_D_ARC],
        common: false,
        displayOrder: 14200
    },
    WHITE_TOWER_KNIGHT: {
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
    WHITE_TOWER_MAN_AT_ARMS: {
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
    WHITE_TOWER_CROSSBOWMAN: {
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
    WHITE_TOWER_LONGBOWMAN: {
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
    WHITE_TOWER_SPEARMAN: {
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
    WHITE_TOWER_HORSEMAN: {
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
    VENETIAN_GALLEY: {
        id: 'VENETIAN_GALLEY',
        icon: venetianGalleyIcon,
        name: 'venetian galley',
        productionTime: 50,
        cost: new UnitCost(0, 300, 360, 0),
        types: [UnitType.MILITARY_SHIP],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.KNIGHTS_TEMPLAR],
        common: false,
        displayOrder: 14900
    },
}));
DRAGON_ORDER_UNITS.forEach(unit => UNITS.set(unit.id, unit));
JAPANESE_UNITS.forEach(unit => UNITS.set(unit.id, unit));
MALIAN_UNITS.forEach(unit => UNITS.set(unit.id, unit));
HOUSE_OF_LANCASTER_UNITS.forEach(unit => UNITS.set(unit.id, unit));


const UNITS_LIST = Array.from(UNITS.values());
UNITS_LIST.sort((a, b) => a.displayOrder - b.displayOrder);

export { UNITS_LIST, UNITS };
export default UNITS;
