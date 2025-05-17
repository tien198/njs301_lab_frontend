import type { IRes } from ".."


export interface IErrorRes<T = object> extends IRes, Error {
    cause?: T
}



