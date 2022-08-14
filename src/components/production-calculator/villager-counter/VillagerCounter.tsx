import './villager-counter.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPerson} from '@fortawesome/free-solid-svg-icons'

function VillagerCounter(props: { count: number }) {
    return (
        <div className={'villager-counter' + (props.count > 0 ? ' villager-counter-box' : ' villager-counter-zero-box')}>
            <div>
                <FontAwesomeIcon icon={faPerson} className={'villager-icon'}/>
            </div>
            <div className={'villagers-count'}><span>{props.count}</span></div>
        </div>
    );
}

export default VillagerCounter;
