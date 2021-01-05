/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { colors, sizes } from "../styles"

type Props = {
    children: string
}

export default function ErrorSign({ children }: Props) {
    return (
        <div css={styles.root}>
            <span>{children}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={colors.error}
                width="48px"
                height="48px"
            >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
        </div>
    )
}

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${sizes.font.m};
        color: ${colors.error};
    `,
}
