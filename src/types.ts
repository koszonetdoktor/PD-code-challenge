export type Feed = {
    items: FeedItem[]
}

export type FeedItem = {
    author: string
    author_id: string
    date_taken: string
    description: string
    link: string
    media: { m: string }
    published: string
    tags: string
    title: string
}
