/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { KeyboardEvent, ChangeEvent } from "react"
import { colors, sizes } from "../styles"

type Props = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onEnter: () => void
    className?: string
}

export default function Input({ value, className, onChange, onEnter }: Props) {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onEnter()
        }
    }

    return (
        <input
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
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
