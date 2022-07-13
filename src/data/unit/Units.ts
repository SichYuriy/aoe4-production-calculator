import Unit, {UnitCost} from "./Unit";
import spearmanIcon from '../../icons/spearman.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'

const UNITS: Map<string, Unit> = new Map<string, Unit>(Object.entries({
    SPEARMAN: {
        id: 'SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
        productionTime: 15,
        cost: new UnitCost(60, 0, 20, 0),
    },
    MAN_AT_ARMS: {
        id: 'MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms',
        productionTime: 22,
        cost: new UnitCost(100, 20, 0, 0),
    }
}));

export default UNITS;
