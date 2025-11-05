import Unit, {UnitCost} from "../../model/Unit";
import villagerIcon from "../../icons/villager.png";
import CivilizationsEnum from "../CivilizationsEnum";

export const KNIGHT_UNIT_COST = new UnitCost(140, 100, 0, 0);
export const KNIGHT_PRODUCTION_TIME = 35;

export const MAN_AT_ARMS_UNIT_COST = new UnitCost(100, 20, 0, 0);
export const MAN_AT_ARMS_PRODUCTION_TIME = 22.5;

export const CROSSBOWMAN_UNIT_COST = new UnitCost(80, 40, 0, 0);
export const CROSSBOWMAN_PRODUCTION_TIME = 22.5;

export const SPEARMAN_UNIT_COST = new UnitCost(60, 0, 20, 0);
export const SPEARMAN_PRODUCTION_TIME = 15;

export const HORSEMAN_UNIT_COST = new UnitCost(100, 0, 20, 0);
export const HORSEMAN_PRODUCTION_TIME = 22.5;