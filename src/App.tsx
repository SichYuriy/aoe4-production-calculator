import React from 'react';
import './app.module.css';
import UNITS from "./data/unit/Units";
import UnitsRoster from "./components/units-roster/UnitsRoster";
import ProductionCalculator from "./components/production-calculator/ProductionCalculator";
import UnitsCountManagement from "./components/untis-count-management/UnitsCountManagement";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import FoodSourceSelector from "./components/food-source-selector/FoodSourceSelector";
import GatheringRatesManagement from "./components/gathering-rates/GatheringRatesManagement";
import CommonUpgrades from "./components/common-upgrades/CommonUpgrades";
import CivilizationSpecificFeatures from "./components/civilization-specific-feautres/CivilizationSpecificFeatures";
import DataDetails from "./components/data-details/DataDetails";
import Footer from "./components/footer/Footer";
import s from './app.module.css';
config.autoAddCss = false

function App() {
    return (
      <div className={s.app}>
        <div className={`${s.rowBlock} ${s.contentContainer}`}>
          <UnitsRoster allUnits={Array.from(UNITS.values())} />
        </div>
        <div className={s.rowBlock}>
          <div
            className={`${s.columnBlock} ${s.contentContainer} ${s.unitsCountManagementBlock}`}
          >
            <UnitsCountManagement />
          </div>
          <div className={`${s.columnBlock} ${s.contentContainer}`}>
            <CommonUpgrades />
          </div>
          <div className={`${s.columnBlock} ${s.contentContainer}`}>
            <CivilizationSpecificFeatures />
          </div>
        </div>
        <div className={s.rowBlock}>
          <div className={`${s.columnBlock} ${s.contentContainer}`}>
            <ProductionCalculator />
          </div>
          <div className={`${s.columnBlock} ${s.contentContainer}`}>
            <FoodSourceSelector />
            <hr />
            <GatheringRatesManagement />
          </div>
        </div>
        <div className={s.rowBlock}>
          <DataDetails />
        </div>
        <div className={s.footer}>
          <Footer />
        </div>
        <a className={s.buymeacoffee} href="https://www.buymeacoffee.com/Aoe4">
          <img alt="buy me a coffee" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Aoe4&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" />
        </a>
      </div>
    );
}

export default App;
