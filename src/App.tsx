import React, { useEffect, useState } from "react"
import { getFeed } from "./services"

function App() {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function init() {
            try {
                setLoading(true)
                const response = await getFeed()
                console.log("RESP", response)
            } catch (err) {
                setError("Could not get feed!")
                console.log("ERR", err)
            } finally {
                setLoading(false)
            }
        }
        init()
    }, [])

    return <div>Hello</div>
}

export default App
