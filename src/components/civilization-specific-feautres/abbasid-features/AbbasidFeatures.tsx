import MuslimBerries from "../shared-features/muslim-berries/MuslimBerries";
import TradersDiscount from "./traders-discount/TradersDiscount";
import GoldenAge from "./golden-age/GoldenAge";
import s from './abbasid-features.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import freshFoodIcon from "../../../icons/fresh-foodstuffs.png";
import agricultureIcon from "../../../icons/agriculture.png";
import CostModifierId from "../../../data/cost-modifiers/CostModifierId";
import {toggleCostModifier} from "../../../state/CostModifiersSlice";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";

function AbbasidFeatures() {
    const dispatch = useAppDispatch();
    const costModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.costModifiers);
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    let freshFoodItem = <UpgradeItem icon={freshFoodIcon}
                                     selected={costModifiers[CostModifierId.FRESH_FOOD]}
                                     onClick={() => dispatch(toggleCostModifier(CostModifierId.FRESH_FOOD))}/>
    let agricultureItem = <UpgradeItem icon={agricultureIcon}
                                       selected={gatheringRateModifiers[GatheringRateModifierId.AGRICULTURE]}
                                       onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.AGRICULTURE))}/>

    return (
        <div className={s.abbasidFeatures}>
            <MuslimBerries/>
            <TradersDiscount/>
            <GoldenAge/>
            <div className={s.upgradesRow}>
                {freshFoodItem}
                {agricultureItem}
            </div>
        </div>
    );
}

export default AbbasidFeatures;
