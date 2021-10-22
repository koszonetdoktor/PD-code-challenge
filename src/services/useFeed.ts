import { useEffect, useRef, useState } from "react"
import { Feed } from "../types"

export function useFeed(): {
    feed: Feed | null
    error: string | null
    loading: boolean
    updateTags: (tags: string[]) => void
} {
    const isMounted = useRef(false)
    const [feed, setFeed] = useState<Feed | null>(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [tags, setTags] = useState<string[]>([])

    useEffect(() => {
        isMounted.current = true
        async function init() {
            try {
                setLoading(true)
                const tagsQuery = `tags=${tags.join(",")}`
                const response = await fetch(
                    `/.netlify/functions/feed${
                        tags.length ? `?${tagsQuery}` : ""
                    }`
                )
                if (response.ok) {
                    const json = await response.json()
                    console.log("JSON", json)
                    if (isMounted.current) setFeed(json.data)
                } else {
                    throw response
                }
            } catch (err) {
                if (isMounted.current) setError(err)
            } finally {
                if (isMounted.current) setLoading(false)
            }
        }
        init()
        return () => {
            isMounted.current = false
        }
    }, [tags])

    return {
        feed,
        error,
        loading,
        updateTags: (tags: string[]) => setTags(tags),
    }
}
