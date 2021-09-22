const url = 'https://swapi.dev/api/'; // Free SW API thing

const fetchInput = document.querySelector("#fetchInput")
const resultArea = document.querySelector("#resultArea")

const fetchDroids = document.querySelector("#fetchDroids")
const fetchMales = document.querySelector("#fetchMales")
const fetchFemales = document.querySelector("#fetchFemales")
const fetchVehicles = document.querySelector("#fetchVehicles")
const cboxInclDriver = document.querySelector("#cboxInclDriver")

fetchDroids.addEventListener('click', () => FetchAny('robot', filterRobot, renderPerson))
fetchMales.addEventListener('click', () => FetchAny('male', filterMale, renderPerson))
fetchFemales.addEventListener('click', () => FetchAny('female', filterFemale, renderPerson))
fetchVehicles.addEventListener('click', () => FetchAny('vehicles', filterVehicle, renderVehicle))

function filterMale(elem) { return elem.gender === 'male' ? elem : false }
function filterFemale(elem) { return elem.gender === 'female' ? elem : false }
function filterRobot(elem) { return elem.gender === 'n/a' ? elem : false }
function filterVehicle(elem) {
    let num = fetchInput.value
    if (num !== undefined && Number.isInteger(parseInt(num))) {
        if (cboxInclDriver.checked)
            num = num > 0 ? num-1 : 0
        return elem.passengers >= num ? elem : false
    } else return elem
}

function renderPerson(elem) {
    return `${elem.name}`
}

function renderVehicle(elem) {
    return `<b>${elem.name}</b> by ${elem.manufacturer}`
}

async function FetchAny(what, filterFunc, renderFunc) {
    async function GetThing(what, filterFunc) {
        console.log(`Getting ${what}...`)
        let data = await APICall_swapi(what)
        return filterFunc !== undefined
             ? data.filter(elem => filterFunc(elem))
             : data
    }

    let results = await GetThing(what, filterFunc)
    resultArea.innerHTML = ''
    results.forEach( elem => resultArea.innerHTML += renderFunc(elem)+'<br />')
}

async function APICall_swapi(args) {
    if (args === 'male' || args === 'female' || args === 'robot')
        args = 'people'
    let response = await fetch(url + args);
    if (response.ok) {
        let data = await response.json(); // read response body and parse as JSON
        return data.results
    } else {
        console.log(response.status)
    }
}
