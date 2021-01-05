import React from "react"
import ImageGrid from "./components/ImageGrid"
import SearchBar from "./components/SearchBar"
import { useFeed } from "./services/useFeed"

function App() {
    const { loading, error, feed, updateTags } = useFeed()

    if (loading) return <div>Spinner</div>
    if (!feed) return <div>Page not found</div>
    if (error) return <div>Error</div>

    return (
        <div>
            <SearchBar onSearch={(tags) => updateTags(tags)} />
            <ImageGrid feedItems={feed.items} />
        </div>
    )
}

export default App
