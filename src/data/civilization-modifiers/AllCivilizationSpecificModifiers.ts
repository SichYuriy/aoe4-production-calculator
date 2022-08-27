import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {
    DEFAULT_FRENCH_COST_MODIFIERS,
    DEFAULT_FRENCH_PRODUCTION_SPEED_MODIFIERS,
    FRENCH_COST_MODIFIERS,
    FRENCH_PRODUCTION_SPEED_MODIFIERS
} from "./FrenchModifiers";
import CostModifierId from "../cost-modifiers/CostModifierId";

export const PRODUCTION_SPEED_MODIFIERS_DEFAULT: {[key:string]: ProductionSpeedModifierId[]} = {
    [CivilizationsEnum.FRENCH]: DEFAULT_FRENCH_PRODUCTION_SPEED_MODIFIERS,
}

export const ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS: ProductionSpeedModifierId[] = [
    FRENCH_PRODUCTION_SPEED_MODIFIERS
].flatMap(arr => arr);

export const COST_MODIFIERS_DEFAULT: {[key:string]: CostModifierId[]} = {
    [CivilizationsEnum.FRENCH]: DEFAULT_FRENCH_COST_MODIFIERS
};

export const ALL_CIVILIZATIONS_COST_MODIFIERS: CostModifierId[] = [
    FRENCH_COST_MODIFIERS
].flatMap(arr => arr);
