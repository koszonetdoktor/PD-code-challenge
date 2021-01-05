const axios = require("axios")
const express = require("express")
const app = express()
const port = 3001

app.get("/feeds", async (req, res) => {
    try {
        const feeds = await getFeeds(req.query.tags)
        res.send(feeds)
    } catch (err) {
        console.error(err)
        res.status(500).send("Something broke!")
    }
})

app.listen(port, () => {
    console.log(`Proxy server is listening at http://localhost:${port}`)
})

const getFeeds = async (tags) => {
    const url =
        "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    const response = await axios.get(url, { params: { tags } })
    return response.data
}
