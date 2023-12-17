import shared from "../../../../shared.module.css";
import Tooltip from "../../../tooltip/Tooltip";
import floatingGateIcon from "../../../../icons/floating-gate.png";
import YorishiroTc from "../japanese-town-centers/yorishiro-tc/YorishiroTc";

function FloatingGate() {


    return (
        <div className={shared.civilizationSpecificFeature}>
            <Tooltip header={'Floating Gate'} text={'Place Yorishiro. Town Center: +25% Production speed, Farmhouse: +75 Food per minute, Lumber Camp: +75 Wood per minute, Forge: +75 Gold per minute'}>
                <div>
                    <img className={shared.civilizationSpecificFeatureIcon} src={floatingGateIcon} alt={'floating gate'}/>
                </div>
            </Tooltip>
            <div>:</div>
            <YorishiroTc/>
        </div>
    );
}

export default FloatingGate;