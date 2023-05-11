import FrenchAgeSelect from "./french-age-select/FrenchAgeSelect";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import ProductionSpeedModifierId from "../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {toggleProductionSpeedModifier} from "../../../state/ProducationSpeedModifiersSlice";
import schoolOfCavalryIcon from '../../../icons/school-of-cavalry.png';
import shared from '../../../shared.module.css';
import FrenchCastles from "./french-castles/FrenchCastles";

function FrenchFeatures() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    let schoolOfCavalryItem = <UpgradeItem icon={schoolOfCavalryIcon}
                                           selected={productionSpeedModifiers[ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]}
                                           onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.SCHOOL_OF_CAVALRY))}
                                           tooltip={{header: 'School of cavalry', text: 'Reduces production time for stables'}}/>
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div className={shared.upgradesRow}>
                <FrenchAgeSelect/>
            </div>
            <div className={shared.upgradesRow}>
                {schoolOfCavalryItem}
            </div>
            <div className={shared.upgradesRow}>
                <FrenchCastles/>
            </div>
        </div>
    )
}

export default FrenchFeatures;
