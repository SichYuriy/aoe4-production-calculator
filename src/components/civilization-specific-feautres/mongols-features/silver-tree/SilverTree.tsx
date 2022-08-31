import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import icon from '../../../../icons/the-silver-tree.png'
import {toggleProductionSpeedModifier} from "../../../../state/ProducationSpeedModifiersSlice";
import {toggleCostModifier} from "../../../../state/CostModifiersSlice";
import CostModifierId from "../../../../data/cost-modifiers/CostModifierId";

function SilverTree() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);

    function toggleUpgrades() {
        dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.SILVER_TREE));
        dispatch(toggleCostModifier(CostModifierId.SILVER_TREE));
    }

    return (
        <UpgradeItem selected={productionSpeedModifiers[ProductionSpeedModifierId.SILVER_TREE]}
                     icon={icon}
                     onClick={toggleUpgrades}/>
    )
}

export default SilverTree;
