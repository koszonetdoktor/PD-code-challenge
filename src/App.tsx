/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ImageGrid from "./components/ImageGrid"
import SearchBar from "./components/SearchBar"
import { useFeed } from "./services/useFeed"
import Spinner from "./components/Spinner"
import ErrorSign from "./components/ErrorSign"
import { colors, sizes } from "./styles"

function App() {
    const { loading, error, feed, updateTags } = useFeed()

    if (error) return <ErrorSign>Could not load</ErrorSign>

    return (
        <div css={styles.root}>
            <div css={styles.innerContainer}>
                <SearchBar
                    onSearch={(tags) => updateTags(tags)}
                    loading={loading}
                />
                {loading ? (
                    <Spinner />
                ) : (
                    <ImageGrid feedItems={feed ? feed.items : []} />
                )}
            </div>
        </div>
    )
}

export default App

const styles = {
    root: css`
        background-color: ${colors.primary.light};
    `,
    innerContainer: css`
        margin: auto;
        max-width: 800px;
        padding: ${sizes.font.s};
        border-radius: 0 0 ${sizes.font.s} ${sizes.font.s};
        min-height: 100vh;
        background: white;
    `,
}
