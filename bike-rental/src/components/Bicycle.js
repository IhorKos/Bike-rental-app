import React from 'react';

const Bicycle = ({ bicycle, onRent, onDelete }) => (
  <div className="bicycle">
    <p>{bicycle.bike_name} / {bicycle.bike_type} / ${bicycle.rent_price}</p>
    <div>
      {bicycle.rent
        ? <button className="btn btn-cancel" type="button">Cancel rent</button>
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
