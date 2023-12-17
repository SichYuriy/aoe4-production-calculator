import shared from "../../../shared.module.css";
import CisternGatheringRate from "./cistern-gathering-rate/CisternGatheringRate";

function ByzantinesFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <CisternGatheringRate/>
        </div>
    );
}

export default ByzantinesFeatures;