import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date().toJSON(),
      bike_name: '',
      bike_type: '',
      rent_price: '',
      rent: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
    }

  handleSubmit(event) {
    event.preventDefault();
    const newBike = this.state;
    this.props.onSubmit(newBike);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} id="form">
        <div className="inputWrap">
          <label htmlFor="bikeName">Bike name</label>
          <input className="bikeName" 
            type="text" 
            id="bikeName" 
            placeholder="Super Bike"
            name="bike_name"
            value={this.state.text}
            onChange={this.handleInputChange}/>
        </div>

        <div className="inputWrap">
          <label htmlFor="bikeType">Bike type</label>
          <select 
            className="bikeType" 
            id="bikeType"
            name="bike_type"
            value={this.state.value}
            onChange={this.handleInputChange}>
              <option value="Custom">Custom</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
          </select>
        </div>

        <div className="inputWrap">
          <label htmlFor="rentPrice">Rent price</label>
          <input className="rentPrice" 
            type="number" 
            id="rentPrice" 
            placeholder="99.00"
            name="rent_price"
            // value={this.state.value}
            onChange={this.handleInputChange}/>
        </div>

        <button className="btn btn-submit" type="submit">Submit rent</button>
      </form>
    );
  }
}