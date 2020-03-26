import React from 'react';
import './App.css';
import Form from './components/Form';
import RentList from './components/RentList';
import AvailableList from './components/AvailableList';


function App() {
  return (
    <div className="App">
      <div className="mainWrap">
        <h1>Awesome Bike Rental</h1>
        <h2>Create new rent</h2>
        <Form/>
        <h2>Your rent (Total: $12.99)</h2>
        <RentList/>
        <h2>Avaliable bicucles (3)</h2>
        <AvailableList/>
      </div>
    </div>
  );
}

export default App;
