const sizeInput = document.querySelector('input')
const sizeSpan = document.querySelector('span')

sizeInput.addEventListener('input', inputFontSize)


function inputFontSize(event) {
    sizeSpan.style.fontSize = event.currentTarget.value + 'px'
}

