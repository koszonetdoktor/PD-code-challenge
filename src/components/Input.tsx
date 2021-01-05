/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ChangeEvent } from "react"

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
    root: css``,
}
