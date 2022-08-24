import ProductionSpeedModifier from "../model/ProductionSpeedModifier";
import {UnitType} from "../model/Unit";

export enum PRODUCTION_SPEED_MODIFIERS_ID {
    MILITARY_ACADEMY = 'MILITARY_ACADEMY',
}

const PRODUCTION_SPEED_MODIFIERS: { [key: string]: ProductionSpeedModifier } = {
    [PRODUCTION_SPEED_MODIFIERS_ID.MILITARY_ACADEMY]: {
        id: PRODUCTION_SPEED_MODIFIERS_ID.MILITARY_ACADEMY,
        canBeApplied: unit => unit.types.some(unitType => [UnitType.INFANTRY, UnitType.CAVALRY, UnitType.SIEGE, UnitType.TRANSPORT].includes(unitType)),
        apply: currentProductionTime => currentProductionTime * 0.75
    }
}

export default PRODUCTION_SPEED_MODIFIERS;
