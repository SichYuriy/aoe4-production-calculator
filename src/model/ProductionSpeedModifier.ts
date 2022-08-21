import Unit from "./Unit";

export default interface ProductionSpeedModifier {
    canBeApplied: (unit: Unit) => boolean,
    apply: (currentProductionSpeed: number, unit: Unit) => number
}
