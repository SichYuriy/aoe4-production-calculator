import shared from "../../../shared.module.css";
import Yatai from "./yatai/Yatai";

function SengokuDaimyoFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Fishing Boats are 25% cheaper</div>
            <Yatai/>
        </div>
    );
}

export default SengokuDaimyoFeatures;
