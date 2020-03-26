import React from 'react';

export default function BicycleAvailable() {
  return (       
    <div className="bicycle">
        <p>Superfast bicycle / Custom / $12.99 </p>
        <div>
            <button className="btn btn-rent" type="button">Rent</button>
            <button className="btn btn-delete" type="button">Delete</button>
        </div>
        
    </div>          
  );
}