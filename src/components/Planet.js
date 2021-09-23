import React from 'react'

class Planet extends React.Component {
    render() {
        return <span>{this.props.data.name}</span>
    }

    static create(data) {return <Planet data={data} />}
}

export default Planet
