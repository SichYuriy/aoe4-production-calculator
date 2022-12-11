import {useState} from "react";
import {Modal} from "react-bootstrap";
import s from './updates-modal-link.module.css'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function UpdatesModalLink() {
    const [show, setShow] = useState(false);

    return (
        <>
            <h3 onClick={() => setShow(true)} className={s.modalLink}>Updates (11 Dec 2022)</h3>

            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Body bsPrefix={s.modalBody}>
                    <div className={s.header}>
                        <h3>Updates</h3>
                        <div onClick={() => setShow(false)} className={s.closeButton}><h3><FontAwesomeIcon icon={faClose}/></h3></div>
                    </div>

                    <hr/>
                    <ul>
                        <li><span>[11 Dec 2022]</span> Fix Mongols Silver Tree. It does not affect other markets any more</li>
                        <li><span>[10 Dec 2022]</span> Fix camel rider production time: 22 sec {`->`} 35 sec</li>
                        <li><span>[09 Dec 2022] [Patch 5.1.148.1]</span> Song dynasty villager production time: -35% {`->`} -25%, cattle cost: 75 {`->`} 90 gold</li>
                        <li><span>[05 Dec 2022]</span> Fix trader cost: 75 wood, 75 gold, 35 sec {`->`} 60 wood, 60 gold, 25 sec</li>
                        <li><span>[04 Dec 2022]</span> Food gathering rate fix: seep 38.3 {`->`} 37.05, farm 36.25 {`->`} 36.718. Wheelbarrow farms +1% {`->`} +3.2%. Wheelbarrow sheep +1% {`->`} +3%</li>
                        <li><span>[01 Dec 2022] [Patch 5.1.148]</span> Cattle cost: 100 {`->`} 75 gold, pit mine gold generation: 30 {`->`} 35 gold/min</li>
                        <li><span>[26 Nov 2022]</span> Add ships</li>
                        <li><span>[25 Nov 2022]</span> Add Delhi scholar unit, sanctity, dome of faith</li>
                        <li><span>[25 Nov 2022]</span> Add tithe barn</li>
                        <li><span>[14 Nov 2022]</span> Add relics and sacred sites</li>
                        <li><span>[11 Nov 2022]</span> Add English farmers count</li>
                        <li><span>[10 Nov 2022]</span> Add English enclosures</li>
                        <li><span>[10 Nov 2022]</span> Add English Wynguard Palace</li>
                        <li><span>[09 Nov 2022]</span> Add Malians Farimba Garrison</li>
                        <li><span>[07 Nov 2022]</span> Add Malians Fulani Corral</li>
                        <li><span>[07 Nov 2022]</span> Add Malians cattle ranch</li>
                        <li><span>[07 Nov 2022]</span> Add Malians pit mine influence</li>
                        <li><span>[07 Nov 2022]</span> Add Malians cattle unit</li>
                        <li><span>[07 Nov 2022]</span> Add Malians mansa query</li>
                        <li><span>[06 Nov 2022]</span> Add ram unit with production time 12s</li>
                        <li><span>[06 Nov 2022]</span> Temporary remove all ships except fishing</li>
                        <li><span>[06 Nov 2022]</span> Update fishing boat cost 60 {'->'} 75</li>
                        <li><span>[06 Nov 2022]</span> Update janissary production time 28s {'->'} 24s</li>
                        <li><span>[06 Nov 2022]</span> Add ottomans features: Twin minaret medrese, anatolian hills, blacksmith influence, sultanhani trade network</li>
                        <li><span>[25 Oct 2022]</span> Fix units data: zhuge nu, fire lancer, imperial official</li>
                        <li><span>[13 Oct 2022]</span> Fix icons for Ottomans and Malians units</li>
                        <li><span>[02 Oct 2022]</span> English update: add ships discount, mma production speed, galley unit, hulk unit</li>
                        <li><span>[26 Sept 2022]</span> Add new civs beta - only units with wrong icons for now</li>
                        <li><span>[26 Sept 2022]</span> Scout cost fix. Before - 60 food, after - 70 food</li>
                        <li><span>[25 Sept 2022]</span> Show only common units without civilization selected</li>
                        <li><span>[25 Sept 2022]</span> Fix: longbowman cost (40, 50) differs from archer cost (30, 50)</li>
                        <li><span>[25 Sept 2022]</span> Added units: arbaletrier, knight, landsknecht, longbowman, royal knight, tower war elephant, war elephant, palace guard</li>
                        <li><span>[24 Sept 2022]</span> Added streltsy unit</li>
                        <li><span>[24 Sept 2022]</span> Added unit filter by selected civilization</li>
                        <li><span>[24 Sept 2022]</span> Reduced civilizations dropdown size to contain more civs in the future</li>
                        <li><span>[24 Sept 2022]</span> Added updates modal</li>
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdatesModalLink;
