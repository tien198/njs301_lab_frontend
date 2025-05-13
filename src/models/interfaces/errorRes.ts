
export interface IErrorRes {
    status: number
    message: string
    errors?: object
}

export interface IErrorResGen<T extends object> {
    status: number
    message: string
    errors?: T
}
