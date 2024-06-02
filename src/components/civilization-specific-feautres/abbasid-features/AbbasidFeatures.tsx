import MuslimBerries from "../shared-features/muslim-berries/MuslimBerries";
import TradersDiscount from "./traders-discount/TradersDiscount";
import GoldenAge from "./golden-age/GoldenAge";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import freshFoodIcon from "../../../icons/fresh-foodstuffs.png";
import agricultureIcon from "../../../icons/agriculture.png";
import improvedProcessing from "../../../icons/improved-processing.png";
import CostModifierId from "../../../data/cost-modifiers/CostModifierId";
import {toggleCostModifier} from "../../../state/CostModifiersSlice";
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../state/GatheringRateModifiersSlice";
import shared from "../../../shared.module.css";
import ResourceDropOffModifierId from "../../../data/resource-drop-off-modifiers/ResourceDropOffModifierId";
import {toggleResourceDropOffModifier} from "../../../state/ResourceDropOffModifiersSlice";

function AbbasidFeatures() {
    const dispatch = useAppDispatch();
    const costModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.costModifiers);
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const resourceDropOffModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.resourceDropOffModifiers);

    let freshFoodItem = <UpgradeItem icon={freshFoodIcon}
                                     selected={costModifiers[CostModifierId.FRESH_FOOD]}
                                     onClick={() => dispatch(toggleCostModifier(CostModifierId.FRESH_FOOD))}
                                     tooltip={{header: 'Fresh food', text: 'Reduces villager cost'}}/>
    let agricultureItem = <UpgradeItem icon={agricultureIcon}
                                       selected={gatheringRateModifiers[GatheringRateModifierId.AGRICULTURE]}
                                       onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.AGRICULTURE))}
                                       tooltip={{header: 'Agriculture', text: 'Increases farm gathering rate'}}/>
    let improvedProcessingItem = <UpgradeItem icon={improvedProcessing}
                                              selected={resourceDropOffModifiers[ResourceDropOffModifierId.IMPROVED_PROCESSING]}
                                              onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.IMPROVED_PROCESSING))}
                                              tooltip={{header: 'Improved processing', text: ' Villagers will drop off 8% more resources'}}/>

    return (
        <div className={shared.civilizationSpecificFeatures}>
            <MuslimBerries/>
            <TradersDiscount/>
            <GoldenAge/>
            <div className={shared.upgradesRow}>
                {freshFoodItem}
                {agricultureItem}
                {improvedProcessingItem}
            </div>
        </div>
    );
}

export default AbbasidFeatures;
