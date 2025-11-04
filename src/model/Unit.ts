import CivilizationsEnum from "../data/CivilizationsEnum";

export default interface Unit {
    id: string;
    name: string;
    icon: any;
    productionTime: number;
    cost: UnitCost;
    types: UnitType[];
    building: Building | null,
    civilizations: CivilizationsEnum[],
    common: boolean,
    civilizationSpecificFeature?: boolean,
    notAffectedByModifiers?: boolean,
    displayOrder: number
}

export enum UnitType {
    INFANTRY,
    CAVALRY,
    SIEGE,
    TRANSPORT,
    MILITARY_SHIP
}

export enum Building {
    STABLE,
    ARCHERY,
    DOCK,
    SIEGE_WORKSHOP,
    KEEP
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
