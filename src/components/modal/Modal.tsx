import type { PropsWithChildren } from "react";

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import modalStore from "./store";
import { FaXmark } from 'react-icons/fa6'

// css
import style from './Modal.module.css'

import { useStore } from "zustand";



function Modal({ children }: PropsWithChildren) {
    const hidden = useStore(modalStore, state => state.hidden)
    const setHidden = useStore(modalStore, state => state.setHidden)

    const hide = useCallback(() => {
        setHidden(style['fading-hidden'])
        setTimeout(() => {
            setHidden(style['hidden'])
        }, 300);
    }, [setHidden])
    useEffect(() => {
        function handKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape')
                hide()
        }

        window.addEventListener('keydown', handKeyDown)

        // cleanup
        return () => window.removeEventListener('keydown', handKeyDown)
    }, [hide])

    return createPortal(
        <div className={hidden}>
            <div className={style['backdrop']} onClick={hide}></div>
            <div className={style['modal']}>
                <FaXmark onClick={hide} className={style['close-icon']} />
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;