import AgeEnum from "./AgeEnum";
import s from './age-selector.module.css'

function AgeSelector(props: { inputName: string, selected: AgeEnum | null, onSelect: (age: AgeEnum) => any }) {
    return (
        <div>
            <label>
                <input type={'radio'} name={props.inputName} onChange={() => props.onSelect(AgeEnum.DARK_AGE)} checked={props.selected === AgeEnum.DARK_AGE}/>
                <div><div className={s.ageIconDiv}>I</div></div>
            </label>
            <label>
                <input type={'radio'} name={props.inputName} onChange={() => props.onSelect(AgeEnum.FEUDAL_AGE)} checked={props.selected === AgeEnum.FEUDAL_AGE}/>
                <div><div className={s.ageIconDiv}>II</div></div>
            </label>
            <label>
                <input type={'radio'} name={props.inputName} onChange={() => props.onSelect(AgeEnum.CASTLE_AGE)} checked={props.selected === AgeEnum.CASTLE_AGE}/>
                <div><div className={s.ageIconDiv}>III</div></div>
            </label>
            <label>
                <input type={'radio'} name={props.inputName} onChange={() => props.onSelect(AgeEnum.IMPERIAL_AGE)} checked={props.selected === AgeEnum.IMPERIAL_AGE}/>
                <div><div className={s.ageIconDiv}>IV</div></div>
            </label>
        </div>
    )
}

export default AgeSelector;
