import type { IRes } from "./response"

export interface IErrorRes extends IRes{
    errors?: object
}

export interface IErrorResGen<T extends object> extends IRes {
    errors?: T
}
