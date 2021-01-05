/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { colors, sizes } from "../styles"

export default function Spinner() {
    return (
        <div css={styles.root}>
            <div css={styles.spinner}></div>
        </div>
    )
}

const styles = {
    root: css`
        display: flex;
        justify-content: center;
        padding-top: ${sizes.space.m};
    `,
    spinner: css`
        border: 4px solid ${colors.primary.light};
        border-radius: 50%;
        border-top: 4px solid ${colors.primary.dark};
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `,
}
