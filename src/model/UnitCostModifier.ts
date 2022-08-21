import Unit, {UnitCost} from "./Unit";

export default interface UnitCostModifier {
    canBeApplied: (unit: Unit) => boolean,
    apply: (currentCost: UnitCost, unit: Unit) => UnitCost
}
