import React from 'react';


    export default   class Form extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            bikeName: '',
            bikeType: '',
            rentPrice: 0
          };


        this.handleInputChange = this.handleInputChange.bind(this);
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
          console.log('Отправлен: ', this.state );
          event.preventDefault();
        }
        
      
        render() {
    return (   
        <form className="form" >
            <div className="inputWrap">
                <label htmlFor="bikeName">Bike name</label>
                <input className="bikeName" 
                type="text" 
                id="bikeName" 
                placeholder="Super Bike"
                name="bikeName"
                value={this.state.value}
                onChange={this.handleInputChange}/>
            </div>
                <div className="inputWrap">
                <label htmlFor="bikeType">Bike type</label>
                <select className="bikeType" 
                id="bikeType"
                name="bikeType"
                value={this.state.value}
                onChange={this.handleInputChange}>
                    <option>Custom</option>
                    <option>Mountain</option>
                    <option>Road</option>
                </select>
            </div>
            <div className="inputWrap">
                <label htmlFor="rentPrice">Rent price</label>
                <input className="rentPrice" 
                type="number" 
                id="rentPrice" 
                placeholder="99.00"
                name="rentPrice"
                // value={this.state.value}
                onChange={this.handleInputChange}/>
            </div>
            <button 
                className="btn btn-submit" 
                type="submit"
                onSubmit={this.handleSubmit}
                >Submit rent
            </button>
        </form>
  );
}
    }