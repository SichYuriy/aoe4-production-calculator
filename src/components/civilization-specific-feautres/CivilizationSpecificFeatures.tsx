import CivilizationsDropdown from "./civiliztions-dropdown/CivilizationsDropdown";
import CivilizationsEnum from "../../data/CivilizationsEnum";

function CivilizationSpecificFeatures() {
    return (
        <div>
            <div><h3>Civilization:</h3></div>
            <CivilizationsDropdown selected={CivilizationsEnum.RANDOM} onSelect={console.log}/>
        </div>
    )
}

export default CivilizationSpecificFeatures;
