const weatherForm = document.querySelector('form')
const searchInput = document.querySelector('input')
const messageOne = document.querySelector('#message_1')
const messageTwo = document.querySelector('#message_2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchInput.value

    fetch('/weather?address=' + location).then((res) => {
        res.json().then((data) => {
            if (data.error){
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})