import React from 'react';
import bikesData from './bikesData';

export default function Bicycle() {
  return (       
    <div className="bicycle bicycle-rented">
        <p>Superfast bicycle / Custom / $12.99 </p>
        <button className="btn btn-delete" type="button">Cancel rent</button>
    </div>          
  );
}