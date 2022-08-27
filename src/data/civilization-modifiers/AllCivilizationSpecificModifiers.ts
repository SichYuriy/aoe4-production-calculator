import CivilizationsEnum from "../CivilizationsEnum";
import ProductionSpeedModifierId from "../production-speed-modifiers/ProductionSpeedModifierId";
import {DEFAULT_FRENCH_PRODUCTION_SPEED_MODIFIERS, FRENCH_PRODUCTION_SPEED_MODIFIERS} from "./FrenchModifiers";

export const PRODUCTION_SPEED_MODIFIERS_DEFAULT: {[key:string]: ProductionSpeedModifierId[]} = {
    [CivilizationsEnum.FRENCH]: DEFAULT_FRENCH_PRODUCTION_SPEED_MODIFIERS,
}

export const ALL_CIVILIZATIONS_PRODUCTION_SPEED_MODIFIERS: ProductionSpeedModifierId[] = [
    FRENCH_PRODUCTION_SPEED_MODIFIERS
].flatMap(arr => arr);
