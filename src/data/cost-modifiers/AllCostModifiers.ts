import UnitCostModifier from "../../model/UnitCostModifier";
import CostModifierId from "./CostModifierId";
import {enlistmentIncentives, frenchCastle} from "../civilization-modifiers/FrenchModifiers";

const COST_MODIFIERS: { [key: string]: UnitCostModifier } = {
    [CostModifierId.FRENCH_CASTLE]: frenchCastle,
    [CostModifierId.ENLISTMENTS_INCENTIVES]: enlistmentIncentives
}

export default COST_MODIFIERS;
