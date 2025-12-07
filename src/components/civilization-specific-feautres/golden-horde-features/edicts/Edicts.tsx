import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import goldenTentIcon from "../../../../icons/golden-tent-2.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {unselectSelectProductionSpeedModifiers} from "../../../../state/ProducationSpeedModifiersSlice";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import productionSpeedEdictIcon from "../../../../icons/production-speed-edict-1.png";
import cancelIcon from "../../../../icons/cancel.png";
import ImageItem from "../../../image-item/ImageItem";
import {PassiveIncomeModifiersState, unselectSelectPassiveIncomeModifiers} from "../../../../state/PassiveIncomeModifiersSlice";
import {decrementPassiveIncome, incrementPassiveIncome, PassiveIncomeSourcesState} from "../../../../state/PassiveIncomeSourcesSlice";
import PassiveIncomeModifierId from "../../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import stockyardIcon from "../../../../icons/stockyard-1.png";
import stockyardEdictIcon from "../../../../icons/stockyard-edict-5.png";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";

function Edicts() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    function selectProductionSpeed() {
        dispatch(unselectSelectProductionSpeedModifiers({unselect: [], select: [ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT]}));
        dispatch(unselectSelectPassiveIncomeModifiers({unselect: [PassiveIncomeModifierId.STOCKYARD_EDICT], select: []}));
    }

    function selectStockyards() {
        dispatch(unselectSelectProductionSpeedModifiers({unselect: [ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT], select: []}));
        dispatch(unselectSelectPassiveIncomeModifiers({unselect: [], select: [PassiveIncomeModifierId.STOCKYARD_EDICT]}));
    }

    function unselectAll() {
        dispatch(unselectSelectProductionSpeedModifiers({unselect: [ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT], select: []}));
        dispatch(unselectSelectPassiveIncomeModifiers({unselect: [PassiveIncomeModifierId.STOCKYARD_EDICT], select: []}));
    }

    let productionSpeedEdict = <UpgradeItem icon={productionSpeedEdictIcon}
                                            selected={productionSpeedModifiers[ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT]}
                                            onClick={selectProductionSpeed}
                                            tooltip={{header: 'Production Speed Edict', text: 'Reduce military production time'}}/>

    let stockyardEdict = <UpgradeItem icon={stockyardEdictIcon}
                                      selected={passiveIncomeModifiers[PassiveIncomeModifierId.STOCKYARD_EDICT].selected}
                                      onClick={selectStockyards}
                                      tooltip={{header: 'Stockyard Edict', text: 'Stockyards produce gold'}}/>

    let stockyardsItem = <UpgradeItemCounter icon={stockyardIcon}
                                             count={passiveIncomeSources[PassiveIncomeSource.STOCKYARD].count}
                                             onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.STOCKYARD))}
                                             onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.STOCKYARD))}/>

    let noneSelected = !productionSpeedModifiers[ProductionSpeedModifierId.PRODUCTION_SPEED_EDICT]
        && !passiveIncomeModifiers[PassiveIncomeModifierId.STOCKYARD_EDICT].selected;

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip text={'Edicts'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={goldenTentIcon} alt={'edicts'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <ImageItem selected={noneSelected} icon={cancelIcon} onClick={unselectAll}/>
            {productionSpeedEdict}
            {stockyardEdict}
            <div>:</div>
            {stockyardsItem}
        </div>
    );
}

export default Edicts;