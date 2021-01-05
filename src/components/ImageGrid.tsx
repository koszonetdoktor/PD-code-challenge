/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { FeedItem } from "../types"

type Props = {
    feedItems: FeedItem[]
}

export default function ImageGrid({ feedItems }: Props) {
    if (feedItems.length === 0) return <div>No image</div>

    return (
        <ul css={styles.list}>
            {feedItems.map((item, index) => (
                <li key={`${item.date_taken}${item.title}${index}`}>
                    <img src={item.media.m} alt={item.title} />
                </li>
            ))}
        </ul>
    )
}

const styles = {
    list: css`
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    `,
}
