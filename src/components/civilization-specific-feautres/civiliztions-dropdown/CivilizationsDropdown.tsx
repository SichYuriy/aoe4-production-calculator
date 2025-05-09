import {Dropdown} from "react-bootstrap";
import randomFlagIcon from "../../../icons/flag_random.jpg";
import knightsTemplarIcon from "../../../icons/flag_knights_templar.png";
import houseOfLancasterIcon from "../../../icons/flag_house_of_lancaster.png";
import abbasidFlagIcon from "../../../icons/flag_abbasid.png";
import chineseFlagIcon from "../../../icons/flag_chinese.png";
import hreFlagIcon from "../../../icons/flag_hre.png";
import englandFlagIcon from "../../../icons/flag_english.png";
import delhiFlagIcon from "../../../icons/flag_delhi.png";
import frenchFlagIcon from "../../../icons/flag_french.png";
import mongolsFlagIcon from "../../../icons/flag_mongol.png";
import rusFlagIcon from "../../../icons/flag_rus.png";
import ottomansFlagIcon from "../../../icons/flag_ottomans.png";
import maliansFlagIcon from "../../../icons/flag_malians.png";
import ayyubidsFlagIcon from "../../../icons/flag_ayyubids.png";
import byzantinesFlagIcon from "../../../icons/flag_byzantines.png";
import japaneseFlagIcon from "../../../icons/flag_japanese.png";
import jeanneFlagIcon from "../../../icons/flag_Jeanne_d_Arc.png";
import orderOfTheDragonFlagIcon from "../../../icons/flag_order_of_the_dragon.png";
import zhuXiLegacyFlagIcon from "../../../icons/flag_Zhu_Xi_Legacy.png";
import CivilizationsEnum from "../../../data/CivilizationsEnum";
import s from './civilizations-dropdown.module.css'
import shared from '../../../shared.module.css'

function CivilizationsDropdown(props: { selected: CivilizationsEnum, onSelect: (civilization: CivilizationsEnum) => any }) {
    function handleNewCivSelect(newCivilization: CivilizationsEnum) {
        if (props.selected !== newCivilization) {
            props.onSelect(newCivilization);
        }
    }

    let civilizations: { [key: string]: { id: CivilizationsEnum, icon: string, name: string } } = {
        [CivilizationsEnum.RANDOM]: {id: CivilizationsEnum.RANDOM, icon: randomFlagIcon, name: ''},
        [CivilizationsEnum.ABBASID]: {id: CivilizationsEnum.ABBASID, icon: abbasidFlagIcon, name: 'Abbasid Dynasty'},
        [CivilizationsEnum.CHINESE]: {id: CivilizationsEnum.CHINESE, icon: chineseFlagIcon, name: 'Chinese'},
        [CivilizationsEnum.HRE]: {id: CivilizationsEnum.HRE, icon: hreFlagIcon, name: 'Holy Roman Empire'},
        [CivilizationsEnum.ENGLAND]: {id: CivilizationsEnum.ENGLAND, icon: englandFlagIcon, name: 'English'},
        [CivilizationsEnum.DELHI]: {id: CivilizationsEnum.DELHI, icon: delhiFlagIcon, name: 'Delhi Sultanate'},
        [CivilizationsEnum.FRENCH]: {id: CivilizationsEnum.FRENCH, icon: frenchFlagIcon, name: 'French'},
        [CivilizationsEnum.MONGOLS]: {id: CivilizationsEnum.MONGOLS, icon: mongolsFlagIcon, name: 'Mongols'},
        [CivilizationsEnum.RUS]: {id: CivilizationsEnum.RUS, icon: rusFlagIcon, name: 'Rus'},
        [CivilizationsEnum.OTTOMANS]: {id: CivilizationsEnum.OTTOMANS, icon: ottomansFlagIcon, name: 'Ottomans'},
        [CivilizationsEnum.MALIANS]: {id: CivilizationsEnum.MALIANS, icon: maliansFlagIcon, name: 'Malians'},
        [CivilizationsEnum.JEANNE_D_ARC]: {id: CivilizationsEnum.JEANNE_D_ARC, icon: jeanneFlagIcon, name: 'Jeanne d’Arc'},
        [CivilizationsEnum.DRAGON_ORDER]: {id: CivilizationsEnum.DRAGON_ORDER, icon: orderOfTheDragonFlagIcon, name: 'The Order of the Dragon'},
        [CivilizationsEnum.ZHU_XIS_LEGACY]: {id: CivilizationsEnum.ZHU_XIS_LEGACY, icon: zhuXiLegacyFlagIcon, name: 'Zhu Xi’s Legacy'},
        [CivilizationsEnum.AYYUBIDS]: {id: CivilizationsEnum.AYYUBIDS, icon: ayyubidsFlagIcon, name: 'Ayyubids'},
        [CivilizationsEnum.JAPANESE]: {id: CivilizationsEnum.JAPANESE, icon: japaneseFlagIcon, name: 'Japanese'},
        [CivilizationsEnum.BYZANTINES]: {id: CivilizationsEnum.BYZANTINES, icon: byzantinesFlagIcon, name: 'Byzantines'},
        [CivilizationsEnum.KNIGHTS_TEMPLAR]: {id: CivilizationsEnum.KNIGHTS_TEMPLAR, icon: knightsTemplarIcon, name: 'Knights Templar'},
        [CivilizationsEnum.HOUSE_OF_LANCASTER]: {id: CivilizationsEnum.HOUSE_OF_LANCASTER, icon: houseOfLancasterIcon, name: 'House of Lancaster'},
    }

    return (
        <div className={s.dropdown}>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" className={s.toggle}>
                    {Object.values(civilizations).map(civilization =>
                        <img key={civilization.id} className={`${s.civIcon} ${civilization.id === props.selected ? '' : shared.hidden}`} src={civilizations[civilization.id].icon} alt={'flag'}/>
                    )}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    {Object.values(civilizations).map(civilization =>
                        <Dropdown.Item onClick={() => handleNewCivSelect(civilization.id)}
                                       key={civilization.id}
                                       active={civilization.id === props.selected}>
                            <span><img className={s.itemIcon} src={civilization.icon} alt={'flag'}/> {civilization.name}</span>
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CivilizationsDropdown;
