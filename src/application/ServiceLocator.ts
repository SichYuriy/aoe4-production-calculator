import ProductionCalculatorService from "../service/ProductionCalculatorService";
import PassiveIncomeService from "../service/PassiveIncomeService";
import LimitedFoodGatheringSourceService from "../service/LimitedFoodGatheringSourceService";
import GatheringRatesService from "../service/GatheringRatesService";

let gatheringRatesService = new GatheringRatesService();
let passiveIncomeService = new PassiveIncomeService();
let limitedFoodGatheringService = new LimitedFoodGatheringSourceService(gatheringRatesService);
let productionCalculatorService = new ProductionCalculatorService(limitedFoodGatheringService);

const serviceLocator =  {
    GATHERING_RATES_SERVICE: gatheringRatesService,
    PASSIVE_INCOME_SERVICE: passiveIncomeService,
    LIMITED_FOOD_GATHERING_SOURCE_SERVICE: limitedFoodGatheringService,
    PRODUCTION_CALCULATOR_SERVICE: productionCalculatorService
}

 export default serviceLocator;
