const blurInput = document.querySelector('input')
console.log(blurInput.getAttribute('data-length'))

blurInput.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if(event.target.value.length < blurInput.getAttribute('data-length')) {
        blurInput.classList.add('invalid')
        blurInput.classList.remove('valid')
      } else {
        blurInput.classList.add('valid')
        blurInput.classList.remove('invalid')
      }
}

