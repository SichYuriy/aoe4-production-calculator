import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import spearmanIcon from '../../icons/spearman.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'
import jeannesChampionIcon from '../../icons/jeannes-champion.png'
import jeannesRiderIcon from '../../icons/jeannes-rider.png'
import ghulamIcon from '../../icons/ghulam-3.png'
import palaceGuardIcon from '../../icons/palace-guard.png'
import landsknechtIcon from '../../icons/landsknecht.png'
import villagerIcon from '../../icons/villager.png'
import springaldIcon from '../../icons/springald.png'
import ramIcon from '../../icons/ram.png'
import mangonelIcon from '../../icons/mangonel.png'
import counterweightTrebuchetIcon from '../../icons/counterweight-trebuchet.png'
import nestOfBeesIcon from '../../icons/nest-of-bees.png'
import bombardIcon from '../../icons/bombard.png'
import scoutIcon from '../../icons/scout.png'
import fishingBoatIcon from '../../icons/fishing-boat.png'
import traderIcon from '../../icons/trader.png'
import archerIcon from '../../icons/archer.png'
import camelArcherIcon from '../../icons/camel-archer.png'
import crossbowmanIcon from '../../icons/crossbowman.png'

import handcannoneerIcon from '../../icons/handcannoneer.png'
import horsemanIcon from '../../icons/horseman.png'
import lancerIcon from '../../icons/lancer.png'
import knightIcon from '../../icons/knight.png'

import camelRiderIcon from '../../icons/camel-rider.png'
import imperialOfficialIcon from '../../icons/imperial-official.png'
import zhugeNuIcon from '../../icons/zhuge-nu.png'
import fireLancerIcon from '../../icons/fire-lancer.png'
import grenadierIcon from '../../icons/grenadier.png'
import wynguardArmyIcon from '../../icons/wynguard-army.png'

import tradeShipIcon from '../../icons/trade-ship.png'
import dhowIcon from '../../icons/dhow.png'
import hulkIcon from '../../icons/hulk.png'

import demolitionShipIcon from '../../icons/demolition_ship.png'
import carrackIcon from '../../icons/carrack.png'
import galleyIcon from '../../icons/galley.png'
import baghlahIcon from '../../icons/baghlah.png'
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
import ENGLISH_UNITS from "./EnglishUnits";
import BYZANTINES_UNITS from "./ByzantinesUnits";
import ZHU_XIS_LEGACY_UNITS from "./ZhuXisLegacyUnits";
import AYYUBIDS_UNITS from "./AyyubidsUnits";
import OTTOMANS_UNITS from "./OttomansUnits";
import DELHI_UNITS from "./DelhiUnits";
import MONGOLS_UNITS from "./MongolsUnits";
import RUS_UNITS from "./RusUnits";
import {
    CROSSBOWMAN_PRODUCTION_TIME,
    CROSSBOWMAN_UNIT_COST,
    HORSEMAN_PRODUCTION_TIME,
    HORSEMAN_UNIT_COST,
    KNIGHT_PRODUCTION_TIME,
    KNIGHT_UNIT_COST,
    MAN_AT_ARMS_PRODUCTION_TIME,
    MAN_AT_ARMS_UNIT_COST,
    SPEARMAN_PRODUCTION_TIME,
    SPEARMAN_UNIT_COST
} from "./CommonUnitsConstants";
import FRENCH_UNITS from "./FrenchUnits";

const ALL_CIVILIZATIONS: CivilizationsEnum[] = [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE,
    CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS,
    CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC,
    CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.AYYUBIDS,
    CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES, CivilizationsEnum.KNIGHTS_TEMPLAR,
    CivilizationsEnum.HOUSE_OF_LANCASTER, CivilizationsEnum.GOLDEN_HORDE, CivilizationsEnum.MACEDONIAN_DYNASTY,
    CivilizationsEnum.SENGOKU_DAIMYO, CivilizationsEnum.TUGHLAQ_DYNASTY];

const TRADER_PRODUCTION_TIME = 30;
const VILLAGER_PRODUCTION_TIME = 20;

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
ENGLISH_UNITS.forEach(unit => UNITS.set(unit.id, unit));
BYZANTINES_UNITS.forEach(unit => UNITS.set(unit.id, unit));
ZHU_XIS_LEGACY_UNITS.forEach(unit => UNITS.set(unit.id, unit));
AYYUBIDS_UNITS.forEach(unit => UNITS.set(unit.id, unit));
OTTOMANS_UNITS.forEach(unit => UNITS.set(unit.id, unit));
DELHI_UNITS.forEach(unit => UNITS.set(unit.id, unit));
MONGOLS_UNITS.forEach(unit => UNITS.set(unit.id, unit));
RUS_UNITS.forEach(unit => UNITS.set(unit.id, unit));
FRENCH_UNITS.forEach(unit => UNITS.set(unit.id, unit));


const UNITS_LIST = Array.from(UNITS.values());
UNITS_LIST.sort((a, b) => a.displayOrder - b.displayOrder);

export {UNITS_LIST, UNITS};
export default UNITS;
