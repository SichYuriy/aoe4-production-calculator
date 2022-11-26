import UpdatesModalLink from "./updates-modal-link/UpdatesModalLink";
import s from './footer.module.css';
import SocialMediaLinks from "./social-media-links/SocialMediaLinks";
import HowToUse from "./how-to-use/HowToUse";

function Footer() {
    return (
        <div className={s.footer}>
            <HowToUse/>
            <div className={s.separator}/>
            <UpdatesModalLink/>
            <div className={s.separator}/>
            <SocialMediaLinks/>
            <div className={s.separator}/>
            <a href='https://github.com/SichYuriy/aoe4-production-calculator' target='_blank' rel='noreferrer'><h3>GitHub</h3></a>
        </div>
    );
}

export default Footer;
