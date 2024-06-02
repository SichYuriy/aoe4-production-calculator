import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import imperialOfficialIcon from "../../../../icons/imperial-official.png";
import foodIcon from "../../../../icons/food.png";
import woodIcon from "../../../../icons/wood.png";
import goldIcon from "../../../../icons/gold.png";
import stoneIcon from "../../../../icons/stone.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import s from './imperial-officials.module.css'
import Tooltip from "../../../tooltip/Tooltip";
import {toggleResourceDropOffModifier} from "../../../../state/ResourceDropOffModifiersSlice";
import ResourceDropOffModifierId from "../../../../data/resource-drop-off-modifiers/ResourceDropOffModifierId";

function ImperialOfficials() {
    const dispatch = useAppDispatch();
    const resourceDropOffModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.resourceDropOffModifiers);
    let foodOfficial = <UpgradeItem icon={foodIcon}
                                    selected={resourceDropOffModifiers[ResourceDropOffModifierId.FOOD_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.FOOD_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    let woodOfficial = <UpgradeItem icon={woodIcon}
                                    selected={resourceDropOffModifiers[ResourceDropOffModifierId.WOOD_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.WOOD_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    let goldOfficial = <UpgradeItem icon={goldIcon}
                                    selected={resourceDropOffModifiers[ResourceDropOffModifierId.GOLD_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.GOLD_IMPERIAL_OFFICIAL))}
                                    iconHeight={'auto'}/>
    let stoneOfficial = <UpgradeItem icon={stoneIcon}
                                    selected={resourceDropOffModifiers[ResourceDropOffModifierId.STONE_IMPERIAL_OFFICIAL]}
                                    onClick={() => dispatch(toggleResourceDropOffModifier(ResourceDropOffModifierId.STONE_IMPERIAL_OFFICIAL))}
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
