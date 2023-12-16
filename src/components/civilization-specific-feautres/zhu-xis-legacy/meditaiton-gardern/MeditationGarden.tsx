import shared from "../../../../shared.module.css";
import meditationGardenIcon from "../../../../icons/meditation-gardens.png";
import berryBushIcon from "../../../../icons/berrybush.png";
import goldIcon from "../../../../icons/gold.png";
import stoneIcon from "../../../../icons/stone.png";
import woodIcon from "../../../../icons/wood.png";
import Tooltip from "../../../tooltip/Tooltip";
import UpgradeItemCounter from "../../../upgrade-item-counter/UpgradeItemCounter";
import {
    decrementPassiveIncome,
    incrementPassiveIncome,
    PassiveIncomeSourcesState
} from "../../../../state/PassiveIncomeSourcesSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import PassiveIncomeSource from "../../../../data/passive-income-modifiers/PassiveIncomeSource";

function MeditationGarden() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Meditation Garden'} text={'8 food/min per Berry Bush, 1 wood/min per tree, 30 gold/min per Gold Mine, 30 stone/min per Stone Outcropping'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={meditationGardenIcon} alt={'bazaar'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <UpgradeItemCounter icon={berryBushIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.MEDITATION_GARDEN_BUSH].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_BUSH))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_BUSH))}
                                iconHeight={'auto'}/>
            <UpgradeItemCounter icon={goldIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.MEDITATION_GARDEN_GOLD].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_GOLD))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_GOLD))}
                                iconHeight={'auto'}/>
            <UpgradeItemCounter icon={stoneIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.MEDITATION_GARDEN_STONE].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_STONE))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_STONE))}
                                iconHeight={'auto'}/>
            <UpgradeItemCounter icon={woodIcon}
                                count={passiveIncomeSources[PassiveIncomeSource.MEDITATION_GARDEN_TREE].count}
                                onIncrement={() => dispatch(incrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_TREE))}
                                onDecrement={() => dispatch(decrementPassiveIncome(PassiveIncomeSource.MEDITATION_GARDEN_TREE))}
                                iconHeight={'auto'}/>
        </div>
    );
}

export default MeditationGarden