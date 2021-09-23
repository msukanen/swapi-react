import React from "react"

class Person extends React.Component {
    render() {
        return <span>{this.props.data.name}</span>
    }

    static create(data) {return <Person data={data}/>}
}

export default Person
