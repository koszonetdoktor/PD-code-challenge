/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { FeedItem } from "../types"

type Props = {
    feedItems: FeedItem[]
}

export default function ImageGrid({ feedItems }: Props) {
    return (
        <ul css={styles.list}>
            {feedItems.map((item) => (
                <li key={item.date_taken}>
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
