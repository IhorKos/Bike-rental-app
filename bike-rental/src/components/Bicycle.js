import React from 'react';
import calcHours from '../calcHours'

const Bicycle = ({ bicycle, onRent, onDelete, onCancel}) => (
  <div className="bicycle">
    <p>{bicycle.bike_name} / {bicycle.bike_type} / ${bicycle.rent_price}</p>
    <div>
      {bicycle.rent
        ? 
        <div> 
          <input type="button"
            className="btn"
            onClick={calcHours}
            value="calc rent time"
          />
          <input type="button"
            className="btn btn-cancel"
            onClick={onCancel}
            value="Cancel rent"
          />
          
          </div>
        : <div>
          <input type="button"
            className="btn btn-rent"
            onClick={onRent}
            value="Rent"
          />
          <input type="button"
            className="btn btn-delete"
            onClick={onDelete}
            value="Delete"
          />
        </div>
      }
    </div>
  </div> //кнопку нужно оживить <button className="btn btn-delete" type="button">Cancel rent</button>
);

export default Bicycle;
