import shared from "../../../shared.module.css";
import {KnightsTemplarAgeSelector} from "./knight-templar-age-selector/KnightsTemplarAgeSelector";

function KnightsTemplarFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <KnightsTemplarAgeSelector/>
        </div>
    )
}

export default KnightsTemplarFeatures;