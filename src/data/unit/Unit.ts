export default class Unit {
    public id: string;
    public name: string;
    public icon: any;
    public productionTime: number;
    public cost: UnitCost;

    constructor(id: string, name: string, icon: any, productionTime: number, cost: UnitCost) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.productionTime = productionTime;
        this.cost = cost;
    }
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
