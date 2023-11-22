import s from './song-dynasty.module.css'
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {toggleProductionSpeedModifier} from "../../../../state/ProducationSpeedModifiersSlice";

function SongDynasty() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    const selected = productionSpeedModifiers[ProductionSpeedModifierId.SONG_DYNASTY];
    return (
        <div className={`${s.songDynasty} ${selected ? s.selectedDynasty : ''}`}
             onClick={() => dispatch(toggleProductionSpeedModifier(ProductionSpeedModifierId.SONG_DYNASTY))}>
            Song Dynasty
        </div>
    );
}

export default SongDynasty;
