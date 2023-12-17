import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import conscriptioIcon from "../../../../icons/conscriptio.png";
import ImageItem from "../../../image-item/ImageItem";
import cancelIcon from "../../../../icons/cancel.png";
import NumberItem from "../../../number-item/NumberItem";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {
    ProductionSpeedModifiersState,
    unselectSelectProductionSpeedModifiers
} from "../../../../state/ProducationSpeedModifiersSlice";

const ALL_MODIFIERS = [ProductionSpeedModifierId.CONSCRIPTIO_1, ProductionSpeedModifierId.CONSCRIPTIO_2, ProductionSpeedModifierId.CONSCRIPTIO_3, ProductionSpeedModifierId.CONSCRIPTIO_4, ProductionSpeedModifierId.CONSCRIPTIO_5];

function Conscriptio() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: ProductionSpeedModifiersState = useAppSelector((rootState) => rootState.productionSpeedModifiers);

    let noneSelected = !ALL_MODIFIERS.some(id => productionSpeedModifiers[id]);

    function unselectAll() {
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_MODIFIERS, select: []}));
    }

    function select(modifierId: string) {
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_MODIFIERS, select: [modifierId]}));
    }

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Conscriptio'} text={'Military unit production rate increased +20%/+40%/+60%/+80%/+100%'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={conscriptioIcon} alt={'cistern'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <ImageItem icon={cancelIcon}
                       selected={noneSelected}
                       onClick={unselectAll}/>
            <NumberItem number={1}
                        selected={productionSpeedModifiers[ProductionSpeedModifierId.CONSCRIPTIO_1]}
                        onClick={() => select(ProductionSpeedModifierId.CONSCRIPTIO_1)}/>
            <NumberItem number={2}
                        selected={productionSpeedModifiers[ProductionSpeedModifierId.CONSCRIPTIO_2]}
                        onClick={() => select(ProductionSpeedModifierId.CONSCRIPTIO_2)}/>
            <NumberItem number={3}
                        selected={productionSpeedModifiers[ProductionSpeedModifierId.CONSCRIPTIO_3]}
                        onClick={() => select(ProductionSpeedModifierId.CONSCRIPTIO_3)}/>
            <NumberItem number={4}
                        selected={productionSpeedModifiers[ProductionSpeedModifierId.CONSCRIPTIO_4]}
                        onClick={() => select(ProductionSpeedModifierId.CONSCRIPTIO_4)}/>
            <NumberItem number={5}
                        selected={productionSpeedModifiers[ProductionSpeedModifierId.CONSCRIPTIO_5]}
                        onClick={() => select(ProductionSpeedModifierId.CONSCRIPTIO_5)}/>
        </div>
    );
}

export default Conscriptio;