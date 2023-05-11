import ImprovedWoodUpgrades from "./improved-wood-upgrades/ImprovedWoodUpgrades";
import ImprovedFoodUpgrades from "./improved-food-upgrades/ImprovedFoodUpgrades";
import ImprovedGoldUpgrades from "./improved-gold-upgrades/ImprovedGoldUpgrades";
import s from './improved-eco-upgrades.module.css'

function ImprovedEcoUpgrades() {
    return (
        <div>
            <span>Improved eco upgrades:</span>
            <div className={s.upgradesColumn}>
                <ImprovedWoodUpgrades/>
                <ImprovedFoodUpgrades/>
                <ImprovedGoldUpgrades/>
            </div>
        </div>
    );
}

export default ImprovedEcoUpgrades;
