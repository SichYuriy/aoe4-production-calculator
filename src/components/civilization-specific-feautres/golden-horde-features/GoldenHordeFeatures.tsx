import shared from "../../../shared.module.css";
import Edicts from "./edicts/Edicts";
import increasedSuppliesIcon from "../../../icons/increased-supplies-2.png";

import GoldenHordeFoodUpgrades from "./golden-horde-food-upgrades/GoldenHordeFoodUpgrades";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import ProductionSpeedModifierId from "../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {toggleProductionSpeedModifier} from "../../../state/ProducationSpeedModifiersSlice";

function GoldenHordeFeatures() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);


    let increasedSuppliesItem = <UpgradeItem
        icon={increasedSuppliesIcon}
        selected={productionSpeedModifiers[ProductionSpeedModifierId.INCREASED_SUPPLIES]}
        onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.INCREASED_SUPPLIES))}
        tooltip={{header: 'Increased Supplies', text: 'Reduce military production time'}}/>

    return (<div className={shared.civilizationSpecificFeatures}>
        <Edicts/>
        <div className={shared.upgradesRow}>
            <GoldenHordeFoodUpgrades/>
            {increasedSuppliesItem}
        </div>
    </div>);
}

export default GoldenHordeFeatures;
