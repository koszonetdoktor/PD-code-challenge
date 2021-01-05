/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react"
import { StrictMode } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { colors } from "./styles"

const styles = {
    root: css`
        body {
            font-family: "sans-serif";
            background-color: ${colors.primary.light};
            margin: 0;
        }
    `,
}

ReactDOM.render(
    <StrictMode>
        <Global styles={styles.root} />
        <App />
    </StrictMode>,
    document.getElementById("root")
)
