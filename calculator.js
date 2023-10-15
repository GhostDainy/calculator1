let sum = (a, b) => { return a + b }
let extraction = (a, b) => { return a - b }
let multiply = (a, b) => { return a * b }
let division = (a, b) => { return a / b }

const OPERATIONS = { sum: `+`, extraction: `-`, multiply: `*`, division: `/`, }

let calculate = ({a, b , operation}) => {

	let result = null

	switch(operation) {

	case OPERATIONS.sum:
		result = sum(a, b)
		break

	case OPERATIONS.extraction:
		result = extraction(a, b)
		break

	case OPERATIONS.multiply:
		result = multiply(a, b)
		break

	case OPERATIONS.division:
		result = division(a, b)
		break

	default: 
		break

	}

	return result
}

let input1$ = document.querySelector(`.input1`)
let input2$ = document.querySelector(`.input2`)
let select$ = document.querySelector(`.select`)
let btn$ = document.querySelector(`.btn`)
let p$ = document.querySelector(`.p`)

btn$.addEventListener(`click`, () => {
	let a = +(input1$.value)
	let b = +(input2$.value)
	let operation = select$.value
	let result = calculate({a, b, operation})
	p$.innerHTML = result
})











