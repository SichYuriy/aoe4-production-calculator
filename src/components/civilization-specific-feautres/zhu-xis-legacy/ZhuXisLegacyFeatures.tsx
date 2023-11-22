import shared from "../../../shared.module.css";
import ChineseDocks from "../chinese-features/chinese-docks/ChineseDocks";

function ZhuXisLegacyFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <ChineseDocks/>
        </div>
    );
}

export default ZhuXisLegacyFeatures;