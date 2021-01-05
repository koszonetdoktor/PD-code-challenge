/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ChangeEvent } from "react"
import { colors, sizes } from "../styles"

type Props = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
}

export default function Input({ value, className, onChange }: Props) {
    return (
        <input
            value={value}
            onChange={onChange}
            css={styles.root}
            className={className}
        />
    )
}

const styles = {
    root: css`
        border-width: 0;
        background: ${colors.primary.light};
        border-radius: 2rem;
        color: ${colors.primary.dark};
        font-size: ${sizes.font.s};
        outline: none;
        text-indent: ${sizes.space.s};
        padding: ${sizes.space.s};
    `,
}
