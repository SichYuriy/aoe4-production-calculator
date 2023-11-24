import GoldenAgeItem from "./golden-age-item/GoldenAgeItem";
import cancelIcon from '../../../../icons/cancel.png';
import goldenAge1Icon from '../../../../icons/goldenagetier1.png';
import goldenAge2Icon from '../../../../icons/goldenagetier2.png';
import goldenAge3Icon from '../../../../icons/goldenagetier3.png';
import s from './golden-age.module.css';
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import GatheringRateModifierId from "../../../../data/gathering-rate-modifiers/GatheringRateModifierId";
import ProductionSpeedModifierId from "../../../../data/production-speed-modifiers/ProductionSpeedModifierId";
import {unselectSelect} from "../../../../state/GatheringRateModifiersSlice";
import {unselectSelectProductionSpeedModifiers} from "../../../../state/ProducationSpeedModifiersSlice";
import Tooltip from "../../../tooltip/Tooltip";

const ALL_GATHERING_RATES = [GatheringRateModifierId.GOLDEN_AGE_1, GatheringRateModifierId.GOLDEN_AGE_2, GatheringRateModifierId.GOLDEN_AGE_3];
const ALL_PRODUCTION = [ProductionSpeedModifierId.GOLDEN_AGE_3];

function GoldenAge() {
    const dispatch = useAppDispatch();
    const gatheringRateModifiers: { [key: string]: boolean } = useAppSelector((rootState) => rootState.gatheringRateModifiers);

    const noneActive = !ALL_GATHERING_RATES.some(id => gatheringRateModifiers[id]);

    function unselectAll() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: []}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: []}));
    }

    function selectAge1() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: [GatheringRateModifierId.GOLDEN_AGE_1]}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: []}));
    }

    function selectAge2() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: [GatheringRateModifierId.GOLDEN_AGE_2]}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: []}));
    }

    function selectAge3() {
        dispatch(unselectSelect({unselect: ALL_GATHERING_RATES, select: [GatheringRateModifierId.GOLDEN_AGE_3]}));
        dispatch(unselectSelectProductionSpeedModifiers({unselect: ALL_PRODUCTION, select: [ProductionSpeedModifierId.GOLDEN_AGE_3]}));
    }

    return (
        <Tooltip header="Golden Age" text={'Increases gathering rate. Level 3 also reduces unit production time.'}>
            <div className={s.goldenAge}>
                <GoldenAgeItem icon={cancelIcon} selected={noneActive} onClick={unselectAll}/>
                <GoldenAgeItem icon={goldenAge1Icon} selected={gatheringRateModifiers[GatheringRateModifierId.GOLDEN_AGE_1]} onClick={selectAge1}/>
                <GoldenAgeItem icon={goldenAge2Icon} selected={gatheringRateModifiers[GatheringRateModifierId.GOLDEN_AGE_2]} onClick={selectAge2}/>
                <GoldenAgeItem icon={goldenAge3Icon} selected={gatheringRateModifiers[GatheringRateModifierId.GOLDEN_AGE_3]} onClick={selectAge3}/>
            </div>
        </Tooltip>
    );
}

export default GoldenAge;
