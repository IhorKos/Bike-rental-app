import React from 'react';
import './App.css';
import Form from './components/Form';
import RentList from './components/RentList';
import BicycleList from './components/BicycleList';
import useAsync from './components/useAsync';
import server from './components/server';


function App() {
  const { value, pending } = useAsync(server.loadAll);
  const totalRentAmount = this.state.bicycles.filter(b => !b.rent).reduce(function(total, b) {
    return total + b.rent_price;
  }, 0);
  const totalAvailableCount = this.state.bicycles.filter(b => !b.rent).length;

  return (
    <div className="App">
      <div className="mainWrap">
        <h1>Awesome Bike Rental</h1>
        <h2>Create new rent</h2>
        <Form />
        {pending
          ? <p>Loading bicycles</p>
          : <div>
            <BicycleList bicycles={value.filter( b => b.rent )} title={`Your rent (Total: ${totalRentAmount})`} />
            <BicycleList bicycles={value.filter( b => !b.rent)} title={`Available bicycles (${totalAvailableCount})`} />
          </div>
        }
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <div className="mainWrap">
//         <h1>Awesome Bike Rental</h1>
//         <h2>Create new rent</h2>
//         <Form/>
//         <h2>Your rent (Total: $12.99)</h2>
//         <RentList/>
//         <h2>Avaliable bicucles (3)</h2>
//         <BicycleList/>
//       </div>
//     </div>
//   );
// }

export default App;
