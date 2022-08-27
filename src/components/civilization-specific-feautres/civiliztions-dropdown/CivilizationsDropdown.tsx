import {Dropdown} from "react-bootstrap";
import randomFlagIcon from "../../../icons/flag_random.jpg";
import abbasidFlagIcon from "../../../icons/flag_abbasid.png";
import chineseFlagIcon from "../../../icons/flag_chinese.png";
import hreFlagIcon from "../../../icons/flag_hre.png";
import englandFlagIcon from "../../../icons/flag_english.png";
import delhiFlagIcon from "../../../icons/flag_delhi.png";
import frenchFlagIcon from "../../../icons/flag_french.png";
import mongolsFlagIcon from "../../../icons/flag_mongol.png";
import rusFlagIcon from "../../../icons/flag_rus.png";
import CivilizationsEnum from "../../../data/CivilizationsEnum";
import s from './civilizations-dropdown.module.css'

function CivilizationsDropdown(props: { selected: CivilizationsEnum, onSelect: (civilization: CivilizationsEnum) => any }) {
    function handleNewCivSelect(newCivilization: CivilizationsEnum) {
        if (props.selected !== newCivilization) {
            props.onSelect(newCivilization);
        }
    }

    let civilizations: { [key: string]: { id: CivilizationsEnum, icon: string } } = {
        [CivilizationsEnum.RANDOM]: {id: CivilizationsEnum.RANDOM, icon: randomFlagIcon},
        [CivilizationsEnum.ABBASID]: {id: CivilizationsEnum.ABBASID, icon: abbasidFlagIcon},
        [CivilizationsEnum.CHINESE]: {id: CivilizationsEnum.CHINESE, icon: chineseFlagIcon},
        [CivilizationsEnum.HRE]: {id: CivilizationsEnum.HRE, icon: hreFlagIcon},
        [CivilizationsEnum.ENGLAND]: {id: CivilizationsEnum.ENGLAND, icon: englandFlagIcon},
        [CivilizationsEnum.DELHI]: {id: CivilizationsEnum.DELHI, icon: delhiFlagIcon},
        [CivilizationsEnum.FRENCH]: {id: CivilizationsEnum.FRENCH, icon: frenchFlagIcon},
        [CivilizationsEnum.MONGOLS]: {id: CivilizationsEnum.MONGOLS, icon: mongolsFlagIcon},
        [CivilizationsEnum.RUS]: {id: CivilizationsEnum.RUS, icon: rusFlagIcon}
    }

    return (
        <div className={s.dropdown}>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" className={s.toggle}>
                    <img className={s.civIcon} src={civilizations[props.selected].icon} alt={'flag'}/>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    {Object.values(civilizations).map(civilization =>
                        <Dropdown.Item onClick={() => handleNewCivSelect(civilization.id)}
                                       key={civilization.id}
                                       active={civilization.id === props.selected}>
                            <img className={s.civIcon} src={civilization.icon} alt={'flag'}/>
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default CivilizationsDropdown;
