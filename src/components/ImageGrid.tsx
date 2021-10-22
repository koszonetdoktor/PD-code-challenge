/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"
import { sizes } from "../styles"
import { FeedItem } from "../types"

type Props = {
    feedItems: FeedItem[]
}

export default function ImageGrid({ feedItems }: Props) {
    const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set())

    const handleClick = (title: string) => () => {
        if (selectedImages.has(title)) {
            selectedImages.delete(title)
        } else {
            selectedImages.add(title)
        }
        setSelectedImages(new Set(Array.from(selectedImages)))
    }

    if (feedItems.length === 0)
        return <h1 css={styles.noImage}>No image found</h1>

    return (
        <div css={styles.root}>
            {feedItems.map((item, index) => (
                <div
                    key={`${item.date_taken}${item.title}${index}`}
                    css={
                        selectedImages.has(item.title)
                            ? [styles.selected, styles.title]
                            : styles.title
                    }
                    onClick={handleClick(item.title)}
                >
                    {item.title}
                    {/* <img src={item.media.m} alt={item.title} /> */}
                </div>
            ))}
        </div>
    )
}

const styles = {
    root: css`
        display: grid;
        grid-gap: 6px;
        grid-template-columns: repeat(auto-fit, 100%);
        justify-content: center;
        padding-top: ${sizes.space.m};
        @media (min-width: 25rem) {
            grid-template-columns: repeat(auto-fit, 10rem);
        }
    `,
    imgContainer: css`
        & img {
            max-width: 100%;
            max-height: 100%;
            display: block;
            margin: auto;
        }
    `,
    noImage: css`
        text-align: center;
    `,
    selected: css`
        color: cyan;
    `,
    title: css`
        font-weight: bold;
        font-family: sans-serif;
        text-decoration: underline;
        &:hover {
            cursor: pointer;
        }
    `,
}
