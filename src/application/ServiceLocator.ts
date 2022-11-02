import ProductionCalculatorService from "../service/ProductionCalculatorService";
import GatheringRatesService from "../service/GatheringRatesService";
import PassiveIncomeService from "../service/PassiveIncomeService";

const serviceLocator =  {
    PRODUCTION_CALCULATOR_SERVICE: new ProductionCalculatorService(),
    GATHERING_RATES_SERVICE: new GatheringRatesService(),
    PASSIVE_INCOME_SERVICE: new PassiveIncomeService()
}

 export default serviceLocator;
