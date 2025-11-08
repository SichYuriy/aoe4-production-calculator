import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import icon from '../../../../icons/the-silver-tree.png'
import {decrement, increment, UnitsState} from "../../../../state/UnitsSlice";

function SilverTree() {
    const dispatch = useAppDispatch();
    const units: UnitsState = useAppSelector((rootState) => rootState.units);

    return (
        <UpgradeItem icon={icon}
                     selected={units['SILVER_TREE_TRADER'] > 0}
                     onClick={units['SILVER_TREE_TRADER'] > 0 ? () => dispatch(decrement('SILVER_TREE_TRADER')) : () => dispatch(increment('SILVER_TREE_TRADER'))}
                     tooltip={{header: 'Silver Tree', text: 'Produces trader with 50% gold discount'}}/>
    );
}

export default SilverTree;
