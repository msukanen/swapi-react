import React from 'react'
import Person from './Person'
import Vehicle from './Vehicle'
import {
    filterMale,
    filterFemale,
    filterDroid,
    filterVehicle,
    filterImg
} from './Filter'

class Fetcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = { items:[] }
    }

    render() {
        async function fetchAny(parent, what, filterFunc, renderFunc) {
            async function fetchThing(parent, what, filterFunc) {
                // console.log(`Getting ${what}...`)
                let data = await APICall_swapi(parent, what)
                return filterFunc !== undefined
                     ? data.filter(elem => filterFunc(elem))
                     : data
            }
        
            const results = await fetchThing(parent, what, filterFunc)
            // console.log(`Got ${what}...`)
            const things = []
            results.forEach( result => things.push({data: result, renderFunc: renderFunc}))
            parent.setState( {items: things} )
        }
        
        async function APICall_swapi(parent, args) {
            if (args === 'males' || args === 'females' || args === 'droids')
                args = 'people'// male/female/droid are all 'people' in the DB
            const response = await fetch(parent.props.url + args);
            if (response.ok) {
                const data = await response.json(); // read response body and parse as JSON
                return data.results
            } else {
                console.log(response.status)
            }
        }
        
        return(
            <table>
                <tbody>
                    <tr>
                        <td><input type="text" id="fetchInput"></input></td>
                        <td><button onClick={() => fetchAny(this, 'droids', filterDroid, Person.create)}>D</button></td>
                        <td><button onClick={() => fetchAny(this, 'males', filterMale, Person.create)}>&#9794;</button></td>
                        <td><button onClick={() => fetchAny(this, 'females', filterFemale, Person.create)}>&#9792;</button></td>
                        <td><button onClick={() => fetchAny(this, 'vehicles', filterVehicle, Vehicle.create)}>V</button></td>
                    </tr>
                    <tr>
                        <td colSpan="4" style={{textAlign:'left'}}>
                            <div id="resultArea">
                                {this.state.items.length > 0 ? filterImg(this.state.items[0], 48) : ''}
                                {this.state.items.map((item) => <>{item.renderFunc ? item.renderFunc(item.data) : item.data}<br /></>)}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Fetcher
