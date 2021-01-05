/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import ImageGrid from "./components/ImageGrid"
import SearchBar from "./components/SearchBar"
import { useFeed } from "./services/useFeed"
import Spinner from "./components/Spinner"
import ErrorSign from "./components/ErrorSign"

function App() {
    const { loading, error, feed, updateTags } = useFeed()

    if (error) return <ErrorSign>Could not load</ErrorSign>

    return (
        <div css={styles.root}>
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
    )
}

export default App

const styles = {
    root: css`
        max-width: 800px;
        margin: auto;
    `,
}
