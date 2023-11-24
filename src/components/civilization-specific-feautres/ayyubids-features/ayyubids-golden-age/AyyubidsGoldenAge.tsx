import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";
import {unselectSelectProductionSpeedModifiers} from "../../../../state/ProducationSpeedModifiersSlice";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import s from "../../abbasid-features/golden-age/golden-age.module.css";
import GoldenAgeItem from "../../abbasid-features/golden-age/golden-age-item/GoldenAgeItem";
import cancelIcon from "../../../../icons/cancel.png";
import goldenAge1Icon from "../../../../icons/goldenagetier1.png";
import goldenAge3Icon from "../../../../icons/goldenagetier3.png";
import goldenAge4Icon from "../../../../icons/goldenagetier4.png";
import CostModifierId from "../../../../data/cost-modifiers/CostModifierId";
import {unselectSelectCostModifiers} from "../../../../state/CostModifiersSlice";
import Tooltip from "../../../tooltip/Tooltip";

const ALL_GATHERING_RATES = [GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1];
const ALL_PRODUCTION = [ProductionSpeedModifierId.AYYUBIDS_GOLDEN_AGE_3];
const ALL_COST_MODIFIERS = [CostModifierId.AYYUBIDS_GOLDEN_AGE_4];

function AyyubidsGoldenAge() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    const costModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.costModifiers);

    let currentAge = 0;
    if (costModifiers[CostModifierId.AYYUBIDS_GOLDEN_AGE_4]) {
        currentAge = 4;
    } else if (productionSpeedModifiers[ProductionSpeedModifierId.AYYUBIDS_GOLDEN_AGE_3]) {
        currentAge = 3;
    } else if (gatheringRateModifiers[GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1]) {
        currentAge = 1;
    }

    function unselectAll() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: []}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: []}));
        dispatch(unselectSelectCostModifiers({unselect: ALL_COST_MODIFIERS, select: []}));
    }

    function selectAge1() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: [GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1]}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: []}));
        dispatch(unselectSelectCostModifiers({unselect: ALL_COST_MODIFIERS, select: []}));
    }

    function selectAge3() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: [GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1]}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: [ProductionSpeedModifierId.AYYUBIDS_GOLDEN_AGE_3]}));
        dispatch(unselectSelectCostModifiers({unselect: ALL_COST_MODIFIERS, select: []}));
    }

    function selectAge4() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: [GatheringRateModifierId.AYYUBIDS_GOLDEN_AGE_1]}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: [ProductionSpeedModifierId.AYYUBIDS_GOLDEN_AGE_3]}));
        dispatch(unselectSelectCostModifiers({unselect: ALL_COST_MODIFIERS, select: [CostModifierId.AYYUBIDS_GOLDEN_AGE_4]}));
    }

    return (
        <Tooltip header={'Golden Age'} text={'1: Villager gather rate +10%, 3: Production speed +20%, 4: Siege units cost 20% less'}>
            <div className={s.goldenAge}>
                <GoldenAgeItem icon={cancelIcon} selected={currentAge === 0} onClick={unselectAll}/>
                <GoldenAgeItem icon={goldenAge1Icon} selected={currentAge === 1} onClick={selectAge1}/>
                <GoldenAgeItem icon={goldenAge3Icon} selected={currentAge === 3} onClick={selectAge3}/>
                <GoldenAgeItem icon={goldenAge4Icon} selected={currentAge === 4} onClick={selectAge4}/>
            </div>
        </Tooltip>
    );
}

export default AyyubidsGoldenAge;