import GlobalCivilizationSelect from "./global-cilivization-select/GlobalCivilizationSelect";
import {useAppSelector} from "../../hooks";
import CivilizationsEnum from "../../data/CivilizationsEnum";
import FrenchFeatures from "./french-features/FrenchFeatures";

function CivilizationSpecificFeatures() {
    const civilization: CivilizationsEnum = useAppSelector((rootState) => rootState.civilization.selected);
    let civilizationSpecificComponents = {
        [CivilizationsEnum.RANDOM]: () => <div/>,
        [CivilizationsEnum.ABBASID]: () => <div/>,
        [CivilizationsEnum.CHINESE]: () => <div/>,
        [CivilizationsEnum.HRE]: () => <div/>,
        [CivilizationsEnum.ENGLAND]: () => <div/>,
        [CivilizationsEnum.DELHI]: () => <div/>,
        [CivilizationsEnum.FRENCH]: () => <FrenchFeatures/>,
        [CivilizationsEnum.MONGOLS]: () => <div/>,
        [CivilizationsEnum.RUS]: () => <div/>,
    }

    return (
        <div>
            <div><h3>Civilization:</h3></div>
            <GlobalCivilizationSelect/>
            {civilizationSpecificComponents[civilization]()}
        </div>
    )
}

export default CivilizationSpecificFeatures;
