import React from 'react';
import './app.scss';
import Landing from "../src/features/landing-page/container/landing"
 // imports of all the pages would be here

// This component would hold the routing for all the different pages using React Router

function App() {
    return (
        <div className="App">
            <Landing/>
        </div>
    );
}

export default App;
