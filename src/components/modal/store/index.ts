import type { StoreApi, UseBoundStore } from 'zustand'
import type {IErrorRes} from '../../../models/interfaces/errorRes'

import { create } from 'zustand'


// type Hidden = 'fading-hidden' | 'hidden' | ''
interface IModalStore {
    hidden: string
    error: IErrorRes
    setHidden: (hiddenClass: string) => void
    setError: (error: IErrorRes) => void
}
const useModalStore: UseBoundStore<StoreApi<IModalStore>> = create(set => ({
    hidden: 'hidden',
    error: { message: '', status: 200 },
    setHidden: (hiddenClass) => set(state => ({
        ...state, hidden: hiddenClass
    })),
    setError: (error) => set(state => ({
        ...state, error: error
    }))
}))

export default useModalStore
