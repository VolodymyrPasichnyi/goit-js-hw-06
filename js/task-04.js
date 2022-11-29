let counterValue = 0

const counter = document.querySelector('span')
const btnpls = document.querySelector('[data-action="increment"]')
const btnmin = document.querySelector('[data-action="decrement"]')

btnpls.addEventListener('click', onPlus)
btnmin.addEventListener('click', onMinus)

function onPlus() {
	counterValue += 1
	counter.textContent = counterValue
}

function onMinus() {
	counterValue -= 1
	counter.textContent = counterValue
}