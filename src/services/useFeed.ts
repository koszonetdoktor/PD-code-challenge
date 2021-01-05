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
        console.log("updated", tags)
        isMounted.current = true
        async function init() {
            try {
                const tagsQuery = `tags=${tags.join(",")}`
                const response = await fetch(
                    `/feeds${tags.length ? `?${tagsQuery}` : ""}`
                )
                if (response.ok) {
                    const json = await response.json()
                    if (isMounted.current) setFeed(json)
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
