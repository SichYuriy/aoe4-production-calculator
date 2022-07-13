import Unit, {UnitCost} from "../data/unit/Unit";

export default interface UnitCostModifier {
    canBeApplied: (unit: Unit) => boolean,
    apply: (currentCost: UnitCost, unit: Unit) => UnitCost
}
