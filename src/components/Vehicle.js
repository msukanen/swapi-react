import React from "react"

class Vehicle extends React.Component {
    render() {
        return <span>{this.props.data.name}</span>
    }

    static create(data) {return <Vehicle data={data}/>}
}

export default Vehicle
