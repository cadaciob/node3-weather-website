const request = require('request')

const geocode = (address, callback) => {
    // old one const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2FkYWNpbzg2IiwiYSI6ImNrMzBybm01dzAxZjEzZXA5aWQ3Z2ozNWoifQ.3Tjt2n5Or02aStaDGmeNYQ'

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?access_token=pk.eyJ1IjoiY2FkYWNpbzg2IiwiYSI6ImNrMzBybm01dzAxZjEzZXA5aWQ3Z2ozNWoifQ.3Tjt2n5Or02aStaDGmeNYQ'

    request ({ url: url, json: true}, (error, { body }) => {
        if (error) {
            callback ('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback ('Unable to find location! Try another search!', undefined)
        } else {
            callback (undefined, {
                 latitude: body.features[0].center[1], 
                 longitude: body.features[0].center[0], 
                 location: body.features[0].place_name
            })
        }
    })
} 
module.exports = geocode