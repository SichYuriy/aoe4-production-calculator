import GlobalCivilizationSelect from "./global-cilivization-select/GlobalCivilizationSelect";
import {useAppSelector} from "../../hooks";
import CivilizationsEnum from "../../data/CivilizationsEnum";
import FrenchFeatures from "./french-features/FrenchFeatures";
import EnglishFeatures from "./english-featrues/EnglishFeatures";
import ChineseFeatures from "./chinese-features/ChineseFeatures";
import HreFeatures from "./hre-features/HreFeatures";
import MongolsFeatures from "./mongols-features/MongolsFeatures";

function CivilizationSpecificFeatures() {
    const civilization: CivilizationsEnum = useAppSelector((rootState) => rootState.civilization.selected);
    let civilizationSpecificComponents = {
        [CivilizationsEnum.RANDOM]: () => <div/>,
        [CivilizationsEnum.ABBASID]: () => <div/>,
        [CivilizationsEnum.CHINESE]: () => <ChineseFeatures/>,
        [CivilizationsEnum.HRE]: () => <HreFeatures/>,
        [CivilizationsEnum.ENGLAND]: () => <EnglishFeatures/>,
        [CivilizationsEnum.DELHI]: () => <div/>,
        [CivilizationsEnum.FRENCH]: () => <FrenchFeatures/>,
        [CivilizationsEnum.MONGOLS]: () => <MongolsFeatures/>,
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
