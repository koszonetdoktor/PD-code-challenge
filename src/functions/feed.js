const axios = require("axios")

export function handler(event, context, callback) {
    const url =
        "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    const { tags } = event.queryStringParameters
    console.log("TAGS", tags)

    axios
        .get(url, { params: { tags } })
        .then((response) => {
            console.log("RESPONSE", response.data)
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    data: response.data,
                }),
            })
        })
        .catch((error) => {
            return callback(null, {
                statusCode: 500,
                body: JSON.stringify(error),
            })
        })
}
