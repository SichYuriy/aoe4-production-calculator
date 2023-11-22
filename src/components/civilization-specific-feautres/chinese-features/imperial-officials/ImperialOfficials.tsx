import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import imperialOfficialIcon from "../../../../icons/imperial-official.png";
import foodIcon from "../../../../icons/food.png";
import woodIcon from "../../../../icons/wood.png";
import goldIcon from "../../../../icons/gold.png";
import stoneIcon from "../../../../icons/stone.png";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {toggleGatheringRateModifier} from "../../../../state/GatheringRateModifiersSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import s from './imperial-officials.module.css'
import Tooltip from "../../../tooltip/Tooltip";

function ImperialOfficials() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);
    let foodOfficial = <UpgradeItem icon={foodIcon}
                                    selected={gatheringRateModifiers[GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.FOOD_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    let woodOfficial = <UpgradeItem icon={woodIcon}
                                    selected={gatheringRateModifiers[GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.WOOD_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    let goldOfficial = <UpgradeItem icon={goldIcon}
                                    selected={gatheringRateModifiers[GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.GOLD_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    let stoneOfficial = <UpgradeItem icon={stoneIcon}
                                    selected={gatheringRateModifiers[GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleGatheringRateModifier(GatheringRateModifierId.STONE_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    return (
        <div className={s.imperialOfficials}>
            <Tooltip header={'Imperial official'} text={'Villagers will drop off 20% more resources'}>
                <div><img className={s.imperialOfficialIcon} src={imperialOfficialIcon} alt={'imperial-official'}/></div>
            </Tooltip>
            <div>:</div>
            {foodOfficial}
            {woodOfficial}
            {goldOfficial}
            {stoneOfficial}
        </div>
    )
}

export default ImperialOfficials;
