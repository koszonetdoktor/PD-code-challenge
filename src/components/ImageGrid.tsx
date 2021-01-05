/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { sizes } from "../styles"
import { FeedItem } from "../types"

type Props = {
    feedItems: FeedItem[]
}

export default function ImageGrid({ feedItems }: Props) {
    if (feedItems.length === 0)
        return <h1 css={styles.noImage}>No image found</h1>

    return (
        <div css={styles.root}>
            {feedItems.map((item, index) => (
                <div
                    key={`${item.date_taken}${item.title}${index}`}
                    css={styles.imgContainer}
                >
                    <img src={item.media.m} alt={item.title} />
                </div>
            ))}
        </div>
    )
}

const styles = {
    root: css`
        display: grid;
        grid-template-columns: repeat(auto-fit, 10rem);
        grid-gap: 6px;
        justify-content: center;
        padding-top: ${sizes.space.m};
    `,
    imgContainer: css`
        & img {
            max-width: 100%;
            max-height: 100%;
            display: block; /* remove extra space below image */
        }
    `,
    noImage: css`
        text-align: center;
    `,
}
