import React from "react"

class Person extends React.Component {
    render() {
        return <span>{this.props.data.name}</span>
    }
}

export default Person
