import React, {Component} from 'react';
import CarInput from './CarInput'
import CarList from './CarList'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      carItems:[]
    }
    this.addCar= this.addCar.bind(this)
  }

  addCar(newCar){
    this.setState({
      carItems: this.state.carItems.concat([newCar])
    })
  }

  render(){
    let {carItems}=this.state
    return(
      <div className="container">
      <div className="jumbotron">
      <div className="row">
        

          <CarInput onAddCar={this.addCar}/>

          <CarList items={carItems}/>

        </div>
      </div>
    </div>
    );
  }
}

export default App;
