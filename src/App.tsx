import React from 'react';
import './App.css';
import UNITS from "./data/unit/Units";
import UnitsRoster from "./components/units-roster/UnitsRoster";
import ProductionCalculator from "./components/production-calculator/ProductionCalculator";
import UnitsCountManagement from "./components/untis-count-management/UnitsCountManagement";

function App() {
    return (
        <div className={'app'}>
            <div className={'main-block'}>
                <UnitsRoster units={Array.from(UNITS.values())}/>
            </div>
            <div className={'main-block'}>
                <UnitsCountManagement/>
            </div>
            <div className={'main-block'}>
                <ProductionCalculator/>
            </div>
        </div>
    );
}

export default App;
