import ProductionCalculatorService from "../service/production-calculator-service/ProductionCalculatorService";
import PassiveIncomeService from "../service/PassiveIncomeService";
import LimitedFoodGatheringSourceService from "../service/limited-food-gathering-source-service/LimitedFoodGatheringSourceService";
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
