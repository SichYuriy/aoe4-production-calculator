import ProductionCalculatorService from "../service/ProductionCalculatorService";
import GatheringRatesService from "../service/GatheringRatesService";

const serviceLocator =  {
    PRODUCTION_CALCULATOR_SERVICE: new ProductionCalculatorService(),
    GATHERING_RATES_SERVICE: new GatheringRatesService()
}

 export default serviceLocator;
