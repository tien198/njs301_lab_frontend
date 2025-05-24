import type React from 'react'

import btnStyle from './Button.module.css'

type props = {
    isBgWhite?: boolean
}

export default function Button({ value, children, type, className, onClick, isBgWhite = false }: React.ButtonHTMLAttributes<HTMLButtonElement> & props) {
    const bg = isBgWhite
        ? btnStyle['btn-white']
        : btnStyle['btn-primary']

    return (
        <button
            type={type}
            onClick={onClick}
            className={className ?? 'btn' + ' ' + bg}
        >
            {value ?? children ?? 'send'}
        </button>
    )
}