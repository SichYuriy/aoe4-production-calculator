export class CalculationUtil {
    public static roundVillagerCost(villagersAmount: number): number {
        if (villagersAmount - Math.floor(villagersAmount) < 0.3) {
            return Math.floor(villagersAmount);
        } else {
            return Math.ceil(villagersAmount);
        }
    }
}