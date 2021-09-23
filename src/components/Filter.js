export function filterMale(elem)   { return elem.gender === 'male'   ? elem : false }
export function filterFemale(elem) { return elem.gender === 'female' ? elem : false }
export function filterDroid(elem)  { return elem.gender === 'n/a'    ? elem : false }
/**
 * ! two IDs (semi-)required: 'fetchInput' and 'cboxInclDriver'
 * 
 * @param {*} elem A vehicle representation, hopefully...
 * @param ignoreCount giving ANY value here will make the filter IGNORE passenger, driver, etc. counts.
 * @returns false if elem didn't meet criteria, otherwise elem.
 */
export function filterVehicle(elem, ignoreCount){
	const fIn = document.getElementById('fetchInput')
	let num = fIn ? fIn.value : undefined
	if (ignoreCount === undefined && num !== undefined && Number.isInteger(parseInt(num))) {
		let cbox = document.getElementById('cboxInclDriver')
		if (cbox && cbox.checked)
			num = num > 0 ? num-1 : 0
		return elem.passengers >= num ? elem : false
	} else return elem
}

export function filterImg(elem, sizePx) {
	if (elem.data)
		elem = elem.data
	return(
		filterFemale(elem) ? <></> :
		filterMale(elem)   ? <></> :
		filterDroid(elem)  ? <></>
		: <></>
	)
}
