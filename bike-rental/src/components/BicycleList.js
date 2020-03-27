import React from 'react';


export default function BicycleList() {
  return (
    const totalRentAmount = this.state.bicycles.filter(b => !b.rent).reduce(function(total, b) {
      return total + b.rent_price
    }, 0)

    const totalAvailableCount = this.state.bicycles.filter(b => !b.rent).length

    <div>
      <BicycleList
        title={`Your rent (Total: ${totalRentAmount})`}
        bicycles={this.state.bicycles.filter(b => b.rent)} 
      />
      <BicycleList
        title={`Available bicycles (${totalAvailableCount})`}
        bicycles={this.state.bicycles.filter(b => !b.rent)} 
      />
    </div>                 
  );
} 
