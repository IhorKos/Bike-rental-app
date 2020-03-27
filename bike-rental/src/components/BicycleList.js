import React from 'react';
import Bicycle from './Bicycle';

const BicycleList = ({ title, bicycles, onRent, onDelete }) => (
  <div>
    <h2>{title}</h2>
    {bicycles.map(bicycle => (
      <Bicycle key={bicycle.id}
        bicycle={bicycle}
        onRent={() => onRent(bicycle.id)}
        onDelete={() => onDelete(bicycle.id)}
      />
    ))}
  </div>
);

export default BicycleList;
