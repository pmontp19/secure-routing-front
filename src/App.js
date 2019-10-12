import React from 'react';
import './App.css';
import MapComponent from './Map'
import SafetyScore from "./components/safety-score";

function App() {
  return (
    <div className="App">
      <SafetyScore/>
      <MapComponent />
    </div>
  );
}

export default App;
