import Unit from "./Unit";
import spearmanIcon from '../../icons/spearman.png'
import manAtArmsIcon from '../../icons/man-at-arms.png'

const UNITS: Map<string, Unit> = new Map<string, Unit>(Object.entries({
    SPEARMAN: {
        id: 'SPEARMAN',
        icon: spearmanIcon,
        name: 'spearman',
    },
    MAN_AT_ARMS: {
        id: 'MAN_AT_ARMS',
        icon: manAtArmsIcon,
        name: 'man at arms'
    }
}));

UNITS.values()

export default UNITS;
