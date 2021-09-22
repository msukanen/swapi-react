import React from "react"

class Vehicle extends React.Component {
    render() {
        return <span>{this.props.data.name}</span>
    }
}

export default Vehicle
