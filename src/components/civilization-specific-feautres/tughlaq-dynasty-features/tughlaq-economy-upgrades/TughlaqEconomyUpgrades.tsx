import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import ResourceDropOffModifierId from "../../../../data/resource-drop-off-modifiers/ResourceDropOffModifierId";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";
import {unselectSelectResourceDropOff} from "../../../../state/ResourceDropOffModifiersSlice";
import s from "../../../common-upgrades/upgrade-group/upgrade-group.module.css";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import icon1 from "../../../../icons/Woven_Baskets_AoE4.webp";
import icon2 from "../../../../icons/Carrying_Frame_AoE4.webp";
import icon3 from "../../../../icons/Elephant_Harness_AoE4.webp";

const items = [
    {
        gatheringRateModifiers: [GatheringRateModifierId.TUGHLAQ_ECO_1],
        resourceDropOffModifiers: [ResourceDropOffModifierId.TUGHLAQ_ECO_1],
    },
    {
        gatheringRateModifiers: [GatheringRateModifierId.TUGHLAQ_ECO_2],
        resourceDropOffModifiers: [ResourceDropOffModifierId.TUGHLAQ_ECO_2],
    },
    {
        gatheringRateModifiers: [GatheringRateModifierId.TUGHLAQ_ECO_3],
        resourceDropOffModifiers: [ResourceDropOffModifierId.TUGHLAQ_ECO_3],
    },
];

const allGatheringRateModifiers = items.flatMap(item => item.gatheringRateModifiers);
const allResourceDropOffModifiers = items.flatMap(item => item.resourceDropOffModifiers);

function TughlaqEconomyUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const lastSelectedIndex = getLastSelectedIndex(gatheringRateModifiers);

    function handleClick(itemIndex: number) {
        if (itemIndex === lastSelectedIndex) {
            dispatch(unselectSelect({unselect: allGatheringRateModifiers, select: []}));
            dispatch(unselectSelectResourceDropOff({unselect: allResourceDropOffModifiers, select: []}))
        } else {
            const selectGatheringRateModifiers = [];
            const selectResourceDropOffModifiers = [];
            for (let item of items.slice(0, itemIndex + 1)) {
                selectGatheringRateModifiers.push(...item.gatheringRateModifiers);
                selectResourceDropOffModifiers.push(...item.resourceDropOffModifiers);
            }
            dispatch(unselectSelect({unselect: allGatheringRateModifiers, select: selectGatheringRateModifiers}));
            dispatch(unselectSelectResourceDropOff({unselect: allResourceDropOffModifiers, select: selectResourceDropOffModifiers}));
        }
    }

    return (
        <div className={s.upgradeGroup}>
            <UpgradeItem key={GatheringRateModifierId.TUGHLAQ_ECO_1} icon={icon1} selected={gatheringRateModifiers[GatheringRateModifierId.TUGHLAQ_ECO_1]}
                         onClick={() => handleClick(0)}/>
            <UpgradeItem key={GatheringRateModifierId.TUGHLAQ_ECO_2} icon={icon2} selected={gatheringRateModifiers[GatheringRateModifierId.TUGHLAQ_ECO_2]}
                         onClick={() => handleClick(1)}/>
            <UpgradeItem key={GatheringRateModifierId.TUGHLAQ_ECO_3} icon={icon3} selected={gatheringRateModifiers[GatheringRateModifierId.TUGHLAQ_ECO_3]}
                         onClick={() => handleClick(2)}/>
        </div>
    );
}

function getLastSelectedIndex(gatheringRateModifiers: { [key: string]: boolean }) {
    if (gatheringRateModifiers[GatheringRateModifierId.TUGHLAQ_ECO_3]) {
        return 2;
    } else if (gatheringRateModifiers[GatheringRateModifierId.TUGHLAQ_ECO_2]) {
        return 1;
    } else if (gatheringRateModifiers[GatheringRateModifierId.TUGHLAQ_ECO_1]) {
        return 0;
    } else {
        return -1;
    }
}

export default TughlaqEconomyUpgrades;