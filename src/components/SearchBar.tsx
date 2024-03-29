/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ChangeEvent, useState } from "react"
import { sizes } from "../styles"
import Button from "./Button"
import Input from "./Input"

type Props = {
    loading: boolean
    onSearch: (tags: string[]) => void
}

export default function SearchBar({ loading, onSearch }: Props) {
    const [searchText, setSearchText] = useState("")

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    const handleSearchClick = () => {
        const tags = searchText !== "" ? searchText.split(" ") : []
        onSearch(tags)
        analytics.track("Searched", {
            tags,
        })
    }

    return (
        <div css={styles.root}>
            <Input
                value={searchText}
                onChange={handleSearchChange}
                onEnter={handleSearchClick}
                css={styles.input}
            />
            <Button
                onClick={handleSearchClick}
                disabled={loading}
                css={styles.button}
            >
                Search
            </Button>
        </div>
    )
}

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        @media (min-width: 50rem) {
            flex-direction: row;
        }
    `,
    input: css`
        width: auto;
        @media (min-width: 50rem) {
            width: 100%;
        }
    `,
    button: css`
        margin: ${sizes.space.m} 0 0 0;
        @media (min-width: 50rem) {
            margin: 0 0 0 ${sizes.space.m};
        }
    `,
}
