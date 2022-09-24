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
                        <li>[24 Sept 2022] Added streltsy unit</li>
                        <li>[24 Sept 2022] Added unit filter by selected civilization</li>
                        <li>[24 Sept 2022] Reduced civilizations dropdown size to contain more civs in the future</li>
                        <li>[24 Sept 2022] Added updates modal</li>
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UpdatesModalLink;
