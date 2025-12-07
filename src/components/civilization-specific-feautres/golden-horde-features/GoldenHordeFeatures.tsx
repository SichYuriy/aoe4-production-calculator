import shared from "../../../shared.module.css";
import Edicts from "./edicts/Edicts";

function GoldenHordeFeatures() {
    return (<div className={shared.civilizationSpecificFeatures}>
        <Edicts/>
    </div>);
}

export default GoldenHordeFeatures;
