import shared from "../../../shared.module.css";
import {KnightsTemplarAgeSelector} from "./knight-templar-age-selector/KnightsTemplarAgeSelector";
import {KingdomOfFrance} from "./kingdom-of-france/KingdomOfFrance";
import Pilgrims from "./pilgrims/Pilgrims";
import RepublicOfGenoa from "./republic-of-genoa/RepublicOfGenoa";

function KnightsTemplarFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Siege Engines cost -25% less wood</div>
            <div>Wood gathered is produced as additional food</div>
            <div className={shared.upgradesRow}>
                <KnightsTemplarAgeSelector/>
            </div>
            <div className={shared.upgradesRow}>
                <Pilgrims/>
            </div>
            <div className={shared.upgradesRow}>
                <KingdomOfFrance/>
                <RepublicOfGenoa/>
            </div>
        </div>
    )
}

export default KnightsTemplarFeatures;