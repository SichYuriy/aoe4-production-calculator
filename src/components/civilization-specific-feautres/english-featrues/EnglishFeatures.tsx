import EnglishAgeSelect from "./english-age-select/EnglishAgeSelect";
import EnglishDocks from "./english-docks/EnglishDocks";
import shared from "../../../shared.module.css"
import EnglishMma from "./english-mma/EnglishMma";
import WynguardPalace from "./wynguard-palace/WynguardPalace";
import Enclosures from "./enclosures/Enclosures";
import WhiteTower from "./white-tower/WhiteTower";
import CouncilHall from "./council-hall/CouncilHall";

function EnglishFeatures() {
    return (
        <div className={shared.civilizationSpecificFeatures}>
            <EnglishDocks/>
            <EnglishMma/>
            <div className={shared.upgradesRow}>
                <EnglishAgeSelect/>
            </div>
            <WhiteTower/>
            <WynguardPalace/>
            <div className={shared.upgradesRow}>
                <CouncilHall/>
                <Enclosures/>
            </div>
        </div>
    )
}

export default EnglishFeatures;
