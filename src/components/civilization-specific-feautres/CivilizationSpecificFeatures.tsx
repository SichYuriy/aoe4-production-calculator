import GlobalCivilizationSelect from "./global-cilivization-select/GlobalCivilizationSelect";
import {useAppSelector} from "../../hooks";
import CivilizationsEnum from "../../data/CivilizationsEnum";
import FrenchFeatures from "./french-features/FrenchFeatures";
import EnglishFeatures from "./english-featrues/EnglishFeatures";
import ChineseFeatures from "./chinese-features/ChineseFeatures";
import HreFeatures from "./hre-features/HreFeatures";
import MongolsFeatures from "./mongols-features/MongolsFeatures";
import RusFeatures from "./rus-features/RusFeatures";
import DelhiFeatures from "./delhi-features/DelhiFeatures";
import AbbasidFeatures from "./abbasid-features/AbbasidFeatures";
import shared from '../../shared.module.css'
import OttomansFeatures from "./ottomans-features/OttomansFeatures";
import MaliansFeatures from "./malians-features/MaliansFeatures";
import JeanneFeatures from "./jeanne-features/JeanneFeatures";
import DragonOrderFeatures from "./dragon-order-features/DragonOrderFeatures";
import ZhuXisLegacyFeatures from "./zhu-xis-legacy/ZhuXisLegacyFeatures";
import AyyubidsFeatures from "./ayyubids-features/AyyubidsFeatures";
import JapaneseFeatures from "./japanese-features/JapaneseFeatures";
import ByzantinesFeatures from "./byzantines-features/ByzantinesFeatures";

function CivilizationSpecificFeatures() {
    const selectedCivilization: CivilizationsEnum = useAppSelector((rootState) => rootState.civilization.selected);
    let civilizationSpecificComponents: Map<CivilizationsEnum, any> = new Map<CivilizationsEnum, any>([
        [CivilizationsEnum.RANDOM, <div/>],
        [CivilizationsEnum.ABBASID, <AbbasidFeatures/>],
        [CivilizationsEnum.CHINESE, <ChineseFeatures/>],
        [CivilizationsEnum.HRE, <HreFeatures/>],
        [CivilizationsEnum.ENGLAND, <EnglishFeatures/>],
        [CivilizationsEnum.DELHI, <DelhiFeatures/>],
        [CivilizationsEnum.FRENCH, <FrenchFeatures/>],
        [CivilizationsEnum.MONGOLS, <MongolsFeatures/>],
        [CivilizationsEnum.RUS, <RusFeatures/>],
        [CivilizationsEnum.OTTOMANS, <OttomansFeatures/>],
        [CivilizationsEnum.MALIANS, <MaliansFeatures/>],
        [CivilizationsEnum.JEANNE_D_ARC, <JeanneFeatures/>],
        [CivilizationsEnum.DRAGON_ORDER, <DragonOrderFeatures/>],
        [CivilizationsEnum.ZHU_XIS_LEGACY, <ZhuXisLegacyFeatures/>],
        [CivilizationsEnum.AYYUBIDS, <AyyubidsFeatures/>],
        [CivilizationsEnum.JAPANESE, <JapaneseFeatures/>],
        [CivilizationsEnum.BYZANTINES, <ByzantinesFeatures/>]
    ]);
    let components: any[] = [];
    civilizationSpecificComponents.forEach((component, civilization) => {
        components.push(
            <div key={civilization} className={civilization === selectedCivilization ? '' : shared.hidden}>
                {component}
            </div>
        )
    });

    return (
        <div>
            <div><h3>Civilization:</h3></div>
            <GlobalCivilizationSelect/>
            {components}
        </div>
    )
}

export default CivilizationSpecificFeatures;
