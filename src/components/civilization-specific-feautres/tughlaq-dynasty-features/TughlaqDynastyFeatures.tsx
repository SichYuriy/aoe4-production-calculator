import shared from "../../../shared.module.css";
import TughlaqEconomyUpgrades from "./tughlaq-economy-upgrades/TughlaqEconomyUpgrades";
import MuslimBerries from "../shared-features/muslim-berries/MuslimBerries";
import TughlaqDomeOfFaith from "./tughlaq-dome-of-faith/TughlaqDomeOfFaith";

function TughlaqDynastyFeatures() {
    return <div className={shared.civilizationSpecificFeatures}>
        <div>Resource drop off +5%</div>
        <MuslimBerries/>
        <TughlaqEconomyUpgrades/>
        <TughlaqDomeOfFaith/>
    </div>;
}

export default TughlaqDynastyFeatures;
