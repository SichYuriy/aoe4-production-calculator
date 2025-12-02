import s from './how-to-use.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";

function HowToUse() {
    return (
        <a className={s.link}
           href={'https://drive.google.com/file/d/10mSPkA32wiB06cY6onTlRdTuGTHZpqqF/view?usp=share_link'}
           target={'_blank'} rel='noreferrer'><h3>How to use? <FontAwesomeIcon icon={faExternalLink}/></h3></a>
    );
}

export default HowToUse;
