//console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

//
// Goal: Fetch weather!
//
// 1. Setup a call to fetch to fetch weather for Boston
// 2. Get the parse JSON response
//      - If error property, print error
//      - If no error property, print location and forecast
// 3. Refresh the browser and test your work

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


//messageOne.textContent = 'From JavaScript'

//
// Goal: Render content to paragraphs
//
// 1. Select the second message p from javascript
// 2. Just before fetch, render loading message and empty p
// 3. If error, render error
// 4. If no error, render location and forecast
// 5. Test your work! Search for errors and for valid locations

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value

    console.log(location)

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            //console.log(data.error)
            messageOne.textContent = data.error
            messageTwo.textContent = ''
        }  else {
            //console.log(data.location)
            //console.log(data.forecast)
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})

//
// Goal: Use input value to get weather
//
// 1. Migrate fetch call into the submit callback
// 2. Use the search text as the address query string value
// 3. Submit the form with a valid and invalid value to test

