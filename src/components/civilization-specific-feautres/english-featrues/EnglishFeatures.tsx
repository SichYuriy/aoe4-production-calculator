import EnglishAgeSelect from "./english-age-select/EnglishAgeSelect";
import EnglishDocks from "./english-docks/EnglishDocks";
import s from "./english-features.module.css"

function EnglishFeatures() {
    return (
        <div className={s.englishFeatures}>
            <EnglishDocks/>
            <EnglishAgeSelect/>
        </div>
    )
}

export default EnglishFeatures;
