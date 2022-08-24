export default interface Unit {
    id: string;
    name: string;
    icon: any;
    productionTime: number;
    cost: UnitCost;
    types: UnitType[];
}

export enum UnitType {
    INFANTRY,
    CAVALRY,
    SIEGE,
    TRANSPORT,
}

export class UnitCost {
    public food: number;
    public gold: number;
    public wood: number;
    public stone: number;

    constructor(foodCost: number, goldCost: number, woodCost: number, stoneCost: number) {
        this.food = foodCost;
        this.gold = goldCost;
        this.wood = woodCost;
        this.stone = stoneCost;
    }
}
