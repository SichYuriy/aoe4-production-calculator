import shared from "../../../shared.module.css";
import {KnightsTemplarAgeSelector} from "./knight-templar-age-selector/KnightsTemplarAgeSelector";

function KnightsTemplarFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Siege Engines cost -25% less wood</div>
            <div>Wood gathered is produced as additional food</div>
            <KnightsTemplarAgeSelector/>
        </div>
    )
}

export default KnightsTemplarFeatures;