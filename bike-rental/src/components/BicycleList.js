import React from 'react';
import Bicycle from './Bicycle';

const BicycleList = ({ title, bicycles, onRent, onDelete, onCancel }) => (
  <div>
    <h2>{title}</h2>
    {bicycles.map(bicycle => (
      <Bicycle key={bicycle.id}
        bicycle={bicycle}
        onRent={() => onRent(bicycle.id)}
        onDelete={() => onDelete(bicycle.id)}
        onCancel={() => onCancel(bicycle.id)}
      />
    ))}
  </div>
);

export default BicycleList;
