import {UnitCost} from "./Unit";

export default interface CostModifierPerUnit {
    id: string,
    apply: (currentCost: UnitCost) => UnitCost,
    description: string
}