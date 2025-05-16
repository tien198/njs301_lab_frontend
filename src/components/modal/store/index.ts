import type { StoreApi } from 'zustand'
import type { IErrorRes } from '../../../models/interfaces/errorRes'
import type { IRes } from '../../../models/interfaces/response'

import { createStore } from 'zustand'

import modalStyle from '../Modal.module.css'



// type Hidden = 'fading-hidden' | 'hidden' | ''
interface IModalStore {
    hidden: string
    // response indicate whether successRes or errorRes
    resonse: IRes & IErrorRes,
    show: () => void
    setHidden: (hiddenClass: string) => void
    setError: (error: IErrorRes) => void
}
const modalStore: StoreApi<IModalStore> = createStore(set => ({
    hidden: modalStyle['hidden'],
    resonse: { message: '', name:'' },
    show: () => set(state => ({ ...state, hidden: '' })),
    setHidden: (hiddenClass) => set(state => ({
        ...state, hidden: hiddenClass
    })),
    setError: (error) => set(state => ({
        ...state, resonse: error
    }))
}))

export default modalStore