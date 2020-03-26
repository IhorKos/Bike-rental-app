import React from 'react';

export default function Form() {
  return (   
        <form className="form">
            <div className="inputWrap">
                <label htmlFor="bikeName">Bike name</label>
                <input className="bikeName" type="text" id="bikeName" placeholder="Surefast bicucle"/>
            </div>
                <div className="inputWrap">
                <label htmlFor="bikeType">Bike type</label>
                <select className="bikeType" id="bikeType">
                    <option>Custom</option>
                    <option>Mountain</option>
                    <option>Road</option>
                </select>
            </div>
            <div className="inputWrap">
                <label htmlFor="rentPrice">Rent price</label>
                <input className="rentPrice" type="text" id="rentPrice" placeholder="99.00"/>
            </div>
            <button className="btn btn-submit" type="submit">Submit rent</button>
        </form>
  );
}


