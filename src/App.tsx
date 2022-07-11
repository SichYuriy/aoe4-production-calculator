import React from 'react';
import './App.css';
import Units from "./data/unit/Units";
import UnitsRoster from "./components/units-roster/UnitsRoster";
import ProductionCalculator from "./components/production-calculator/ProductionCalculator";
import UnitsCountManagement from "./components/untis-count-management/UnitsCountManagement";

function App() {
    return (
        <div className={'app'}>
            <UnitsRoster units={Array.from(Units.values())}/>
            <UnitsCountManagement/>
            <ProductionCalculator/>
        </div>
    );
}

export default App;
