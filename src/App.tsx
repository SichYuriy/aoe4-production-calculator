import React from 'react';
import './App.css';
import UNITS from "./data/unit/Units";
import UnitsRoster from "./components/units-roster/UnitsRoster";
import ProductionCalculator from "./components/production-calculator/ProductionCalculator";
import UnitsCountManagement from "./components/untis-count-management/UnitsCountManagement";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import FoodSourceSelector from "./components/food-source-selector/FoodSourceSelector";
config.autoAddCss = false

function App() {
    return (
        <div className={'app'}>
            <div className={'row-block content-container'}>
                <UnitsRoster units={Array.from(UNITS.values())}/>
            </div>
            <div className={'row-block'}>
                <div className={'column-block content-container units-count-management-block'}>
                    <UnitsCountManagement/>
                </div>
                <div className={'column-block content-container'}>
                </div>
                <div className={'column-block content-container'}>
                </div>
            </div>
            <div className={'row-block'}>
                <div className={'column-block content-container'}>
                    <ProductionCalculator/>
                </div>
                <div className={'column-block content-container'}>
                    <FoodSourceSelector/>
                </div>
            </div>
        </div>
    );
}

export default App;
