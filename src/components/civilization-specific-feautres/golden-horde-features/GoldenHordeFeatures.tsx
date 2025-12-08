import shared from "../../../shared.module.css";
import Edicts from "./edicts/Edicts";
import GoldenHordeFoodUpgrades from "./golden-horde-food-upgrades/GoldenHordeFoodUpgrades";

function GoldenHordeFeatures() {
    return (<div className={shared.civilizationSpecificFeatures}>
        <Edicts/>
        <GoldenHordeFoodUpgrades/>
    </div>);
}

export default GoldenHordeFeatures;
