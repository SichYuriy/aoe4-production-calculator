import shared from "../../../shared.module.css";
import JapaneseTownCenters from "./japanese-town-centers/JapaneseTownCenters";
import FloatingGate from "./floating-gate/FloatingGate";

function JapaneseFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <div>Fishing Boats are 25% cheaper</div>
            <JapaneseTownCenters/>
            <FloatingGate/>
        </div>
    );
}

export default JapaneseFeatures;