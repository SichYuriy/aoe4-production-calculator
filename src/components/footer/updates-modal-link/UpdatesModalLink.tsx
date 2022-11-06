import {useState} from "react";
import {Modal} from "react-bootstrap";
import s from './updates-modal-link.module.css'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function UpdatesModalLink() {
    const [show, setShow] = useState(false);

    return (
        <>
            <h3 onClick={() => setShow(true)} className={s.modalLink}>Updates</h3>

            <Modal show={show} onHide={() => setShow(false)} size="lg">
                <Modal.Body bsPrefix={s.modalBody}>
                    <div className={s.header}>
                        <h3>Updates:</h3>
                        <div onClick={() => setShow(false)} className={s.closeButton}><h3><FontAwesomeIcon icon={faClose}/></h3></div>
                    </div>

                    <hr/>
                    <ul>
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
