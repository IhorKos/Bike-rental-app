import React from 'react';
import './App.css';
import Form from './components/Form';
import BicycleList from './components/BicycleList';
import useAsync from './useAsync';
import { addBicycle, loadBicycles, updateBicycle, deleteBicycle } from './server';


function App() {
  const {
    value: bicycles,
    pending,
    execute: reload
  } = useAsync(loadBicycles);

  const totalRentAmount = bicycles
    ? bicycles.filter(b => b.rent).reduce((total, b) => total + b.rent_price, 0).toFixed(2)
    : 0;
  const totalAvailableCount = bicycles 
    ? bicycles.filter(b => !b.rent).length 
    : 0;

  return (
    <div className="App">
      <div className="mainWrap">
        <h1>Awesome Bike Rental</h1>
        <h2>Create new rent</h2>
        <Form onSubmit={newBicycle => addBicycle(newBicycle).then(reload)} />
        {pending
          ? <p>Loading bicycles</p>
          : <div>
            <BicycleList
              title={`Your rent (Total: $${totalRentAmount})`}
              bicycles={bicycles ? bicycles.filter(b => b.rent) : []}
              onCancel={id => updateBicycle(id, { rent: false }).then(reload)}
            />
            <BicycleList
              title={`Available bicycles (${totalAvailableCount})`}
              bicycles={bicycles ? bicycles.filter(b => !b.rent) : []}
              onRent={id => updateBicycle(id, { rent: true }).then(reload)}
              onDelete={id => deleteBicycle(id).then(reload)}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
