import shared from "../../../../shared.module.css";
import enclosuresIcon from "../../../../icons/enclosures.png";
import UpgradeItem from "../../../upgrade-item/UpgradeItem";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {
    PassiveIncomeFromGatheringVillagerModifiersState,
    togglePassiveIncomeFromGatheringVillagerModifier
} from "../../../../state/PassiveIncomeFromGatheringVillagerModifiersSlice";
import PassiveIncomeFromGatheringVillagerModifierId
    from "../../../../data/passive-income-from-gathering-vilager-modifiers/PassiveIncomeFromGatheringVillagerModifierId";
import Tooltip from "../../../tooltip/Tooltip";
import farmIcon from "../../../../icons/farm.png";
import {setMinFoodWorkers} from "../../../../state/MinFoodWorkersSlice";
import s from './enslosures.module.css';

const TOOLTIP = 'Set farmers count. It will have no effect if you set number less than required for constant production. ' +
    'Do not forget set farm food source to use in combination with enclosures.'

function Enclosures() {
    const dispatch = useAppDispatch();
    const passiveIncomeFromGatheringVillagerModifiers: PassiveIncomeFromGatheringVillagerModifiersState =
        useAppSelector((rootState) => rootState.passiveIncomeFromGatheringVillagerModifiers);

    const minFoodVillagers: number = useAppSelector(rootState => rootState.minFoodWorkers.value);

    function toggle() {
        dispatch(togglePassiveIncomeFromGatheringVillagerModifier(PassiveIncomeFromGatheringVillagerModifierId.ENCLOSURES))
    }

    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Enclosures'} text={'It will have an effect only with farm food source selected!'}>
                <UpgradeItem icon={enclosuresIcon}
                             selected={passiveIncomeFromGatheringVillagerModifiers[PassiveIncomeFromGatheringVillagerModifierId.ENCLOSURES].selected}
                             onClick={toggle}/>
            </Tooltip>
            <Tooltip header={'Farmers count'} text={TOOLTIP}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={farmIcon} alt={'farmers'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <div className={s.farmersCountBlock}>
                <input type={'number'} min={0} value={minFoodVillagers} onChange={e => dispatch(setMinFoodWorkers(+e.target.value))}/>
            </div>
        </div>
    );
}

export default Enclosures;
