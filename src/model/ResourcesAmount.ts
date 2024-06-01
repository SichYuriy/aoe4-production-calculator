import GatheringRates from "./GatheringRates";
import ProductionVillagerCost from "./ProductionVillagerCost";

export default class ResourcesAmount {
    food: number = 0;
    gold: number = 0;
    wood: number = 0;
    stone: number = 0;

    static of(food: number, wood: number, gold: number, stone: number): ResourcesAmount {
        let amount = new ResourcesAmount();
        amount.food = food;
        amount.wood = wood;
        amount.gold = gold;
        amount.stone = stone;
        return amount;
    }

    static ofObj(obj: { food: number, wood: number, gold: number, stone: number }): ResourcesAmount {
        return ResourcesAmount.of(obj.food, obj.wood, obj.gold, obj.stone);
    }

    public add(other: ResourcesAmount): ResourcesAmount {
        return ResourcesAmount.of(
            this.food + other.food,
            this.wood + other.wood,
            this.gold + other.gold,
            this.stone + other.stone,
        );
    }

    public multiply(other: ResourcesAmount): ResourcesAmount {
        return ResourcesAmount.of(
            this.food * other.food,
            this.wood * other.wood,
            this.gold * other.gold,
            this.stone * other.stone,
        );
    }

    public addNumber(val: number) {
        return ResourcesAmount.of(
            this.food + val,
            this.wood + val,
            this.gold + val,
            this.stone + val,
        );
    }

    public multiplyByNumber(val: number) {
        return ResourcesAmount.of(
            this.food * val,
            this.wood * val,
            this.gold * val,
            this.stone * val,
        );
    }

    public divideByNumber(val: number) {
        return ResourcesAmount.of(
            this.food / val,
            this.wood / val,
            this.gold / val,
            this.stone / val,
        )
    }

    public subtractToZero(other: ResourcesAmount) {
        return ResourcesAmount.of(
            Math.max(this.food - other.food, 0),
            Math.max(this.wood - other.wood, 0),
            Math.max(this.gold - other.gold, 0),
            Math.max(this.stone - other.stone, 0),
        );
    }

    public divideByGatheringRate(other: GatheringRates): ProductionVillagerCost {
        return {
            foodVillagers: this.food / other.food,
            woodVillagers: this.wood / other.wood,
            goldVillagers: this.gold / other.gold,
            stoneVillagers: this.stone / other.stone,
        };
    }
}
