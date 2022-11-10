import EnglishAgeSelect from "./english-age-select/EnglishAgeSelect";
import EnglishDocks from "./english-docks/EnglishDocks";
import s from "./english-features.module.css"
import EnglishMma from "./english-mma/EnglishMma";
import WynguardPalace from "./wynguard-palace/WynguardPalace";
import Enclosures from "./enclosures/Enclosures";

function EnglishFeatures() {
    return (
        <div className={s.englishFeatures}>
            <EnglishDocks/>
            <EnglishMma/>
            <EnglishAgeSelect/>
            <WynguardPalace/>
            <Enclosures/>
        </div>
    )
}

export default EnglishFeatures;
