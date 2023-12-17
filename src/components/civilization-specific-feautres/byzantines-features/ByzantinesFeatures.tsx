import shared from "../../../shared.module.css";
import CisternGatheringRate from "./cistern-gathering-rate/CisternGatheringRate";
import Conscriptio from "./conscriptio/Conscriptio";

function ByzantinesFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <CisternGatheringRate/>
            <Conscriptio/>
        </div>
    );
}

export default ByzantinesFeatures;