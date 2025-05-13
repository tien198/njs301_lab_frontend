type props = {
    msg: string
    className?: string
}

import style from './ErrorMsg.module.css'

export default function ErrorMsg({ msg, className }: props) {
    return (
        <div className={className??style['error-text']}>
            <span>{msg}</span>
        </div>
    )
}