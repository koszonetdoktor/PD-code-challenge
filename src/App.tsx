import React, { useState } from "react"
import ImageGrid from "./components/ImageGrid"
import Input from "./components/Input"
import { useFeed } from "./services/useFeed"

function App() {
    const { loading, error, feed } = useFeed()

    if (loading) return <div>Spinner</div>
    if (!feed) return <div>Page not found</div>
    if (error) return <div>Error</div>

    return (
        <div>
            <Input onChange={} />
            <ImageGrid feedItems={feed.items} />
        </div>
    )
}

export default App
