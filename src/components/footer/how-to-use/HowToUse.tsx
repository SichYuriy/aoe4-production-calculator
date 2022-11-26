import s from './how-to-use.module.css';

function HowToUse() {
    return (
        <a className={s.link}
           href={'https://drive.google.com/file/d/10mSPkA32wiB06cY6onTlRdTuGTHZpqqF/view?usp=share_link'}
           target={'_blank'} rel='noreferrer'><h3>How to use</h3></a>
    );
}

export default HowToUse;
