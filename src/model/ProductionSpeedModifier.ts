import Unit from "./Unit";

export default interface ProductionSpeedModifier {
    id: string,
    canBeApplied: (unit: Unit) => boolean,
    productionSpeedBonus: number
}
