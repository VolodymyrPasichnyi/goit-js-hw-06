const form = document.querySelector('form')

form.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault()
    const {
        email,
        password,
    } = event.currentTarget
    if(email.value === '' || password.value === '') {
        return alert('Error!')
    }
    const obj = {
        email: email.value,
        password: password.value,
    }
    console.log(obj)
    event.currentTarget.reset()
}

