import UpdatesModalLink from "./updates-modal-link/UpdatesModalLink";
import s from './footer.module.css';

function Footer() {
    return (
        <div className={s.footer}>
            <UpdatesModalLink/>
        </div>
    );
}

export default Footer;
