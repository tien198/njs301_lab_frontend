import type { PropsWithChildren } from "react";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import useModalStore from "./store";
import { FaXmark } from 'react-icons/fa6'

// css
import style from './Modal.module.css'



function Modal({ children }: PropsWithChildren) {
    const hidden = useModalStore(state => state.hidden)
    const setHidden = useModalStore(state => state.setHidden)
    const hide = () => setHidden(style['fading-hidden'])


    useEffect(() => {
        function handKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape')
                hide()
        }

        window.addEventListener('keydown', handKeyDown)

        // cleanup
        return () => window.removeEventListener('keydown', handKeyDown)
    }, [])

    return createPortal(
        <div className={hidden}>
            <div className={style['backdrop']} onClick={hide}></div>
            <div className={`${style['modal']} `}>
                <FaXmark onClick={hide} className="fixed top-4 right-10 text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer" />
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;