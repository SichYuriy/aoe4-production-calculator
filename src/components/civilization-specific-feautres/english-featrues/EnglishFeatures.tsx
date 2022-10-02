import EnglishAgeSelect from "./english-age-select/EnglishAgeSelect";
import EnglishDocks from "./english-docks/EnglishDocks";
import s from "./english-features.module.css"
import EnglishMma from "./english-mma/EnglishMma";

function EnglishFeatures() {
    return (
        <div className={s.englishFeatures}>
            <EnglishDocks/>
            <EnglishMma/>
            <EnglishAgeSelect/>
        </div>
    )
}

export default EnglishFeatures;
