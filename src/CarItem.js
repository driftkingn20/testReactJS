import React, {Component} from "react"

class CarItem extends Component{
    render(){
        let {text} = this.props
        return(
            <div>
                {text}
            </div>
        )
    }
}

export default CarItem