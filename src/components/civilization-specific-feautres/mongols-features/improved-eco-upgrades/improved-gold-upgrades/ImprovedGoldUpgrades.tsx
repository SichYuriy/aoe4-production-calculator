import icon1 from "../../../../../icons/specialized-pick.png";
import GatheringRateModifierId from "../../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import icon2 from "../../../../../icons/acid-distilization.png";
import icon3 from "../../../../../icons/cupellation.png";
import UpgradeItem from "../../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import ResourceDropOffModifierId from "../../../../../data/resource-drop-off-modifiers/ResourceDropOffModifierId";
import {unselectSelect} from "../../../../../state/GatheringRateModifiersSlice";
import {unselectSelectResourceDropOff} from "../../../../../state/ResourceDropOffModifiersSlice";
import shared from "../../../../../shared.module.css";

const ALL_GATHERING_RATE_UPGRADES = [GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK, GatheringRateModifierId.IMPROVED_ACID_DISTILLATION];
const ALL_RESOURCE_DROP_OFF_UPGRADES = [ResourceDropOffModifierId.IMPROVED_CUPELLATION];

function ImprovedGoldUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const resourceDropOffModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.resourceDropOffModifiers);

    function dispatchUnselectSelect(selectedGatheringRateModifiers: string[], selectedResourceDropOffModifiers: string[]) {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATE_UPGRADES, select: selectedGatheringRateModifiers}));
        dispatch(unselectSelectResourceDropOff({unselect: ALL_RESOURCE_DROP_OFF_UPGRADES, select: selectedResourceDropOffModifiers}));
    }

    function selectFirstUpgrade() {
        const firstUpgradeSelected = gatheringRateModifiers[GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK]
            && !gatheringRateModifiers[GatheringRateModifierId.IMPROVED_ACID_DISTILLATION];
        if (firstUpgradeSelected) {
            dispatchUnselectSelect([], []);
        } else {
            dispatchUnselectSelect(
                [GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK],
                []
            );

        }
    }

    function selectSecondUpgrade() {
        const secondUpgradeSelected = gatheringRateModifiers[GatheringRateModifierId.IMPROVED_ACID_DISTILLATION]
            && !resourceDropOffModifiers[ResourceDropOffModifierId.IMPROVED_CUPELLATION];
        if (secondUpgradeSelected) {
            dispatchUnselectSelect([], []);
        } else {
            dispatchUnselectSelect(
                [GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK, GatheringRateModifierId.IMPROVED_ACID_DISTILLATION],
                []
            );
        }
    }

    function selectThirdUpgrade() {
        const thirdUpgradeSelected = resourceDropOffModifiers[ResourceDropOffModifierId.IMPROVED_CUPELLATION];
        if (thirdUpgradeSelected) {
            dispatchUnselectSelect([], []);
        } else {
            dispatchUnselectSelect(
                [GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK, GatheringRateModifierId.IMPROVED_ACID_DISTILLATION],
                [ResourceDropOffModifierId.IMPROVED_CUPELLATION]
            );
        }
    }

    return (
        <div className={shared.upgradeGroup}>
            <UpgradeItem icon={icon1}
                         selected={gatheringRateModifiers[GatheringRateModifierId.IMPROVED_SPECIALIZED_PICK]}
                         onClick={selectFirstUpgrade}/>
            <UpgradeItem icon={icon2}
                         selected={gatheringRateModifiers[GatheringRateModifierId.IMPROVED_ACID_DISTILLATION]}
                         onClick={selectSecondUpgrade}/>
            <UpgradeItem icon={icon3}
                         selected={resourceDropOffModifiers[ResourceDropOffModifierId.IMPROVED_CUPELLATION]}
                         onClick={selectThirdUpgrade}/>
        </div>
    );
}

export default ImprovedGoldUpgrades;
