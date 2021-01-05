import { useEffect, useRef, useState } from "react"
import { Feed } from "../types"

export function useFeed(): {
    feed: Feed | null
    error: string | null
    loading: boolean
} {
    const isMounted = useRef(false)
    const [feed, setFeed] = useState<Feed | null>(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        isMounted.current = true
        async function init() {
            try {
                const response = await fetch("/feeds")
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
    }, [])

    return { feed, error, loading }
}
