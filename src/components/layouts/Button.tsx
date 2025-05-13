import type { MouseEventHandler, ReactNode } from 'react'

import btnStyle from './Button.module.css'

type props = {
    value?: string
    children?: ReactNode
    className?: string
    isBgWhite?: boolean
    type?: "submit" | "reset" | "button" | undefined
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ value, children, type, className, isBgWhite = false, onClick }: props) {
    const bg = isBgWhite
        ? btnStyle['btn-white']
        : btnStyle['btn-primary']

    return (
        <button
            type={type}
            onClick={onClick}
            className={className ?? btnStyle['btn'] + ' ' + bg}
        >
            {value ?? children ?? 'send'}
        </button>
    )
}