/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

type Props = {
    children: string
    onClick: () => void
    disabled?: boolean
    className?: string
}

export default function Button({
    children,
    className,
    disabled,
    onClick,
}: Props) {
    return (
        <button
            onClick={disabled ? undefined : onClick}
            css={disabled ? [styles.root, styles.disabled] : styles.root}
            className={className}
        >
            {children}
        </button>
    )
}

const styles = {
    root: css``,
    disabled: css``,
}
