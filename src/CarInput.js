import React, {Component} from "react"

class CarInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            newCar:""
        }
        this.addClicked= this.addClicked.bind(this)
    }
    addClicked(){
        let {onAddCar} = this.props
        onAddCar(this.state.newCar)
        this.setState({
            newCar:""
        })
    }
    render(){
        let {newCar} = this.state
        return(
            <div>
                <div>Add Car</div>
                <input value={newCar} onChange={(e)=>this.setState({newCar: e.target.value})}/>
                <button onClick={this.addClicked}>Add</button>
            </div>
        )
    }
}

export default CarInput