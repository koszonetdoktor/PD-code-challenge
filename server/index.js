const axios = require("axios")
const express = require("express")
const app = express()
const port = 3001

app.get("/feeds", async (req, res) => {
    try {
        console.log("calling feeds")
        const feeds = await getFeeds()
        console.log("feeds", feeds)
        res.send(feeds)
    } catch (err) {
        console.error(err)
        res.status(500).send("Something broke!")
    }
})

app.listen(port, () => {
    console.log(`Proxy server is listening at http://localhost:${port}`)
})

const getFeeds = async () => {
    const response = await axios.get(
        "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    )
    return response.data
}
