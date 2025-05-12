import Button from "../layouts/Button"
import Modal from "./Modal"
import useModalStore from "./store"

type props = {
    truthyFnc: () => void
    falsyFnc: () => void
}

export default function ErrorModal({ truthyFnc, falsyFnc }: props) {
    const error = useModalStore(state => state.error)

    return (
        <Modal>
            <div className="w-full p-10 shadow flex flex-col items-center justify-center gap-7">
                <span className="text-lg font-bold">{error.status}</span>
                <span>{error.message}</span>
                <div className="flex justify-between gap-10">
                    <span><Button onClick={truthyFnc}>Ok</Button></span>
                    <span><Button isBgWhite onClick={falsyFnc}>Cancel</Button></span>
                </div>
            </div>
        </Modal>
    )
}