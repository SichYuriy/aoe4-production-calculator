import {useAppDispatch, useAppSelector} from "../../../../hooks";
import s from "./zhu-xis-legacy-yuan-dynasty.module.css";
import CostModifierId from "../../../../data/cost-modifiers/CostModifierId";
import {toggleCostModifier} from "../../../../state/CostModifiersSlice";
import Tooltip from "../../../tooltip/Tooltip";

function ZhuXisLegacyYuanDynasty() {
    const dispatch = useAppDispatch();
    const costModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.costModifiers);
    const selected = costModifiers[CostModifierId.ZHU_XIS_LEGACY_YUAN_DYNASTY];
    return (
        <Tooltip header={'Yuan Dynasty'} text={'10% discount on all units'}>
            <div className={`${s.yuanDynasty} ${selected ? s.selectedDynasty : ''}`}
                 onClick={() => dispatch(toggleCostModifier(CostModifierId.ZHU_XIS_LEGACY_YUAN_DYNASTY))}>
                Yuan Dynasty
            </div>
        </Tooltip>
    );
}

export default ZhuXisLegacyYuanDynasty;