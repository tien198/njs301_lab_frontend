import { useStore } from "zustand"

import informModalStyle from './InformModal.module.css'

import Button from "../layouts/Button"
import Modal from "./Modal"
import modalStore from "./store"


type props = {
    truthyFnc: () => void
    falsyFnc: () => void
}

export default function InformModal({ truthyFnc, falsyFnc }: props) {
    const message = useStore(modalStore,
        state => state.resonse.message || state.resonse.name
    )

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