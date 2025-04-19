import kingdomOfFranceIcon from "../../../../icons/kingdom-of-france-2.png";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {toggleProductionSpeedModifier} from "../../../../state/ProducationSpeedModifiersSlice";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleCostModifier} from "../../../../state/CostModifiersSlice";
import CostModifierId from "../../../../data/cost-modifiers/CostModifierId";

export function KingdomOfFrance() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);

    function toggle() {
        dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.KINGDOM_OF_FRANCE));
        dispatch(toggleCostModifier(CostModifierId.KINGDOM_OF_FRANCE));
    }

    return (
        <UpgradeItem icon={kingdomOfFranceIcon}
                     selected={productionSpeedModifiers[ProductionSpeedModifierId.KINGDOM_OF_FRANCE]}
                     onClick={toggle}
                     tooltip={{header: 'Kingdom of France', text: 'Military units are produced +15% faster and cost -5% gold.'}}
                     iconHeight={'auto'}/>
    );
}