import {Building, UnitCost, UnitType} from "../../model/Unit";
import CivilizationsEnum from "../CivilizationsEnum";
import arbaletrierIcon from '../../icons/arbaletrier.png'
import {CROSSBOWMAN_PRODUCTION_TIME, CROSSBOWMAN_UNIT_COST, KNIGHT_PRODUCTION_TIME, KNIGHT_UNIT_COST} from "./CommonUnitsConstants";
import royalKnightIcon from '../../icons/royal-knight.png'
import warCogIcon from '../../icons/war-cog-2.png'
import galleasIcon from "../../icons/galleass.png";

const FRENCH_UNITS = [
    {
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
    {
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
    {
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
    {
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
]

export default FRENCH_UNITS;