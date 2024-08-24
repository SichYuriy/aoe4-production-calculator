import Unit, {Building, UnitCost, UnitType} from "../../model/Unit";
import spearmanIcon from '../../icons/spearman.png'
import donsoIcon from '../../icons/donso.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'
import jeannesChampionIcon from '../../icons/jeannes-champion.png'
import jeannesRiderIcon from '../../icons/jeannes-rider.png'
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
import gildedSpearmanIcon from '../../icons/gilded-spearman.png'
import gildedManAtArmsIcon from '../../icons/gilded-man-at-arms.png'
import gildedLandsknechtIcon from '../../icons/gilded-landsknecht.png'
import gildedArcherIcon from '../../icons/gilded-archer.png'
import gildedCrossbowmanIcon from '../../icons/gilded-crossbowman.png'
import dragonHandcannoneerIcon from '../../icons/dragon-handcannoneer.png'
import gildedHorsemanIcon from '../../icons/gilded-horseman.png'
import gildedKnightIcon from '../../icons/gilded-knight.png'
import dervishIcon from '../../icons/dervish.png'
import desertRaiderIcon from '../../icons/desert-raider.png'
import camelLancerIcon from '../../icons/camel-lancer.png'
import towerOfTheSultanIcon from '../../icons/tower-of-the-sultan.png'
import shaolinMonkIcon from '../../icons/shaolin-monk.png'
import imperialGuardIcon from '../../icons/imperial-guard.png'
import yuanRaiderIcon from '../../icons/yuan-raider.png'
import buddhistIcon from '../../icons/buddhist-monk.png'
import shintoPriestIcon from '../../icons/shinto-priest.png'
import samuraiIcon from '../../icons/samurai.png'
import yumiAshigaruIcon from '../../icons/yumi-ashigaru.png'
import shinobiIcon from '../../icons/shinobi.png'
import onnaBugeishaIcon from '../../icons/onna-bugeisha.png'
import ozutsuIcon from '../../icons/ozutsu.png'
import onnaMushaIcon from '../../icons/onna-musha.png'
import mountedSamuraiIcon from '../../icons/mounted-samurai.png'
import atakebuneIcon from '../../icons/atakebune.png'
import limitaneiIcon from '../../icons/limitanei.png'
import varangianGuardIcon from '../../icons/varangian-guard.png'
import cataphractIcon from '../../icons/cataphract.png'
import cheirosiphonIcon from '../../icons/cheirosiphon.png'
import dromonIcon from '../../icons/dromon.png'
import bazaarIcon from '../../icons/trade-wing-bazaar.png'

import CivilizationsEnum from "../CivilizationsEnum";

const ALL_CIVILIZATIONS: CivilizationsEnum[] = [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE,
    CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS,
    CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC,
    CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.AYYUBIDS,
    CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES];

const DRAGON_VILLAGER_COST = 60;
const DRAGON_VILLAGER_PRODUCTION_TIME = 24;
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
    DRAGON_ORDER_VILLAGER: {
        id: 'DRAGON_ORDER_VILLAGER',
        icon: villagerIcon,
        name: 'dragon villager',
        productionTime: DRAGON_VILLAGER_PRODUCTION_TIME,
        cost: new UnitCost(DRAGON_VILLAGER_COST, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    PALACE_OF_SWABIA_DRAGON_VILLAGER: {
        id: 'PALACE_OF_SWABIA_DRAGON_VILLAGER',
        icon: villagerIcon,
        name: 'dragon villager',
        productionTime: DRAGON_VILLAGER_PRODUCTION_TIME  / 3,
        cost: new UnitCost(DRAGON_VILLAGER_COST / 3, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true
    },
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
            CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
        common: true
    },
    FLOATING_GATE_VILLAGER: {
        id: 'FLOATING_GATE_VILLAGER',
        icon: villagerIcon,
        name: 'Yorishiro TC villager',
        productionTime: VILLAGER_PRODUCTION_TIME * (1 / 1.30),
        cost: new UnitCost(50, 0, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false,
        civilizationSpecificFeature: true
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.BYZANTINES],
        common: true
    },
    YUMI_ASHIGARU: {
        id: 'YUMI_ASHIGARU',
        icon: yumiAshigaruIcon,
        name: 'yumi ashigaru',
        productionTime: 13,
        cost: new UnitCost(30, 0, 35, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
    },
    GILDED_ARCHER: {
        id: 'GILDED_ARCHER',
        icon: gildedArcherIcon,
        name: 'gilded archer',
        productionTime: 18,
        cost: new UnitCost(60, 0, 100, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
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
        common: false
    },
    SPEARMAN: {
        id: 'SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: SPEARMAN_PRODUCTION_TIME,
        cost: SPEARMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
        common: true
    },
    GILDED_SPEARMAN: {
        id: 'GILDED_SPEARMAN',
        icon: gildedSpearmanIcon,
        name: 'gilded spearman',
        productionTime: 18,
        cost: new UnitCost(120, 0, 40, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    BURGRAVE_PALACE_GILDED_SPEARMAN: {
        id: 'BURGRAVE_PALACE_GILDED_SPEARMAN',
        icon: gildedSpearmanIcon,
        name: 'gilded spearman',
        productionTime: 18 * (1 / 1.3),
        cost: new UnitCost(120 * 0.7, 0, 40 * 0.7, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true
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
        common: false
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
    ONNA_BUGEISHA: {
        id: 'ONNA_BUGEISHA',
        icon: onnaBugeishaIcon,
        name: 'onna-bugeisha',
        productionTime: 15,
        cost: new UnitCost(60, 20, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
    },
    SHINOBI: {
        id: 'SHINOBI',
        icon: shinobiIcon,
        name: 'shinobi',
        productionTime: 20,
        cost: new UnitCost(50, 50, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
    },
    HORSEMAN: {
        id: 'HORSEMAN',
        icon: horsemanIcon,
        name: 'horseman',
        productionTime: HORSEMAN_PRODUCTION_TIME,
        cost: HORSEMAN_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
        common: true
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
        common: false
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
        common: false
    },
    GILDED_HORSEMAN: {
        id: 'GILDED_HORSEMAN',
        icon: gildedHorsemanIcon,
        name: 'gilded horseman',
        productionTime: 27,
        cost: new UnitCost(200, 0, 40, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
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
        productionTime: KNIGHT_PRODUCTION_TIME,
        cost: KNIGHT_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.DELHI, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: true
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
        common: false
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
        productionTime: 30,
        cost: new UnitCost(0, 65, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.DELHI],
        common: false,
        civilizationSpecificFeature: true
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
        common: false
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
        common: false
    },
    BUDDHIST_MONK: {
        id: 'BUDDHIST_MONK',
        icon: buddhistIcon,
        name: 'buddhist monk',
        productionTime: 30,
        cost: new UnitCost(0, 80, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
    },
    SHINTO_PRIEST: {
        id: 'SHINTO_PRIEST',
        icon: shintoPriestIcon,
        name: 'shinto priest',
        productionTime: 30,
        cost: new UnitCost(0, 150, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
    },
    DERVISH: {
        id: 'DERVISH',
        icon: dervishIcon,
        name: 'dervish',
        productionTime: 40,
        cost: new UnitCost(60, 120, 0, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false
    },
    KNIGHT: {
        id: 'KNIGHT',
        icon: knightIcon,
        name: 'knight',
        productionTime: KNIGHT_PRODUCTION_TIME,
        cost: KNIGHT_UNIT_COST,
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS],
        common: true
    },
    GILDED_KNIGHT: {
        id: 'GILDED_KNIGHT',
        icon: gildedKnightIcon,
        name: 'gilded knight',
        productionTime: 42,
        cost: new UnitCost(280, 200, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
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
        common: false
    },
    MOUNTED_SAMURAI: {
        id: 'MOUNTED_SAMURAI',
        icon: mountedSamuraiIcon,
        name: 'mounted samurai',
        productionTime: 35,
        cost: new UnitCost(140, 110, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.STABLE,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
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
        common: false
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
    JEANNES_RIDER: {
        id: 'JEANNES_RIDER',
        icon: jeannesRiderIcon,
        name: 'jeanne\'s rider',
        productionTime: 15,
        cost: new UnitCost(180, 20, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.KEEP,
        civilizations: [CivilizationsEnum.JEANNE_D_ARC],
        common: false
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
        common: false
    },
    MAN_AT_ARMS: {
        id: 'MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: MAN_AT_ARMS_PRODUCTION_TIME,
        cost: MAN_AT_ARMS_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.JEANNE_D_ARC],
        common: true
    },
    SAMURAI: {
        id: 'SAMURAI',
        icon: samuraiIcon,
        name: 'samurai',
        productionTime: 22.5,
        cost: new UnitCost(100, 30, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
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
        common: false
    },
    GILDED_MAN_AT_ARMS: {
        id: 'GILDED_MAN_AT_ARMS',
        icon: gildedManAtArmsIcon,
        name: 'gilded man at arms',
        productionTime: 27,
        cost: new UnitCost(200, 40, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    BURGRAVE_PALACE_GILDED_MAN_AT_ARMS: {
        id: 'BURGRAVE_PALACE_GILDED_MAN_AT_ARMS',
        icon: gildedManAtArmsIcon,
        name: 'gilded man at arms',
        productionTime: 27 * (1 / 1.3),
        cost: new UnitCost(200 * 0.7, 40 * 0.7, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.AYYUBIDS],
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
    GILDED_LANDSKNECHT: {
        id: 'GILDED_LANDSKNECHT',
        icon: gildedLandsknechtIcon,
        name: 'gilded landsknecht',
        productionTime: 27,
        cost: new UnitCost(120, 200, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    BURGRAVE_PALACE_GILDED_LANDSKNECHT: {
        id: 'BURGRAVE_PALACE_GILDED_LANDSKNECHT',
        icon: gildedLandsknechtIcon,
        name: 'gilded landsknecht',
        productionTime: 27 * (1 / 1.3),
        cost: new UnitCost(120 * 0.7, 200 * 0.7, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false,
        civilizationSpecificFeature: true
    },
    CROSSBOWMAN: {
        id: 'CROSSBOWMAN',
        icon: crossbowmanIcon,
        name: 'crossbowman',
        productionTime: CROSSBOWMAN_PRODUCTION_TIME,
        cost: CROSSBOWMAN_UNIT_COST,
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.BYZANTINES],
        common: true
    },
    GILDED_CROSSBOWMAN: {
        id: 'GILDED_CROSSBOWMAN',
        icon: gildedCrossbowmanIcon,
        name: 'gilded crossbowman',
        productionTime: 27,
        cost: new UnitCost(160, 80, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    ONNA_MUSHA: {
        id: 'ONNA_MUSHA',
        icon: onnaMushaIcon,
        name: 'onna-musha',
        productionTime: 24,
        cost: new UnitCost(80, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
        common: true
    },
    DRAGON_HANDCANNONEER: {
        id: 'DRAGON_HANDCANNONEER',
        icon: dragonHandcannoneerIcon,
        name: 'dragon handcannoneer',
        productionTime: 35,
        cost: new UnitCost(240, 240, 0, 0),
        types: [UnitType.INFANTRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    OZUTSU: {
        id: 'OZUTSU',
        icon: ozutsuIcon,
        name: 'ozutsu',
        productionTime: 35,
        cost: new UnitCost(85, 155, 0, 0),
        types: [UnitType.INFANTRY],
        building: null,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
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
        productionTime: 28,
        cost: new UnitCost(90, 60, 0, 0),
        types: [UnitType.CAVALRY],
        building: Building.ARCHERY,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false
    },
    TRADER: {
        id: 'TRADER',
        icon: traderIcon,
        name: 'trader',
        productionTime: TRADER_PRODUCTION_TIME,
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
        productionTime: TRADER_PRODUCTION_TIME * (1 / 1.4),
        cost: new UnitCost(0, TRADER_GOLD_COST * 0.6, 60, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.MONGOLS],
        common: false,
        civilizationSpecificFeature: true
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
        notAffectedByModifiers: true
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
        notAffectedByModifiers: true
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
        notAffectedByModifiers: true
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
        common: false
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
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
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
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
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
        productionTime: 30,
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
        productionTime: 46,
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
        productionTime: 35,
        cost: new UnitCost(0, 0, 250, 0),
        types: [],
        building: null,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE,
            CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS,
            CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC,
            CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.AYYUBIDS,
            CivilizationsEnum.JAPANESE],
        common: true
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
        common: false
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
        common: true
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
        common: false
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
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.CHINESE, CivilizationsEnum.RUS, CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
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
    TOWER_OF_SULTAN: {
        id: 'TOWER_OF_SULTAN',
        icon: towerOfTheSultanIcon,
        name: 'tower of sultan',
        productionTime: 140,
        cost: new UnitCost(0, 350, 650, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.AYYUBIDS],
        common: false
    },
    BOMBARD: {
        id: 'BOMBARD',
        icon: bombardIcon,
        name: 'bombard',
        productionTime: 45,
        cost: new UnitCost(0, 500, 350, 0),
        types: [UnitType.SIEGE],
        building: Building.SIEGE_WORKSHOP,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.CHINESE, CivilizationsEnum.HRE, CivilizationsEnum.ENGLAND, CivilizationsEnum.DELHI, CivilizationsEnum.FRENCH, CivilizationsEnum.MONGOLS, CivilizationsEnum.RUS, CivilizationsEnum.MALIANS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE, CivilizationsEnum.BYZANTINES],
        common: true
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
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.ZHU_XIS_LEGACY],
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
        productionTime: 45,
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
        productionTime: 45,
        cost: new UnitCost(300, 400, 0, 0),
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
        cost: new UnitCost(80, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.AYYUBIDS],
        common: false
    },
    GALLEY: {
        id: 'GALLEY',
        icon: galleyIcon,
        name: 'galley',
        productionTime: 25,
        cost: new UnitCost(80, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.RUS, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.BYZANTINES],
        common: false
    },
    JUNK: {
        id: 'JUNK',
        icon: galleyIcon,
        name: 'junk',
        productionTime: 25,
        cost: new UnitCost(80, 0, 150, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
        common: false
    },
    HULK: {
        id: 'HULK',
        icon: hulkIcon,
        name: 'hulk',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.HRE, CivilizationsEnum.RUS, CivilizationsEnum.DRAGON_ORDER],
        common: false
    },
    DROMON: {
        id: 'DROMON',
        icon: dromonIcon,
        name: 'dromon',
        productionTime: 30,
        cost: new UnitCost(100, 60, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.BYZANTINES],
        common: false
    },
    WAR_COG: {
        id: 'WAR_COG',
        icon: warCogIcon,
        name: 'war cog',
        productionTime: 30,
        cost: new UnitCost(75, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.FRENCH, CivilizationsEnum.JEANNE_D_ARC],
        common: false
    },
    BAGHLAH: {
        id: 'BAGHLAH',
        icon: baghlahIcon,
        name: 'baghlah',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.AYYUBIDS],
        common: false
    },
    WAR_JUNK: {
        id: 'WAR_JUNK',
        icon: hulkIcon,
        name: 'war junk',
        productionTime: 30,
        cost: new UnitCost(110, 30, 200, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
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
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.MALIANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.RUS, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.AYYUBIDS, CivilizationsEnum.BYZANTINES],
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
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY, CivilizationsEnum.JAPANESE],
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
        civilizations: [CivilizationsEnum.OTTOMANS, CivilizationsEnum.ENGLAND, CivilizationsEnum.FRENCH, CivilizationsEnum.HRE, CivilizationsEnum.ABBASID, CivilizationsEnum.DELHI, CivilizationsEnum.JEANNE_D_ARC, CivilizationsEnum.DRAGON_ORDER, CivilizationsEnum.BYZANTINES],
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
        civilizations: [CivilizationsEnum.CHINESE, CivilizationsEnum.MONGOLS, CivilizationsEnum.ZHU_XIS_LEGACY],
        common: false
    },
    ATAKEBUNE: {
        id: 'ATAKEBUNE',
        icon: atakebuneIcon,
        name: 'atakebune',
        productionTime: 45,
        cost: new UnitCost(100, 220, 220, 0),
        types: [],
        building: Building.DOCK,
        civilizations: [CivilizationsEnum.JAPANESE],
        common: false
    },
    GRAND_GALLEY: {
        id: 'GRAND_GALLEY',
        icon: grandGalleyIcon,
        name: 'grand galley',
        productionTime: 50,
        cost: new UnitCost(135, 300, 360, 0),
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
        cost: new UnitCost(80, 0, 150, 0),
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
        cost: new UnitCost(110, 30, 200, 0),
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
        civilizations: [CivilizationsEnum.FRENCH, CivilizationsEnum.JEANNE_D_ARC],
        common: false
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
        civilizationSpecificFeature: true
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
        civilizationSpecificFeature: true
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
        civilizationSpecificFeature: true
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
        civilizationSpecificFeature: true
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
        civilizationSpecificFeature: true
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
        civilizationSpecificFeature: true
    },
}));

export default UNITS;
