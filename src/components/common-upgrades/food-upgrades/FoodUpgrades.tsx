import icon1 from '../../../icons/horticulture.png';
import icon2 from '../../../icons/fertilization.png';
import icon3 from '../../../icons/precision-cross-breeding.png';
import GatheringRateModifierId from "../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import s from "../upgrade-group/upgrade-group.module.css";
import UpgradeItem from "../../upgrade-item/UpgradeItem";
import PassiveIncomeModifierId from "../../../data/passive-income-modifiers/PassiveIncomeModifierId";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {unselectSelect} from "../../../state/GatheringRateModifiersSlice";
import {unselectSelectPassiveIncomeModifiers} from "../../../state/PassiveIncomeModifiersSlice";

const items = [
    {
        gatheringRateModifiers: [GatheringRateModifierId.HORTICULTURE],
        passiveIncomeModifiers: [PassiveIncomeModifierId.HORTICULTURE_CATTLE],
    },
    {
        gatheringRateModifiers: [GatheringRateModifierId.FERTILIZATION],
        passiveIncomeModifiers: [PassiveIncomeModifierId.FERTILIZATION_CATTLE],
    },
    {
        gatheringRateModifiers: [GatheringRateModifierId.CROSS_BREEDING],
        passiveIncomeModifiers: [PassiveIncomeModifierId.CROSS_BREEDING_CATTLE],
    }
];
const allGatheringRateModifiers = items.flatMap(item => item.gatheringRateModifiers);
const allPassiveIncomeModifiers = items.flatMap(item => item.passiveIncomeModifiers);

function FoodUpgrades() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    const lastSelectedIndex = getLastSelectedIndex(gatheringRateModifiers);

    function handleClick(itemIndex: number) {
        if (itemIndex === lastSelectedIndex) {
            dispatch(unselectSelect({unselect: allGatheringRateModifiers, select: []}));
            dispatch(unselectSelectPassiveIncomeModifiers({unselect: allPassiveIncomeModifiers, select: []}))
        } else {
            const selectGatheringRateModifiers = [];
            const selectPassiveIncomeModifiers = [];
            for (let item of items.slice(0, itemIndex + 1)) {
                selectGatheringRateModifiers.push(...item.gatheringRateModifiers);
                selectPassiveIncomeModifiers.push(...item.passiveIncomeModifiers);
            }
            dispatch(unselectSelect({unselect: allGatheringRateModifiers, select: selectGatheringRateModifiers}));
            dispatch(unselectSelectPassiveIncomeModifiers({unselect: allPassiveIncomeModifiers, select: selectPassiveIncomeModifiers}));
        }
    }

    return (
        <div className={s.upgradeGroup}>
            <UpgradeItem key={GatheringRateModifierId.HORTICULTURE} icon={icon1} selected={gatheringRateModifiers[GatheringRateModifierId.HORTICULTURE]}
                         onClick={() => handleClick(0)}/>
            <UpgradeItem key={GatheringRateModifierId.FERTILIZATION} icon={icon2} selected={gatheringRateModifiers[GatheringRateModifierId.FERTILIZATION]}
                         onClick={() => handleClick(1)}/>
            <UpgradeItem key={GatheringRateModifierId.CROSS_BREEDING} icon={icon3} selected={gatheringRateModifiers[GatheringRateModifierId.CROSS_BREEDING]}
                         onClick={() => handleClick(2)}/>
        </div>
    );
}

function getLastSelectedIndex(gatheringRateModifiers: { [key: string]: boolean }) {
    if (gatheringRateModifiers[GatheringRateModifierId.CROSS_BREEDING]) {
        return 2;
    } else if (gatheringRateModifiers[GatheringRateModifierId.FERTILIZATION]) {
        return 1;
    } else if (gatheringRateModifiers[GatheringRateModifierId.HORTICULTURE]) {
        return 0;
    } else {
        return -1;
    }
}

export default FoodUpgrades;
