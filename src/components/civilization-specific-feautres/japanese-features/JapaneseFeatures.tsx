import shared from "../../../shared.module.css";
import JapaneseTownCenters from "./japanese-town-centers/JapaneseTownCenters";

function JapaneseFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Fishing Boats are 30% cheaper</div>
            <JapaneseTownCenters/>
        </div>
    );
}

export default JapaneseFeatures;