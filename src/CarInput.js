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
            <div className="col">
                <div className="form-inline">
                    <span>Add Car</span>
                    <input className="form-control" value={newCar} onChange={(e)=>this.setState({newCar: e.target.value})}/>
                    <button className="btn btn-primary" onClick={this.addClicked}>Add</button>
                </div>
            </div>
        )
    }
}

export default CarInput