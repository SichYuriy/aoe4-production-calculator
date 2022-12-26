import BountyItem from "./bounty-item/BountyItem";
import s from './bounty.module.css';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";
import Tooltip from "../../../tooltip/Tooltip";

function Bounty() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    const allUpgradeIds = [GatheringRateModifierId.BOUNTY_100, GatheringRateModifierId.BOUNTY_250, GatheringRateModifierId.BOUNTY_500];
    const noneSelected = !allUpgradeIds.some(id => gatheringRateModifiers[id]);

    function select(idsToSelect: GatheringRateModifierId[]) {
        dispatch(unselectSelect({unselect: allUpgradeIds, select: idsToSelect}));
    }

    return (
        <Tooltip text={'Increases food gathering rate'} header={'Bounty'}>
            <div className={s.bounty}>
                <BountyItem label="0" selected={noneSelected} onClick={() => select([])}/>
                <BountyItem label="100" selected={gatheringRateModifiers[GatheringRateModifierId.BOUNTY_100]} onClick={() => select([GatheringRateModifierId.BOUNTY_100])}/>
                <BountyItem label="250" selected={gatheringRateModifiers[GatheringRateModifierId.BOUNTY_250]} onClick={() => select([GatheringRateModifierId.BOUNTY_250])}/>
                <BountyItem label="500" selected={gatheringRateModifiers[GatheringRateModifierId.BOUNTY_500]} onClick={() => select([GatheringRateModifierId.BOUNTY_500])}/>
            </div>
        </Tooltip>
    );
}

export default Bounty;
