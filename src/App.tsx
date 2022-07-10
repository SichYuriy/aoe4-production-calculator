import React from 'react';
import './App.css';
import UNITS from "./data/unit/UNITS";
import UnitsRoster from "./components/units-roster/units-roster";
import ProductionCalculator from "./components/production-calculator/ProductionCalculator";

function App() {
    return (
        <div className={'app'}>
            <UnitsRoster units={Array.from(UNITS.values())}/>
            <ProductionCalculator />
        </div>
    );
}

export default App;
