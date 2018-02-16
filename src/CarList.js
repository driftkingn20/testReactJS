import React, {Component} from "react"
import CarItem from "./CarItem"

class CarList extends Component{
    render(){
        let {items} = this.props
        return(
            <div className="col">
                <ul className="list-group">
                    {
                        items.map((car,i) => 
                        <li className="list-group-item" key={i}>
                            <CarItem text={car}/>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default CarList