import type { IRes } from "./response"


export interface IErrorRes<T = object> extends IRes, Error {
    cause?: T
}



