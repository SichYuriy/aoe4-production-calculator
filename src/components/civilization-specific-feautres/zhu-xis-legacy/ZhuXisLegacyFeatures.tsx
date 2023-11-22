import shared from "../../../shared.module.css";
import ChineseDocks from "../chinese-features/chinese-docks/ChineseDocks";
import ImperialOfficials from "../chinese-features/imperial-officials/ImperialOfficials";

function ZhuXisLegacyFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <ChineseDocks/>
            <ImperialOfficials/>
        </div>
    );
}

export default ZhuXisLegacyFeatures;