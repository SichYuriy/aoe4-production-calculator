import React from 'react';
import './App.css';
import UNITS from "./data/unit/Units";
import UnitsRoster from "./components/units-roster/units-roster";

function App() {
    return (
        <div className={'app'}>
            <UnitsRoster units={Array.from(UNITS.values())}/>
        </div>
    );
}

export default App;
