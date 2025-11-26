import shared from "../../../shared.module.css";
import TughlaqEconomyUpgrades from "./tughlaq-economy-upgrades/TughlaqEconomyUpgrades";

function TughlaqDynastyFeatures() {
    return <div className={shared.civilizationSpecificFeatures}>
        <div>Resource drop off +5%</div>
        <TughlaqEconomyUpgrades/>
    </div>;
}

export default TughlaqDynastyFeatures;
