import Unit from "./Unit";

export default interface ProductionSpeedModifier {
    id: string,
    canBeApplied: (unit: Unit) => boolean,
    apply: (currentProductionTime: number, unit: Unit) => number
}
