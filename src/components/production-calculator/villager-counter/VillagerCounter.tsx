import s from './villager-counter.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPerson} from '@fortawesome/free-solid-svg-icons'

function VillagerCounter(props: { count: number }) {
    return (
        <div className={`${s.villagerCounter} ${props.count > 0 ? s.villagerCounterBox : s.villagerCounterZeroBox}`}>
            <div>
                <FontAwesomeIcon icon={faPerson} className={s.villagerIcon}/>
            </div>
            <div className={s.villagersCount}><span>{props.count}</span></div>
        </div>
    );
}

export default VillagerCounter;
