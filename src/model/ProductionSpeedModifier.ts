import Unit from "../data/unit/Unit";

export default interface ProductionSpeedModifier {
    canBeApplied: (unit: Unit) => boolean,
    apply: (currentProductionSpeed: number, unit: Unit) => number
}
