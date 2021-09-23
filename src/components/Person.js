import React from "react"

class Person extends React.Component {
    render() {
        return <span>{this.props.data.name}</span>
    }

    get img() {
        return(
            this.props.data.gender === 'female' ? '' :
            this.props.data.gender === 'male'   ? '' :
            this.props.data.gender === 'n/a'    ? <img src={`${process.env.PUBLIC_URL}/gfx/droid.png`} width="32" height="32" alt="droid" />
             : 'wuth'
        )
    }

    static create(data) {
        return <Person data={data}/>
    }
}

export default Person
