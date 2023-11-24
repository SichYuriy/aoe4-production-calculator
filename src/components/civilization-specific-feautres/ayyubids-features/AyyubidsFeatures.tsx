import MuslimBerries from "../shared-features/muslim-berries/MuslimBerries";
import TradersDiscount from "../abbasid-features/traders-discount/TradersDiscount";
import AyyubidsGoldenAge from "./ayyubids-golden-age/AyyubidsGoldenAge";
import Bazaar from "./bazaar/Bazaar";
import shared from "../../../shared.module.css";

function AyyubidsFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>

            <MuslimBerries/>
            <TradersDiscount/>
            <div className={shared.upgradesRow}>
                <AyyubidsGoldenAge/>
            </div>
            <div className={shared.upgradesRow}>
                <Bazaar/>
            </div>
        </div>
    )
}

export default AyyubidsFeatures;