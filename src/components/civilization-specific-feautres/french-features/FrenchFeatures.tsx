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
                                           onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.SCHOOL_OF_CAVALRY))}
                                           tooltip={{header: 'School of cavalry', text: 'Reduces production time fro stables'}}/>
    return (
        <div className={s.frenchFeatures}>
            <div className={s.row}>
                <FrenchAgeSelect/>
            </div>
            <div className={s.row}>
                {schoolOfCavalryItem}
            </div>
            <div className={s.row}>
                <FrenchCastles/>
            </div>
        </div>
    )
}

export default FrenchFeatures;
