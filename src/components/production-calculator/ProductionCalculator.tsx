import {useAppSelector} from "../../hooks";
import {shallowEqual} from "react-redux";
import serviceLocator from "../../application/ServiceLocator";
import DEFAULT_GATHERING_RATES from "../../data/BaseGatheringRates";

const productionCalculatorService = serviceLocator.PRODUCTION_CALCULATOR_SERVICE;

function ProductionCalculator() {
    const selectedUnits = useAppSelector((rootState) => rootState.units, shallowEqual);
    let villagerCost = productionCalculatorService.calculateProductionVillagerCost(DEFAULT_GATHERING_RATES, selectedUnits, [], [], []);
    return (
        <div>
            <div>{JSON.stringify(selectedUnits)}</div>
            <div>{JSON.stringify(villagerCost)}</div>
        </div>
    );
}

export default ProductionCalculator;
