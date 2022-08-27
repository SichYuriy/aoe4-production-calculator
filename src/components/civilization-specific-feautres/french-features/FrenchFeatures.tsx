import FrenchAgeSelect from "./french-age-select/FrenchAgeSelect";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import ProductionSpeedModifierId from "../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {toggleProductionSpeedModifier} from "../../../state/ProducationSpeedModifiersSlice";
import schoolOfCavalryIcon from '../../../icons/school-of-cavalry.png';
import s from './french-features.module.css';
import FrenchCastles from "./french-castles/FrenchCastles";

function FrenchFeatures() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    let schoolOfCavalryItem = <UpgradeItem icon={schoolOfCavalryIcon}
                                           selected={productionSpeedModifiers[ProductionSpeedModifierId.SCHOOL_OF_CAVALRY]}
                                           onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.SCHOOL_OF_CAVALRY))}/>
    return (
        <div className={s.frenchFeatures}>
            <FrenchAgeSelect/>
            {schoolOfCavalryItem}
            <FrenchCastles/>
        </div>
    )
}

export default FrenchFeatures;
