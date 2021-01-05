import { METHODS } from "http"

export async function getFeed(): Promise<any> {
    const response = await fetch(
        "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    )
    if (response.ok) return response.json()
    throw response
}
