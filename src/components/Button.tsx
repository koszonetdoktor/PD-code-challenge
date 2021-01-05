/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { colors, sizes } from "../styles"

type Props = {
    children: string
    onClick: () => void
    className?: string
}

export default function Button({ children, className, onClick }: Props) {
    return (
        <button
            onClick={disabled ? undefined : onClick}
            css={styles.root}
            className={className}
        >
            {children}
        </button>
    )
}

const styles = {
    root: css`
        background-color: ${colors.primary.dark};
        color: ${colors.primary.light};
        border: solid 2px transparent;
        font-size: ${sizes.font.m};
        padding: ${sizes.space.s} ${sizes.space.m};
        font-weight: 600;
        transition: all 0.4s ease;
        transition-property: border-color;
        border-radius: 2rem;
        &:focus {
            outline: none;
        }
        &:hover {
            border-color: ${colors.secondary};
            cursor: pointer;
        }
    `,
}
