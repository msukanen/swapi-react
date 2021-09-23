import React from "react"
import Person from "./Person"
import Vehicle from "./Vehicle"

const url = "https://swapi.dev/api/"

function filterMale(elem) { return elem.gender === 'male' ? elem : false }
function filterFemale(elem) { return elem.gender === 'female' ? elem : false }
function filterDroid(elem) { return elem.gender === 'n/a' ? elem : false }
function filterVehicle(elem) {
    const fIn = document.getElementById('fetchInput')
    let num = fIn ? fIn.value : 0
    if (num !== undefined && Number.isInteger(parseInt(num))) {
        let cbox = document.getElementById('cboxInclDriver')
        if (cbox && cbox.checked)
            num = num > 0 ? num-1 : 0
        return elem.passengers >= num ? elem : false
    } else return elem
}

class Fetcher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items:[]}
    }

    static renderPerson(elem) {return <Person data={elem} />}

    static renderVehicle(elem) {return <Vehicle data={elem} />}

    render() {
        async function fetchAny(destination, what, filterFunc, renderFunc) {
            async function GetThing(what, filterFunc) {
                console.log(`Getting ${what}...`)
                let data = await APICall_swapi(what)
                return filterFunc !== undefined
                     ? data.filter(elem => filterFunc(elem))
                     : data
            }
        
            const results = await GetThing(what, filterFunc)
            const things = []
            results.forEach( result => things.push({data: result, renderFunc: renderFunc}))
            destination.setState( {items: things} )
        }
        
        async function APICall_swapi(args) {
            if (args === 'males' || args === 'females' || args === 'droids')
                args = 'people'
            const response = await fetch(url + args);
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
                        <td><button onClick={() => fetchAny(this, 'droids', filterDroid, Fetcher.renderPerson)}>D</button></td>
                        <td><button onClick={() => fetchAny(this, 'males', filterMale, Fetcher.renderPerson)}>M</button></td>
                        <td><button onClick={() => fetchAny(this, 'females', filterFemale, Fetcher.renderPerson)}>F</button></td>
                        <td><button onClick={() => fetchAny(this, 'vehicles', filterVehicle, Fetcher.renderVehicle)}>V</button></td>
                    </tr>
                    <tr>
                        <td colSpan="4" style={{textAlign:'left'}}>
                            <div id="resultArea">{
                                this.state.items.map((item) => <>{item.renderFunc ? item.renderFunc(item.data) : item.data}<br /></>)
                            }</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Fetcher
