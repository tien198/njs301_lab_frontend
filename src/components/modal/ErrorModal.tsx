import Button from "../layouts/Button"
import Modal from "./Modal"
import useModalStore from "./store"

type props = {
    truthyFnc: () => void
    falsyFnc: () => void
}

export default function ErrorModal({ truthyFnc, falsyFnc }: props) {
    const status = useModalStore(state => state.error.status)
    const message = useModalStore(state => state.error.message)
    const error = useModalStore(state => state.error.errors)
    let errorEntries: [string, string][] = []
    if (error)
        errorEntries = Object.entries(error)



    return (
        <Modal>
            <div className="w-full p-10 shadow flex flex-col items-center justify-center gap-7">
                <span className="text-lg font-bold">{status}</span>
                <span>{message}</span>
                <span className="flex flex-col gap-4">{
                    errorEntries.map(i =>
                        <span>{i[1]}</span>
                    )
                }</span>
                <div className="flex justify-between gap-10">
                    <span><Button onClick={truthyFnc}>Ok</Button></span>
                    <span><Button isBgWhite onClick={falsyFnc}>Cancel</Button></span>
                </div>
            </div>
        </Modal>
    )
}