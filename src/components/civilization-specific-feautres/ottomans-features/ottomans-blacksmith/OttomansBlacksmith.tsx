import s from './ottomans-blacksmith.module.css';
import blacksmithIcon from "../../../../icons/blacksmith.png";
import cancelIcon from '../../../../icons/cancel.png';
import istanbulObservatoryIcon from '../../../../icons/instanbul-observatory.png';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {
    ProductionSpeedModifiersState,
    unselectSelectProductionSpeedModifiers
} from "../../../../state/ProducationSpeedModifiersSlice";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";

const MODIFIERS = [
    ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_2,
    ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_3,
    ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_4,
    ProductionSpeedModifierId.ISTANBUL_OBSERVATORY,
]

function OttomansBlacksmith() {
    const dispatch = useAppDispatch();
    const modifierState: ProductionSpeedModifiersState = useAppSelector((rootState) => rootState.productionSpeedModifiers);

    let noneSelected = !MODIFIERS.some(id => modifierState[id]);

    function unselectAll() {
        dispatch(unselectSelectProductionSpeedModifiers({
            unselect: MODIFIERS,
            select: []
        }));
    }

    function select(modifierId: string) {
        dispatch(unselectSelectProductionSpeedModifiers({
            unselect: MODIFIERS,
            select: [modifierId]
        }));
    }

    return (
        <div className={s.ottomansBlacksmith}>
            <div><img className={s.blacksmithIcon} src={blacksmithIcon} alt={'blacksmith'}/></div>
            <div>:</div>
            <div className={s.items}>
                <label>
                    <input type={'radio'} name={'ottomans-blacksmith'} onChange={unselectAll} checked={noneSelected}/>
                    <div><img src={cancelIcon} alt={'cancel'}/></div>
                </label>
                <label>
                    <input type={'radio'} name={'ottomans-blacksmith'} onChange={() => select(ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_2)} checked={modifierState[ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_2]}/>
                    <div><div className={s.ageIconDiv}>II</div></div>
                </label>
                <label>
                    <input type={'radio'} name={'ottomans-blacksmith'} onChange={() => select(ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_3)} checked={modifierState[ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_3]}/>
                    <div><div className={s.ageIconDiv}>III</div></div>
                </label>
                <label>
                    <input type={'radio'} name={'ottomans-blacksmith'} onChange={() => select(ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_4)} checked={modifierState[ProductionSpeedModifierId.OTTOMANS_BLACKSMITH_AGE_4]}/>
                    <div><div className={s.ageIconDiv}>IV</div></div>
                </label>
                <label>
                    <input type={'radio'} name={'ottomans-blacksmith'} onChange={() => select(ProductionSpeedModifierId.ISTANBUL_OBSERVATORY)} checked={modifierState[ProductionSpeedModifierId.ISTANBUL_OBSERVATORY]}/>
                    <div className={s.item}><img src={istanbulObservatoryIcon} alt={'golden-age'}/></div>
                </label>
            </div>
        </div>
    );
}

export default OttomansBlacksmith;
