const request = require('request')

const forecast = (latitude, longitude , callback) => {
    const url = 'https://api.darksky.net/forecast/9d70cec25b0db4d8ce5239ac6462504d/' + latitude + ',' + longitude + '?units=si'

    request ({ url: url, json: true}, (error, { body }) => {
        if (error) {
            callback ('Unable to connect to the weather service!', undefined)
        } else if (body.error) {
            callback ('Unable to find location!' , undefined)
        } else {
            callback (undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degresss out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports = forecast