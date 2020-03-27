import React from 'react';
import { bikesData } from './bikesData';


class Bicycle extends React.Component {
    constructor () {
        super();

        this.state = {
            bikes: bikesData 
        };// state это обьект с ключом bikes
    }

    render () {
        console.log(this);
        return <div className="bicycle">
            <p>
                {this.state.bikes[0].bike_name}  
                / {this.state.bikes[0].bike_type}
                / ${this.state.bikes[0].rent_price}
            </p>
            <div>
            {this.state.bikes[0].rent
            ? <button className="btn btn-cancel" type="button">Cancel rent</button>
            : <div>
                <button className="btn btn-rent" type="button">Rent</button>
                <button className="btn btn-delete" type="button">Delete</button>
              </div>
            }
</div>
        </div>; //кнопку нужно оживить <button className="btn btn-delete" type="button">Cancel rent</button>
         
    }
}

export default Bicycle;
