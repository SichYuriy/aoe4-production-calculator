import AgeSelector from "../../age-selectror/AgeSelector";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import AgeEnum from "../../age-selectror/AgeEnum";
import {unselectSelectProductionSpeedModifiers} from "../../../../state/ProducationSpeedModifiersSlice";
import Tooltip from "../../../tooltip/Tooltip";

function FrenchAgeSelect() {
    const dispatch = useAppDispatch();
    const productionSpeedModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.productionSpeedModifiers);
    let selectedAge = null;
    if (productionSpeedModifiers[ProductionSpeedModifierId.FRENCH_DARK_AGE]) {
        selectedAge = AgeEnum.DARK_AGE;
    } else if (productionSpeedModifiers[ProductionSpeedModifierId.FRENCH_FEUDAL_AGE]) {
        selectedAge = AgeEnum.FEUDAL_AGE;
    } else if (productionSpeedModifiers[ProductionSpeedModifierId.FRENCH_CASTLE_AGE]) {
        selectedAge = AgeEnum.CASTLE_AGE;
    } else if (productionSpeedModifiers[ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE]) {
        selectedAge = AgeEnum.IMPERIAL_AGE;
    }

    const ALL_AGE_UPGRADES = [ProductionSpeedModifierId.FRENCH_DARK_AGE,
        ProductionSpeedModifierId.FRENCH_FEUDAL_AGE,
        ProductionSpeedModifierId.FRENCH_CASTLE_AGE,
        ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE];
    const UPGRADE_BY_AGE = {
        [AgeEnum.DARK_AGE]: ProductionSpeedModifierId.FRENCH_DARK_AGE,
        [AgeEnum.FEUDAL_AGE]: ProductionSpeedModifierId.FRENCH_FEUDAL_AGE,
        [AgeEnum.CASTLE_AGE]: ProductionSpeedModifierId.FRENCH_CASTLE_AGE,
        [AgeEnum.IMPERIAL_AGE]: ProductionSpeedModifierId.FRENCH_IMPERIAL_AGE,
    }

    function selectAge(age: AgeEnum) {
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_AGE_UPGRADES, select: [UPGRADE_BY_AGE[age]]}));
    }

    return (
        <Tooltip header="Age" text="Reduces villager production time">
            <AgeSelector onSelect={selectAge} selected={selectedAge}/>
        </Tooltip>
    )
}

export default FrenchAgeSelect;
