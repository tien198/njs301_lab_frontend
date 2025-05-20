import { useStore } from "zustand"

import modalStyle from './Modal.module.css'
import informModalStyle from './InformModal.module.css'

import Button from "../layouts/Button"
import Modal from "./Modal"
import modalStore from "./store"
import type ErrorRes from "../../models/ErrorResponse"


type props = {
    truthyFnc?: () => void
    falsyFnc?: () => void
}

function fnc() {
    modalStore.setState({ hidden: modalStyle['fading-hidden'] })
    setTimeout(() => {
        modalStore.setState({ hidden: modalStyle['hidden'] })
    }, 300);
}

export default function InformModal({ truthyFnc = fnc, falsyFnc = fnc }: props) {
    const message = useStore(modalStore,
        state => state.resonse.message || (state.resonse as ErrorRes).name
    )

    const type = useStore(modalStore, state => state.type)
    if (type !== 'inform')
        return <></>

    return (
        <Modal>
            <div className={informModalStyle["container"]}>
                <span>{message}</span>
                <div className={informModalStyle["actions"]}>
                    <span><Button onClick={truthyFnc}>Ok</Button></span>
                    <span><Button isBgWhite onClick={falsyFnc}>Cancel</Button></span>
                </div>
            </div>

        </Modal>
    )
}