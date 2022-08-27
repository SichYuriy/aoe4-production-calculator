import Unit, {UnitCost} from "./Unit";

export default interface UnitCostModifier {
    id: string,
    canBeApplied: (unit: Unit) => boolean,
    apply: (currentCost: UnitCost) => UnitCost
}
