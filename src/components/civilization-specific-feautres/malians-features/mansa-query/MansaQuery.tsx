import s from './mansa-query.module.css';
import mansaQueryIcon from "../../../../icons/mansa-query.png";
import cancelIcon from "../../../../icons/cancel.png";
import goldIcon from "../../../../icons/gold.png";
import stoneIcon from "../../../../icons/stone.png";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {PassiveIncomeModifiersState, unselectSelectPassiveIncome} from "../../../../state/PassiveIncomeModifiersSlice";
import PassiveIncomeModifierId from "../../../../data/passive-income-modifiers/PassiveIncomeModifierId";

const MODIFIERS = [PassiveIncomeModifierId.MANSA_QUERY_GOLD, PassiveIncomeModifierId.MANSA_QUERY_STONE];

function MansaQuery() {
    const dispatch = useAppDispatch();
    const passiveIncomeModifiers: PassiveIncomeModifiersState = useAppSelector((rootState) => rootState.passiveIncomeModifiers);

    let noneSelected = !MODIFIERS.some(id => passiveIncomeModifiers[id].count > 0);

    function unselectAll() {
        dispatch(unselectSelectPassiveIncome({unselect: MODIFIERS, select: []}));
    }

    function select(modifierId: string) {
        dispatch(unselectSelectPassiveIncome({unselect: MODIFIERS, select: [modifierId]}));
    }

    return (
        <div className={s.mansaQuery}>
            <div><img className={s.mansaQueryIcon} src={mansaQueryIcon} alt={'mansa-query'}/></div>
            <div>:</div>
            <div className={s.items}>
                <label>
                    <input type={'radio'} name={'mansa-query'} onChange={unselectAll} checked={noneSelected}/>
                    <div className={s.item}><img src={cancelIcon} alt={'cancel'}/></div>
                </label>
                <label>
                    <input type={'radio'} name={'mansa-query'} onChange={() => select(PassiveIncomeModifierId.MANSA_QUERY_GOLD)} checked={passiveIncomeModifiers[PassiveIncomeModifierId.MANSA_QUERY_GOLD].count > 0}/>
                    <div className={s.item}><img src={goldIcon} alt={'cancel'}/></div>
                </label>
                <label>
                    <input type={'radio'} name={'mansa-query'} onChange={() => select(PassiveIncomeModifierId.MANSA_QUERY_STONE)} checked={passiveIncomeModifiers[PassiveIncomeModifierId.MANSA_QUERY_STONE].count > 0}/>
                    <div className={s.item}><img src={stoneIcon} alt={'cancel'}/></div>
                </label>
            </div>
        </div>
    );
}

export default MansaQuery;
