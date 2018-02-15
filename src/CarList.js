import React, {Component} from "react"
import CarItem from "./CarItem"

class CarList extends Component{
    render(){
        let {items} = this.props
        return(
            <div>
                <ul>
                    {
                        items.map((car,i) => 
                        <li key={i}>
                            <CarItem text={car}/>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default CarList