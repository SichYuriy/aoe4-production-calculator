import shared from "../../../../../shared.module.css";
import yataiIcon from "../../../../../icons/yatai-1.png";
import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {decrementPassiveIncome, incrementPassiveIncome, PassiveIncomeSourcesState} from "../../../../../state/PassiveIncomeSourcesSlice";
import UpgradeItemCounter from "../../../../upgrade-item-counter/UpgradeItemCounter";
import boarIcon from "../../../../../icons/boar.webp";
import deerIcon from "../../../../../icons/deer.png";
import berryIcon from "../../../../../icons/berrybush.png";
import sheepIcon from "../../../../../icons/sheep.png";
import farmIcon from "../../../../../icons/farm.png";
import PassiveIncomeSource from "../../../../../data/passive-income-modifiers/PassiveIncomeSource";

function YataiSelector() {
    const dispatch = useAppDispatch();
    const passiveIncomeSources: PassiveIncomeSourcesState = useAppSelector((rootState) => rootState.passiveIncomeSources);

    function yataiCounter(icon: string, passiveIncomeSource: PassiveIncomeSource) {
        return <UpgradeItemCounter icon={icon}
                                   count={passiveIncomeSources[passiveIncomeSource].count}
                                   onIncrement={() => dispatch(incrementPassiveIncome(passiveIncomeSource))}
                                   onDecrement={() => dispatch(decrementPassiveIncome(passiveIncomeSource))}/>;
    }

    const boarYatai = yataiCounter(boarIcon, PassiveIncomeSource.BOAR_YATAI);
    const deerYatai = yataiCounter(deerIcon, PassiveIncomeSource.DEER_YATAI);
    const berryYatai = yataiCounter(berryIcon, PassiveIncomeSource.BERRY_YATAI);
    const sheepYatai = yataiCounter(sheepIcon, PassiveIncomeSource.SHEEP_YATAI);
    const farmYatai = yataiCounter(farmIcon, PassiveIncomeSource.FARM_YATAI);

    return (
        <div className={shared.civilizationSpecificFeature}>
            <div><img className={shared.civilizationSpecificFeatureIcon} src={yataiIcon}
                      alt={'yatai'}/></div>
            <div>:</div>
            <div className={shared.items}>
                {boarYatai}
                {deerYatai}
                {berryYatai}
                {sheepYatai}
                {farmYatai}
            </div>
        </div>
    );
}



export default YataiSelector;