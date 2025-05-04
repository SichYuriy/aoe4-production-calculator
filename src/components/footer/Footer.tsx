import UpdatesModalLink from "./updates-modal-link/UpdatesModalLink";
import s from './footer.module.css';
import SocialMediaLinks from "./social-media-links/SocialMediaLinks";
import HowToUse from "./how-to-use/HowToUse";
import React from "react";

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
            <div className={s.separator}/>
            <a className={s.buymeacoffee} href="https://www.buymeacoffee.com/Aoe4" target={'_blank'} rel="noreferrer">
                <img alt="buy me a coffee"
                     src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Aoe4&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"/>
            </a>
        </div>
    );
}

export default Footer;
