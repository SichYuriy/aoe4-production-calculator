import UpdatesModalLink from "./updates-modal-link/UpdatesModalLink";
import s from './footer.module.css';
import SocialMediaLinks from "./social-media-links/SocialMediaLinks";

function Footer() {
    return (
        <div className={s.footer}>
            <UpdatesModalLink/>
            <SocialMediaLinks/>
        </div>
    );
}

export default Footer;
