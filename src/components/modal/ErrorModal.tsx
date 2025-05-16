import { useStore } from "zustand"

import informModalStyle from './InformModal.module.css'

import Button from "../layouts/Button"
import Modal from "./Modal"
import modalStore from "./store"

type props = {
    truthyFnc: () => void
    falsyFnc: () => void
}

export default function ErrorModal({ truthyFnc, falsyFnc }: props) {
    const status = useStore(modalStore, state => state.resonse.status)
    const message = useStore(modalStore, state => state.resonse.message)
    const errors = useStore(modalStore, state => state.resonse.cause)

    let errorEntries: [string, string][] = []
    if (errors)
        errorEntries = Object.entries(errors)



    return (
        <Modal>
            <div className={informModalStyle["container"]}>
                <span className={informModalStyle["status"]}>{status}</span>
                <span>{message}</span>
                <span className={informModalStyle['error-list']}>{
                    errorEntries.map(i =>
                        <span key={i[0]} >{i[1]}</span>
                    )
                }</span>
                <div className={informModalStyle["actions"]}>
                    <span><Button onClick={truthyFnc}>Ok</Button></span>
                    <span><Button isBgWhite onClick={falsyFnc}>Cancel</Button></span>
                </div>
            </div>
        </Modal>
    )
}