import React from 'react';
import './App.css';
import Form from './components/Form';
import BicycleList from './components/BicycleList';
import useAsync from './useAsync';
import { loadBicycles, updateBicycle, deleteBicycle } from './server';


function App() {
  const { value, pending, execute } = useAsync(loadBicycles);

  const totalRentAmount = value
    ? value.filter(b => b.rent).reduce((total, b) => total + b.rent_price, 0).toFixed(2)
    : 0;
  const totalAvailableCount = value ? value.filter(b => !b.rent).length : 0;

  return (
    <div className="App">
      <div className="mainWrap">
        <h1>Awesome Bike Rental</h1>
        <h2>Create new rent</h2>
        <Form />
        {pending
          ? <p>Loading bicycles</p>
          : <div>
            <BicycleList
              title={`Your rent (Total: $${totalRentAmount})`}
              bicycles={value ? value.filter(b => b.rent) : []}
              onCancel={id => updateBicycle(id, { rent: false }).then(execute)}
            />
            <BicycleList
              title={`Available bicycles (${totalAvailableCount})`}
              bicycles={value ? value.filter(b => !b.rent) : []}
              onRent={id => updateBicycle(id, { rent: true }).then(execute)}
              onDelete={id => deleteBicycle(id).then(execute)}
            />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
