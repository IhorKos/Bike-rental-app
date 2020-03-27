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
            <button className="btn btn-delete" type="button">Cancel rent</button>
        </div>; //кнопку нужно оживить
         
    }
}

export default Bicycle;
